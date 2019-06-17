// import {
//     Card
//   } from 'elemental';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/style.css';

// import 'fish-ui/styles/button.less'
// import FishUI from 'fish-ui'
// import ReadTime from './components/ReadTime.vue'
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // Vue.component('BackToTop', BackToTop);
    // Vue.use(Card);
    Vue.use(ElementUI);
    
    Vue.prototype.$ourstory = 'Our Story';

    // Vue.use(FishUI)
    
    // Vue.component('ReadTime', ReadTime)
    // ...apply enhancements to the app
    router.beforeEach((to, from, next) => {
        /* must call `next` */
        // console.log(to);
        if (typeof document != 'undefined')
        {
            if (to.path.startsWith('/ar/'))
            {
                // console.log('RTL')
                document.documentElement.setAttribute("dir","rtl");
                // console.log(document.);
            }
            else
            {
                document.documentElement.setAttribute("dir","");
            }
        }
        next();
      })
  }