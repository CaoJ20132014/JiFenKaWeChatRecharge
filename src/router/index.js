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
	path: '/cardRecord',
	name: 'cardRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/cardRecord.vue')), 'cardRecord')
}, {
	path: '/codeRecord',
	name: 'codeRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/codeRecord.vue')), 'codeRecord')
}];

const router = new Router({
	mode: "history",
	routes
});

router.beforeEach((to, from, next) => {
	next();
});

router.afterEach(transition => {
	
});

export default router;