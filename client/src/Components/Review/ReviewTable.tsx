import React, { useState, useEffect, ReactElement } from 'react';
import CSS from 'csstype';
import apiReqs from '../../API/apiReqs';
import ReviewCard from './ReviewCard';
import { IReview } from '../index.d';

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
  carId: string;
}
function ReviewTable({ carId }: PropTypes): ReactElement {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect((): void => {
    apiReqs
      .getReviews(carId)
      .then((reviews) => setReviews(reviews))
      .catch(console.error);
  }, [carId]);

  const jwtToken = sessionStorage.getItem('jwtToken');
  const userData = jwtToken && JSON.parse(atob(jwtToken.split('.')[1]));
  const revDetails = {
    carId,
    updatedAt: new Date(),
    carRating: 0,
    useful: 0,
    text: '',
    userFirstName: userData ? userData.firstName : '',
    userLastName: userData ? userData.lastName : '',
  }
  const newReview = (
    <ReviewCard
      revDetails={revDetails}
      newRev={true}
      setReviews={setReviews}
    />
  )
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
