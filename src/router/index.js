import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import recommand from '@/components/recommand'
import musiclist from '@/components/musiclist'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'recommand',
			component: recommand
		},

		{
			path: '/musiclist/:id',
			name: 'musiclist',
			component: musiclist
		}
  ]
})
