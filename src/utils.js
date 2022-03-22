export const setUsername = (username) => {
  localStorage.setItem("username", username);
};

export const removeUsername = () => {
  localStorage.removeItem("username");
};
