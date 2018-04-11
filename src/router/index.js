import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
	path: '/',
	name: 'home',
	component: resolve => require.ensure([], () => resolve(require('@/views/index/home.vue')), 'home')
}, {
	path: '/cardRecharge',
	name: 'cardRecharge',
	component: resolve => require.ensure([], () => resolve(require('@/views/recharge/cardRecharge.vue')), 'cardRecharge')
}, {
	path: '/codeRecharge',
	name: 'codeRecharge',
	component: resolve => require.ensure([], () => resolve(require('@/views/recharge/codeRecharge.vue')), 'codeRecharge')
}, {
	path: '/cardRecord/:type',
	name: 'cardRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/cardRecord.vue')), 'cardRecord')
}, {
	path: '/codeRecord/:type',
	name: 'codeRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/codeRecord.vue')), 'codeRecord')
}, {
	path: '/error404',
	name: 'error404',
	component: resolve => require.ensure([], () => resolve(require('@/views/error/error404.vue')), 'error')
}, {
	path: '/error500',
	name: 'error500',
	component: resolve => require.ensure([], () => resolve(require('@/views/error/error500.vue')), 'error')
}];

const router = new Router({
	mode: "history",
	routes
});

router.beforeEach((to, from, next) => {
	let date = new Date();
	let hour = date.getHours();
	if (8 <= hour <= 18) {
		next();
	} else {
		console.log(1221212);
	}
});

router.afterEach(transition => {
	
});

export default router;