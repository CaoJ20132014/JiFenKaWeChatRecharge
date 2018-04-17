import Vue from 'vue';
import Router from 'vue-router';
import { CheckMaintain } from '../until/http/request';

Vue.use(Router);

const routes = [{
	path: '/',
	name: 'home',
	component: resolve => require.ensure([], () => resolve(require('@/views/index/home')), 'home'),
	meta: {
		judge: false,		// 判断是否处于维护状态
		isAttente: true,	// 判断是否已经关注集分卡公众号
		index: 1
	}
}, {
	path: '/cardRecharge',
	name: 'cardRecharge',
	component: resolve => require.ensure([], () => resolve(require('@/views/recharge/cardRecharge')), 'cardRecharge'),
	meta: {
		judge: true,
		isAttente: true,
		index: 2
	}
}, {
	path: '/codeRecharge/cardid/pass/type',
	name: 'codeRecharge',
	component: resolve => require.ensure([], () => resolve(require('@/views/recharge/codeRecharge')), 'codeRecharge'),
	meta: {
		judge: true,
		isAttente: true,
		index: 3
	}
}, {
	path: '/cardRecord/:type',
	name: 'cardRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/cardRecord')), 'cardRecord'),
	meta: {
		judge: false,
		isAttente: true,
		index: 4
	}
}, {
	path: '/codeRecord/:type',
	name: 'codeRecord',
	component: resolve => require.ensure([], () => resolve(require('@/views/record/codeRecord')), 'codeRecord'),
	meta: {
		judge: false,
		isAttente: true,
		index: 5
	}
}, {
	path: '/error404',
	name: 'error404',
	component: resolve => require.ensure([], () => resolve(require('@/views/error/error404')), 'error'),
	meta: {
		judge: false,
		isAttente: true,
		index: 6
	}
}, {
	path: '/error500',
	name: 'error500',
	component: resolve => require.ensure([], () => resolve(require('@/views/error/error500')), 'error'),
	meta: {
		judge: false,
		isAttente: true,
		index: 7
	}
}, {
	path: '/holiday',
	name: 'holiday',
	component: resolve => require.ensure([], () => resolve(require('@/views/maintain/holiday')), 'holiday'),
	meta: {
		judge: false,
		isAttente: true,
		index: 8
	}
}, {
	path: '/daily',
	name: 'daily',
	component: resolve => require.ensure([], () => resolve(require('@/views/maintain/daily')), 'daily'),
	meta: {
		judge: false,
		isAttente: true,
		index: 9
	}
}, {
	path: '/everyday',
	name: 'everyday',
	component: resolve => require.ensure([], () => resolve(require('@/views/maintain/everyday')), 'everyday'),
	meta: {
		judge: false,
		isAttente: true,
		index: 10
	}
}, {
	path: '/attention',
	name: 'attention',
	component: resolve => require.ensure([], () => resolve(require('@/views/attente/attention')), 'attention'),
	meta: {
		judge: false,
		isAttente: true,
		index: 11
	}
}, {
	path: '/notActive',
	name: 'notActive',
	component: resolve => require.ensure([], () => resolve(require('@/views/state/notActive')), 'notActive'),
	meta: {
		judge: false,
		isAttente: true,
		index: 11
	}
}, {
	path: '/overdue',
	name: 'overdue',
	component: resolve => require.ensure([], () => resolve(require('@/views/state/overdue')), 'overdue'),
	meta: {
		judge: false,
		isAttente: true, 
		index: 11
	}
}, {
	path: '/freeze',
	name: 'freeze',
	component: resolve => require.ensure([], () => resolve(require('@/views/state/freeze')), 'freeze'),
	meta: {
		judge: false,
		isAttente: true,
		index: 11
	}
}, {
	path: '/alreadyUsed/cardid/pass/type',
	name: 'alreadyUsed',
	component: resolve => require.ensure([], () => resolve(require('@/views/state/alreadyUsed')), 'alreadyUsed'),
	meta: {
		judge: false,
		isAttente: true,
		index: 11
	}
}, {
	path: '*',
	redirect: '/'
}];

const router = new Router({
	// mode: "history",
	routes
});

router.beforeEach((to, from, next) => {
	let date = new Date();
	let hour = date.getHours();
	if (to.meta.judge) {
		CheckMaintain({}).then(response => {		// 判断是否处于维护状态
			if (response.code == '1') {
				next();
			} else if (response.code == '101'){		// 紧急维护
				router.push({
					name: 'daily'
				});
			} else if (response.code == '102') {	// 时段维护
				router.push({
					name: 'holiday'
				});
			} else if (response.code == '103') {	// 每日维护
				router.push({
					name: 'everyday'
				});
			} else if (response.code == '104') {	// 每周维护
				router.push({
					name: 'daily'
				});
			}
		}).catch(errpr => {});
	} else {
		next();
	}
});

router.afterEach(transition => {
	
});

export default router;