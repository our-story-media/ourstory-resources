export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
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