import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurants: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.object),
    reviews: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Restaurant;
