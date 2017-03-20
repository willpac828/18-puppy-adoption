function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

function findOneComplete(data = null) {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data,
  };
}

function createComplete(data = null) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}

function updateComplete(data = null) {
  return {
    type: 'PUPPY@UPDATE_COMPLETE',
    data,
  };
}
