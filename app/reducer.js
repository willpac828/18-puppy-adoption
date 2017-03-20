// {} below means it's a property of redux?
import { combineReducers } from 'redux';
import puppies from './reducer/puppies';

export default combineReducers({
  puppies,
});
