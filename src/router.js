import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>
      import("./views/Home.vue"),
      meta: {
        title: 'Home - KATHEESH\'s official Website',
      }
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import("./views/About.vue"),
      meta: {
        title: 'About - KATHEESH\'s official Website',
      }
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: () =>
        import("./views/Blog.vue"),
      meta: {
        title: 'Blogs - KATHEESH\'s official Website',
      }
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
        import("./views/Contact.vue"),
      meta: {
        title: 'Contact - KATHEESH\'s official Website',
      }
    },
    {
      path: "/thanks",
      name: "Thanks",
      component: () =>
        import("./views/Thanks.vue"),
      meta: {
        title: 'Thanks a lot! - KATHEESH\'s official Website',
      }
    }
  ]
});