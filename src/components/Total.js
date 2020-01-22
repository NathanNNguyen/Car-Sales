import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    price: state.carReducer.car.price,
    additionalPrice: state.priceReducer.additionalPrice
  }
}

const Total = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  mapStateToProps, {}
)(Total);
