import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import recommand from '@/components/recommand'
import musiclist from '@/components/musiclist'
import search from '@/components/search'
import musicdetail from '@/components/musicdetail'
import likelist from '@/components/likelist.vue'
Vue.use(Router)
const routes =  
	[
		{
			path: '/',
			name: 'recommand',
			component: recommand
		},
		{
			path: '/musiclist/:id',
			name: 'musiclist',
			component: musiclist
		},
		{ 	
			path: '/search', 
			name: 'search',
			component: search
		},
		{
			path: '/likelist',
			name: 'likelist',
			component: likelist
		}		
	]
	
export default new Router({
	routes,
	scrollBehavior (to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	}
})

