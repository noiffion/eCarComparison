import React, { useState, useEffect, ReactElement, FormEvent, ChangeEvent } from 'react';
import moment from 'moment';
import CSS from 'csstype';
import styled from 'styled-components';
import { Alert } from '@zendeskgarden/react-notifications';
import { Textarea } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import RatingStar from './RatingStar';
import upArrow from '../../Images/upArrow.png';
import downArrow from '../../Images/downArrow.png';
import starEmpty from '../../Images/ratingStar.png';
import starFull from '../../Images/ratingStarFull.png';
import { IReview, FormMethod } from '../index.d';
import apiReqs from '../../API/apiReqs';

interface Styles {
  reviewCard: CSS.Properties;
  reviewBody: CSS.Properties;
  carRating: CSS.Properties;
  posted: CSS.Properties;
  poster: CSS.Properties;
  postRating: CSS.Properties;
  alert: CSS.Properties;
  editPosted: CSS.Properties;
  editText: CSS.Properties;
  buttonWrapper: CSS.Properties;
  editReviewBody: CSS.Properties;
}
const st: Styles = {
  alert: {
    zIndex: 1000,
    fontSize: '18px',
    position: 'absolute',
    alignSelf: 'center',
  },
  reviewCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '3vh 0 3vh 0',
    padding: '1vh 1vw',
    boxShadow: '3px 3px 7px #adff2f',
  },
  reviewBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  carRating: {
    minWidth: '160px',
    textAlign: 'right',
  },
  posted: {
    textAlign: 'right',
    fontSize: '16px',
    fontStyle: 'italic',
  },
  poster: {
    color: '#00ff00',
  },
  postRating: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '5vw',
    paddingTop: '2vh',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5vh',
  },
  editReviewBody: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '14vh',
  },
  editPosted: {
    width: '100%',
    textAlign: 'right',
    fontSize: '16px',
    fontStyle: 'italic',
  },
  editText: {
    fontSize: '18px',
  },
};

const ArrowImg = styled.img`
  height: 40px;
  width: 60px;
  &:hover {
    cursor: pointer;
  }
`;

const CancelB = styled(Button)`
  font-size: 16px;
  border-color: #adff2f;
  color: #adff2f;
  margin-left: 1%;
  &:hover {
    border-color: #00ff00;
    color: #00ff00;
    background-color: transparent;
  }
`;

const DeleteB = styled(Button)`
  font-size: 16px;
  border-color: #adff2f;
  color: #adff2f;
  margin-left: 1%;
  &:hover {
    border-color: #b22222;
    color: #b22222;
    background-color: transparent;
  }
`;

const EditB = styled(Button)`
  font-size: 16px;
  border-color: #adff2f;
  color: #adff2f;
  margin-left: 1%;
  &:hover {
    border-color: #00ff00;
    color: #00ff00;
    background-color: transparent;
  }
`;

const SubmitB = styled(Button)`
  font-size: 16px;
  border-color: #adff2f;
  color: #adff2f;
  margin-left: 1%;
  &:hover {
    border-color: #00ff00;
    color: #00ff00;
    background-color: transparent;
  }
`;

interface PropTypes {
  revDetails: IReview;
}
function ReviewCard({ revDetails }: PropTypes): ReactElement {
  const {
    _id,
    userId,
    userFirstName,
    userLastName,
    updatedAt,
    text,
    carRating,
    useful,
    voters,
  } = revDetails;
  const [postVotes, setPostVotes] = useState<number>(useful!);
  const [reviewText, setReviewText] = useState<string>(text!);
  const [timeStamp, setTimeStamp] = useState<Date>(updatedAt!);
  const [rateCar, setRateCar] = useState<number>(carRating!);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
      const userData = JSON.parse(atob(jwtToken.split('.')[1]));
      if (userId === userData._id) setIsEditable(true);
    }
  }, [userId]);

  const stars = new Array(5).fill(null).map((_, i) => {
    const imgSrc = i + 1 > rateCar ? starEmpty : starFull;
    return <RatingStar imgSrc={imgSrc} key={Symbol(i).toString()} />;
  });

  const displayAlert = (message: string, delay: number): void => {
    setAlert(true);
    setAlertMsg(message);
    setTimeout(() => {
      setAlert(false);
      setAlertMsg('');
    }, delay);
  };

  const updatePostRating = (toIncrease: boolean): void => {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const userData = jwtToken && JSON.parse(atob(jwtToken.split('.')[1]));
    if (!jwtToken) {
      displayAlert('You need to be logged in to vote!', 1200);
    } else if (userData._id === userId) {
      displayAlert(`You can't vote for your own post!`, 1200);
    } else if (voters && voters.includes(userData._id)) {
      displayAlert(`You've already voted for this post!`, 1200);
    } else {
      const usefulUpdate = {
        useful: toIncrease ? postVotes + 1 : postVotes - 1,
      };
      apiReqs
        .updReview(jwtToken, usefulUpdate, _id!)
        .then((updatedReview) => {
          updatedReview.useful && setPostVotes(updatedReview.useful);
          updatedReview.updatedAt && setTimeStamp(updatedReview.updatedAt);
        })
        .catch(console.error);
    }
  };

  const handleReviewText: FormMethod<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    event.preventDefault();
    setReviewText(event.currentTarget.value);
  };

  const submitUpdate: FormMethod<FormEvent<HTMLFormElement>> = (event) => {
    event.preventDefault();
    const jwtToken = sessionStorage.getItem('jwtToken');
    apiReqs
      .updReview(jwtToken!, { text: reviewText }, _id!)
      .then((updatedReview) => {
        updatedReview.text && setReviewText(updatedReview.text);
        updatedReview.updatedAt && setTimeStamp(updatedReview.updatedAt);
      })
      .catch(console.error);
    setIsBeingEdited(false);
  };

  const postedAt = `${moment(timeStamp).fromNow()} (${moment(timeStamp).format('MMM Do YYYY')})`;
  const displayReview = (
    <>
      <div style={st.reviewBody}>
        <div style={st.postRating}>
          <ArrowImg src={upArrow} alt="up arrow" onClick={() => updatePostRating(true)} />
          <div>{postVotes}</div>
          <ArrowImg src={downArrow} alt="down arrow" onClick={() => updatePostRating(false)} />
        </div>
        <div>{reviewText}</div>
        <div style={st.carRating}>{stars}</div>
      </div>
      <div style={st.posted}>
        Posted by{' '}
        <span style={st.poster}>
          {userFirstName} {userLastName}
        </span>{' '}
        — {postedAt}
        {isEditable ? <EditB onClick={() => setIsBeingEdited(true)}>Edit</EditB> : null}
      </div>
    </>
  );

  const editReview = (
    <form onSubmit={submitUpdate}>
      <div style={st.editReviewBody}>
        <Textarea style={st.editText} onChange={handleReviewText} value={reviewText} />
        <div style={st.carRating}>{stars}</div>
      </div>
      <div style={st.buttonWrapper}>
        <div>
          <DeleteB onClick={() => null}>Delete</DeleteB>
        </div>
        <div style={st.editPosted}>
          Posted by{' '}
          <span style={st.poster}>
            {userFirstName} {userLastName}
          </span>{' '}
          — {postedAt}
          <SubmitB type="submit">Submit</SubmitB>
          <CancelB onClick={() => setIsBeingEdited(false)}>Cancel</CancelB>
        </div>
      </div>
    </form>
  );

  return (
    <article style={st.reviewCard}>
      {isAlert ? (
        <Alert style={st.alert} type="info">
          {alertMsg}
        </Alert>
      ) : null}
      {isBeingEdited ? editReview : displayReview}
    </article>
  );
}

export default ReviewCard;
