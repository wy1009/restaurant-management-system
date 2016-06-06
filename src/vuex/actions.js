export const loginSuccess = function ({dispatch, state}, userInfo) {
    dispatch('LOGINSUCCESS', userInfo)
    this.$route.router.go({name: 'home'})
}

export const dispatchHoldOnObj = function({$dispatch, state}, orderMealList, customer) {
    dispatch('HOLDON', orderMealList, customer)
    this.$route.router.go({name: 'order-add'})
}