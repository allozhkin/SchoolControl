import { combineReducers } from '@reduxjs/toolkit';
import testSlice from './testSlice';

const rootReducer = combineReducers({
  testReducer: testSlice,
});

export default rootReducer;
