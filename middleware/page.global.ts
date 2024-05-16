export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path !== from.path) {
        window.scrollTo(0, 0)
    }
    to.meta.pageTransition = { name: 'page-left' };
    from.meta.pageTransition = { name: 'page-left' };
})