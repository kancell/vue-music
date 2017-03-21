import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import recommand from '@/components/recommand'
import musiclist from '@/components/musiclist'

Vue.use(Router)
const routes =  [
		{
			path: '*',
			name: 'recommand',
			component: recommand
		},
		{
			path: '/musiclist/:id',
			name: 'musiclist',
			component: musiclist
		}
  ]
export default new Router({
		//mode: 'history',
		//saveScrollPostion: 'true',
		routes,
		scrollBehavior (to, from, savedPosition) {
			return savedPosition || { x: 0, y: 0 }
		}
})

