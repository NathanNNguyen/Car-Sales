const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}


export const carReducer = (state = initialState, action) => {
  // console.log(state)
  // console.log(action)

  switch (action.type) {
    case 'add-features': {
      const selectedFeature = state.additionalFeatures.find(
        (feature) => feature.id === action.payload.id)

      // const savedAdditional = [...state.additionalFeatures].filter(
      //   (feature) => feature.id !== action.payload.id)
      return {
        ...state,
        additionalPrice: state.additionalPrice + selectedFeature.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            action.payload
          ]
        },
        // additionalFeatures: [
        //   ...savedAdditional
        // ]
      }
    }
    case 'remove-features': {
      const selectedFeature = state.additionalFeatures.find(
        (feature) => feature.id === action.payload.id);

      const saved = [...state.car.features].filter(
        (feature) => feature.id !== action.payload.id)

      return {
        ...state,
        additionalPrice: state.additionalPrice - selectedFeature.price,
        car: {
          ...state.car,
          features: [
            ...saved
          ]
        }
      }
    }

    default:
      return state
  }
}

