import React, { useState, useEffect, ReactElement } from 'react';
import CSS from 'csstype';
import apiReqs from '../../API/apiReqs';
import ReviewCard from './ReviewCard';
import { IReview, IUser } from '../index.d';

interface Styles {
  reviewsSection: CSS.Properties;
  opinions: CSS.Properties;
}
const st: Styles = {
  reviewsSection: {
    width: '70vw',
  },
  opinions: {
    marginTop: '10vh',
  },
};

interface PropTypes {
  user: IUser;
  carId: string;
}
function ReviewTable({ carId, user }: PropTypes): ReactElement {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect((): void => {
    apiReqs
      .getReviews(carId)
      .then((reviews) => setReviews(reviews))
      .catch(console.error);
  }, [carId]);

  const jwtToken = sessionStorage.getItem('jwtToken');
  const revDetails = {
    carId,
    updatedAt: new Date(),
    carRating: 0,
    useful: 0,
    text: '',
    userFirstName: user ? user.firstName : '',
    userLastName: user ? user.lastName : '',
  };
  const newReview = <ReviewCard revDetails={revDetails} newRev={true} setReviews={setReviews} />;
  const revPosts = reviews.map((review, i) => {
    return <ReviewCard revDetails={review} setReviews={setReviews} key={review._id} />;
  });

  return (
    <>
      <h2 style={st.opinions}>Opinions</h2>
      <section style={st.reviewsSection}>
        {jwtToken ? newReview : null}
        {revPosts}
      </section>
    </>
  );
}

export default ReviewTable;
