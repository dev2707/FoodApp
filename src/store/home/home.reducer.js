import {homeaction} from './homeactiontype';

const getInitialState = () => ({
  isLoad: false,
 
});

export const home = (state = getInitialState(), action) => {
  switch (action.type) {
 

    default:
      return state;
  }
};
