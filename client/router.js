import notFound from "./pages/notFound.js";
import home from "./pages/home.js";
import register from "./pages/register.js";

// import {bgImg,clock,darkMode,login} from "./js";
// import clock from "./js/clock.js"
// import darkMode from "./js/darkMode.js"
// import login from "./js/login.js"


console.log('router excuted')

const jsRouter = document.getElementById('jsRouter');

// pushState
const router = function(event){
    event.preventDefault();
    window.history.pushState(null,null,event.target.parentNode.href);
    handleLocation();
}

const routes = {
    "notFound" : notFound,
    "/home" : home,
    "/home/register" : register,
}

// 패이지 변경
let handleLocation = async function(){


    const path = window.location.pathname;
    
    const view = routes[path] || routes['notFound'];

    const page = new view();

    const html = await page.getHtml();


    document.getElementById("root").innerHTML = html;

    await page.executeJS();

}
// change page on navigate
window.addEventListener('popstate',handleLocation)

window.router = router;

//change page on initial load
handleLocation();
console.log('router excute complete')