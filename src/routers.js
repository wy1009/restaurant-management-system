module.exports = function (router) {
	router.map({
		'/': {
			name: 'home',
			component: require('./views/overviews.vue')
		},
		'/overviews': {
			name: 'overviews',
			component: require('./views/overviews.vue')
		}
		// '/customers': {
		// 	name: 'customers',
		// 	component: require('./views/customers.vue')
		// },
		// '/customers/processed': {
		// 	name: 'processed',
		// 	component: require('./views/customers-processed.vue')
		// },
		// '/customers/today': {
		// 	name: 'today',
		// 	component: require('./views/customers-today.vue')
		// },
		// '/customers/search': {
		// 	name: 'search',
		// 	component: require('./views/customers-search.vue')
		// }
	});
}