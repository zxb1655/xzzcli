export default {
  login({
    commit,
    dispatch
  }, params) {
    commit("setLoginState",true)
  },
}