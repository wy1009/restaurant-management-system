import Overviews from './views/Overviews.vue'
import Order from './views/Order.vue'
import Customer from './views/Customer.vue'

export default function (router) {
	router.map({
		'/': {
			name: 'home',
			component: Overviews
		},
		'/overviews': {
			name: 'overviews',
			component: Overviews
		},
		'/order/add/': {
			name: 'order',
			component: Order
		},
		'/customer/': {
			name: 'customer',
			component: Customer
		}
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
	})
}