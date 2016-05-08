import HomeView from './views/overviews.vue';
import Order from './views/order.vue';

export default function (router) {
	router.map({
		'/': {
			name: 'home',
			component: HomeView
		},
		'/overviews': {
			name: 'overviews',
			component: HomeView
		},
		'/order/add/': {
			name: 'order',
			component: Order
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
	});
}