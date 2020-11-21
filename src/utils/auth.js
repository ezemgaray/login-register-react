const key = 'user'
// get token on localStorage
export const getUserToken = () => {
  const user = localStorage.getItem("user");
  return user
    ? JSON.parse(user)
    : null
}

export const setUserToken = (userToken) => {
  localStorage.setItem(key, JSON.stringify(userToken));
}

export const deleteUserToken = () => {
  localStorage.removeItem(key)
}