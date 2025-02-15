import { combineReducers } from '@reduxjs/toolkit';
import testSlice from './testSlice';
import NavBarSlice from './NavBarSlice';
import filterClassesSlice from './filterClassesSlice';

const rootReducer = combineReducers({
  testReducer: testSlice,
  navBarState: NavBarSlice,
  filterClassesReducer: filterClassesSlice,
});

export default rootReducer;
