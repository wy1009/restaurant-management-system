export const loginSuccess = function ({dispatch, state}, userInfo) {
    dispatch('LOGINSUCCESS', userInfo)
}