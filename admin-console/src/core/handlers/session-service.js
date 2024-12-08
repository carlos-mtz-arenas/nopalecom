
const sessionService = {
  store: () => {
    return "98f3608b-c5d8-4125-82cc-23e4bd19d2a4";
  },
  token: () => {
    return "JWT-sample";
  },
  user: () => {
    return {
      fullName: 'carlos',
      email: 'admin@sample.com',
      uuid: "2689b486-09e7-4df8-bf63-44d5efa79dc2",
      roles: ['employee']
    }
  },
  isSessionValid: () => {
    return true;
  }
};

export { sessionService }
