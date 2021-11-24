export default {
  setLoginState(state, val) {
    state.isLogin = val;
  },
  setJwt(state, jwt) {
    state.jwt = jwt;
    uni.setStorageSync('jwt', jwt);
  },
}