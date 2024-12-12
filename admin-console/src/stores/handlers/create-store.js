
const createStore = async (storeInfo) => {
  if (!storeInfo) {
    throw new Error('Missing information');
  }

  return {
    ...storeInfo,
    uuid: 'e7c9d8df-d67d-49c3-8b9c-a53eb71b7a2f',
  };
}

export { createStore };
