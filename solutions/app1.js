const setCookie = (string = '') => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 15);
  const expires = now.toUTCString();
  document.cookie = `token=${string}; expires=${expires}; path=/`;
};

export default setCookie;
