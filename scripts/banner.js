const wrapper = $("#header-nav-wrapper");
let lastScroll = 0;
const log = console.log;
log(wrapper.classList)
// set wrapper as ID 
// Switch document.body to selecting element by ID 


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if(currentScroll === 0) {
        document.getElementById("header-nav-wrapper").classList.remove("scroll-up")
        log(currentScroll)
    }
    if(currentScroll > lastScroll && !document.getElementById('header-nav-wrapper').classList.contains("scroll-down")) {
        document.getElementById('header-nav-wrapper').classList.remove('scroll-up');
        document.getElementById('header-nav-wrapper').classList.add('scroll-down');
        log(currentScroll)
    }
    if(currentScroll < lastScroll && document.getElementById('header-nav-wrapper').classList.contains("scroll-down")) {
        document.getElementById('header-nav-wrapper').classList.add('scroll-up');
        document.getElementById('header-nav-wrapper').classList.remove('scroll-down');
        log(currentScroll)
    }



    lastScroll = currentScroll;
    log(document.getElementById('header-nav-wraper').classList)
});