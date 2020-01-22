import React from 'react';

import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     price: state.carReducer.car.price,
//     name: state.carReducer.car.name,
//     image: state.carReducer.car.image,
//     features: state.carReducer.car.features,
//   }
// }

const Header = props => {
  // console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

export default connect(
  state => {
    return {
      price: state.carReducer.car.price,
      name: state.carReducer.car.name,
      image: state.carReducer.car.image,
      // features: state.carReducer.car.features,
    }
  },
  {})
  (Header);
