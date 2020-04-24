// import {
//     Card
//   } from 'elemental';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/style.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(far)

config.autoAddCss = false



export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    Vue.use(ElementUI);
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.component('font-awesome-layers', FontAwesomeLayers)
    // Vue.use(Cite);
    
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