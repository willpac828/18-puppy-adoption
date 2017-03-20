const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';


// data is an empty array
export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return dispatch => fetch(apiUrl)
      .then(res => res.json())
      .then((puppyList) => {
        // we're done.  now do findall complete with the data we just got back
        dispatch(findAllComplete(puppyList));
      });
}

// data is null because no such thing as an empty obj.
function findOneComplete(data = null) {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data,
  };
}

export function createComplete(data = null) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}

// export function create(formData) {
//   return dispatch => fetch(apiUrl) {
//     method: 'POST',
//     headers: { Accept: 'applicatoin/json', 'Content-Type': 'a'}
//   }
//     .then(res) =>
// }

function updateComplete(data = null) {
  return {
    type: 'PUPPY@UPDATE_COMPLETE',
    data,
  };
}
