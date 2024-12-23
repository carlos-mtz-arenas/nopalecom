
const authenticate = async ({ username, password }) => {
  return {
    token: '2cb58da2-e08b-4c4f-a159-1c0e81edc77c',
    user: {
      name: 'User Doe',
      role: 'ADMIN'
    }
  };
};

export { authenticate };
