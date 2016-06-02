import Overviews from './views/Overviews.vue'
import OrderAdd from './views/OrderAdd.vue'
import Customer from './views/Customer.vue'
import Order from './views/Order.vue'
import Meal from './views/Meal.vue'
import User from './views/User.vue'

export default function (router) {
	router.map({
		'/': {
			name: 'home',
			component: Overviews
		},
		'/overviews/': {
			name: 'overviews',
			component: Overviews
		},
		'/order/add/': {
			name: 'order-add',
			component: OrderAdd
		},
		'/customer/': {
			name: 'customer',
			component: Customer
		},
		'/order/': {
			name: 'order',
			component: Order
		},
		'/meal/': {
			name: 'meal',
			component: Meal
		},
		'/user/': {
			name: 'user',
			component: User
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