import React, { useState, ReactElement } from 'react';
import moment from 'moment';
import CSS from 'csstype';
import styled from 'styled-components';
import { Alert } from '@zendeskgarden/react-notifications';
import RatingStar from './RatingStar';
import upArrow from '../../Images/upArrow.png';
import downArrow from '../../Images/downArrow.png';
import starEmpty from '../../Images/ratingStar.png';
import starFull from '../../Images/ratingStarFull.png';
import { IReview } from '../index.d';
import apiReqs from '../../API/apiReqs';

interface Styles {
  reviewCard: CSS.Properties;
  reviewBody: CSS.Properties;
  carRating: CSS.Properties;
  posted: CSS.Properties;
  poster: CSS.Properties;
  postRating: CSS.Properties;
  alert: CSS.Properties;
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
    width: '100%',
    minWidth: '30%',
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
};

const ArrowImg = styled.img`
  height: 40px;
  width: 60px;
  &:hover {
    cursor: pointer;
  }
`
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
  const postedAt = `${moment(updatedAt).fromNow()} (${moment(updatedAt).format('MMM Do YYYY')})`;
  const [postVotes, setPostVotes] = useState<number>(useful!);
  const [rateCar, setRateCar] = useState<number>(carRating!);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');

  const stars = new Array(5).fill(null).map((_, i) => {
    const imgSrc = ((i + 1) > rateCar) ? starEmpty : starFull;
    return <RatingStar imgSrc={imgSrc} key={Symbol(i).toString()}/>;
  });

  const updatePostRating = (toIncrease: boolean): void => {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const userData = jwtToken && JSON.parse(atob(jwtToken.split('.')[1]));
    if (!jwtToken) {
      setAlert(true);
      setAlertMsg(`You need to be logged in to vote!`);
      setTimeout(() => {
        setAlert(false);
        setAlertMsg('');
      }, 1200);
    } else if (userData._id === userId) {
      setAlert(true);
      setAlertMsg(`You can't vote for your own post!`);
      setTimeout(() => {
        setAlert(false);
        setAlertMsg('');
      }, 1200);
    } else if (voters && voters.includes(userData._id)) {
      console.log(userData, revDetails);
      setAlert(true);
      setAlertMsg(`You've already voted for this post!`);
      setTimeout(() => {
        setAlert(false);
        setAlertMsg('');
      }, 1200);
    } else {
      const usefulUpdate = {
        useful: toIncrease ? postVotes + 1 : postVotes - 1,
      }
      apiReqs
        .updReview(jwtToken, usefulUpdate, _id!)
        .then((updatedReview) => updatedReview.useful && setPostVotes(updatedReview.useful))
        .catch(console.error);
    }
  };

  return (
    <article style={st.reviewCard}>
      {isAlert ? (
        <Alert style={st.alert} type="info">
          {alertMsg}
        </Alert>
      ) : null}
      <div style={st.reviewBody}>
        <div style={st.postRating}>
          <ArrowImg src={upArrow} alt="up arrow" onClick={(event) => updatePostRating(true)} />
          <div>{postVotes}</div>
          <ArrowImg src={downArrow} alt="down arrow" onClick={(event) => updatePostRating(false)} />
        </div>
        <div>{text}</div>
        <div style={st.carRating}>{stars}</div>
      </div>
      <div style={st.posted}>
        Posted by <span style={st.poster}>{userFirstName} {userLastName}</span> — {postedAt}
      </div>
    </article>
  );
}

export default ReviewCard;
