const APP_SESSION = 'ecom-app';

const sessionHandler = {
  persist: (sessionInfo) => {
    if (!sessionInfo) {
      throw new Error('Session information is not present');
    }

    window.localStorage.setItem(APP_SESSION, JSON.stringify(sessionInfo));
  },

  user: () => {
    const userInfo = window.localStorage.getItem(APP_SESSION);

    if (!userInfo) {
      console.warn('There is an issue with the user info in the local storage');
    }

    return JSON.parse(userInfo).user;
  },

  isSessionValid: () => {
    return !!window.localStorage.getItem(APP_SESSION);
  }
};

export { sessionHandler }
