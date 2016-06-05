import Overviews from './views/Overviews.vue'
import OrderAdd from './views/OrderAdd.vue'
import Customer from './views/Customer.vue'
import Order from './views/Order.vue'
import Meal from './views/Meal.vue'
import User from './views/User.vue'
import Account from './views/Account.vue'
import Login from './views/Login.vue'

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
		},
		'/account/': {
			name: 'account',
			component: Account
		},
		'/login/': {
			name: 'login',
			component: Login
		}
	})
}