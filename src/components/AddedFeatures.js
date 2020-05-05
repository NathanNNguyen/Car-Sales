import React from 'react';

import { connect } from 'react-redux';
import { removeFeatures } from '../actions/removeFeatures';

import AddedFeature from './AddedFeature';

const mapStateToProps = state => {
  return {
    features: state.carReducer.car.features
  }
}

const AddedFeatures = props => {
  // console.log(props.removeFeatures)
  const removeItem = item => {
    return {
      type: 'remove-features',
      payload: item.id
    }
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeItem={removeItem}
              removeFeatures={props.removeFeatures} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  { removeFeatures }
)(AddedFeatures);
