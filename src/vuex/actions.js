export const loginSuccess = function ({dispatch, state}, userInfo) {
    dispatch('LOGINSUCCESS', userInfo)
    this.$router.auth = true
    console.log(this.$router)
}