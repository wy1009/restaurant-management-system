export const loginSuccess = function ({dispatch, state}, userInfo) {
    dispatch('LOGINSUCCESS', userInfo)
    this.$route.router.go({name: 'home'})
}