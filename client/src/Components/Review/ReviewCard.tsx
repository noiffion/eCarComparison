import React, { useState, ReactElement } from 'react';
import moment from 'moment';
import CSS from 'csstype';
import styled from 'styled-components';
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
}
const st: Styles = {
  reviewCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '1.5vh 0 1.5vh 0',
    padding: '1vh 1vw',
    boxShadow: '3px 3px 8px #e6e6e6',
    border: '1px solid #adff2f',
  },
  reviewBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  carRating: {
    width: '100%',
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
    userFirstName,
    userLastName,
    updatedAt,
    text,
    carRating,
    useful,
  } = revDetails;
  const postedAt = `${moment(updatedAt).fromNow()} (${moment(updatedAt).format('MMM Do YYYY')})`;
  const [postVotes, setPostVotes] = useState<number>(useful!);
  const [rateCar, setRateCar] = useState<number>(carRating!);

  const stars = new Array(5).fill(null).map((_, i) => {
    const imgSrc = ((i + 1) > rateCar) ? starEmpty : starFull;
    return <RatingStar imgSrc={imgSrc} key={Symbol(i).toString()}/>;
  });

  const updatePostRating = (toIncrease) => {
    const postRating = {

    };
    // toIncrease ? apiReqs.updReview() : null;
  };

  return (
    <article style={st.reviewCard}>
      <div style={st.reviewBody}>
        <div style={st.postRating}>
          <ArrowImg src={upArrow} alt="up arrow" />
          <div>{postVotes}</div>
          <ArrowImg src={downArrow} alt="down arrow" />
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
