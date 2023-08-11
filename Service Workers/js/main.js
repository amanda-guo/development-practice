// Make sure sw are supported
if('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_site.js') // change this to switch between the 2 sw files
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    })
}