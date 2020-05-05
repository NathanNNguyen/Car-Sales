import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { addFeatures } from '../actions/addFeatures';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    additionalFeatures: state.carReducer.additionalFeatures
  }
}

const AdditionalFeatures = props => {
  // console.log(props.addFeatures)

  const buyItem = item => {
    return {
      type: 'add-features',
      payload: item.id
    }
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeatures={props.addFeatures}
              buyItem={buyItem} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  { addFeatures }
)(AdditionalFeatures);
