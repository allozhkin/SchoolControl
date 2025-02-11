import { combineReducers } from '@reduxjs/toolkit';
import testSlice from './testSlice';
import NavBarSlice from './NavBarSlice';

const rootReducer = combineReducers({
  testReducer: testSlice,
  navBarState: NavBarSlice, 
});

export default rootReducer;
