import notFound from "./pages/notFound.js";
import home from "./pages/home.js";
import register from "./pages/register.js";

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
const handleLocation = async function(){
    const path = window.location.pathname;
    const view = routes[path] || routes['notFound'];
    console.log(1)
    const page = new view();
    console.log(2,page)
    const html = await page.getHtml();
    console.log(3)

    document.getElementById("root").innerHTML = html;
    await page.inputScriptTags();
    console.log(4)
}
// navigate 할때 페이지 변경
window.addEventListener('popstate',handleLocation)

window.router = router;

//매번 페이지 로딩
handleLocation();