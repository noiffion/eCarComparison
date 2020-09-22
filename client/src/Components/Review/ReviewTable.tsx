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

  const revPosts = reviews.map((review) => <ReviewCard revDetails={review} key={review._id} />);

  return (
    <>
      <h2 style={st.opinions}>Opinions</h2>
      <section style={st.reviewsSection}> {revPosts} </section>
    </>
  );
}

export default ReviewTable;
