import _ from 'lodash';

// "default state" does not equal "state"
// default state is empty array cuz we have an empty list of pups
export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
    // the _.unionBy spreads multiple arrays
    // while also checking for duplicates and erasing
    // our action object has a data property
    // this last argument says look for duplicates by id
      return _.unionBy(action.data, state, 'id');

    // the 3 below are different b/c we put them in an arrays
    // since they are all either finding or creating "one" (not an array)
    // cuz unionBy only works on arrays
    case 'PUPPY@FINDONE_COMPLETE':
    case 'PUPPY@CREATE_COMPLETE':
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    default:
      return state;

  }
}
