import home from './pages/home.js';
import logout from './pages/logout.js';
import register from './pages/register.js';
import notFound from './pages/notFound.js'

const router = async function(){
    // 라우트 목록들
    const routes = [
        {
            path: '/client/' , view: home
        },
        {
            path: '/client/logout' , view: logout
        },
        {
            path: '/client/register' , view: register
        },
    ];
    // location.pathname 과 일치여부 판별, array로 반환
    const pageMatches = routes.map((route)=>{
        return {
            route:route,
            isMatch: route.path === location.pathname,
        };
    });
    // isMatch가 true인 놈만 반환 => 현재 페이지 정보
    let match = pageMatches.find((pageMatch)=>pageMatch.isMatch);
    //최종 page 보여주기
    if (!match) {
        match = {
          route: location.pathname,
          isMatch: true,
        };
        const page = new notFound();
        document.querySelector("body").innerHTML = await page.getHtml();
      } else {
        const page = new match.route.view();
        document.querySelector("body").innerHTML = await page.getHtml();
      }

}

document.addEventListener('DOMContentLoaded',function(){
    document.body.addEventListener('click',function(e){
        if (e.target.matches('#jsRegister')){
            e.preventDefault();
            history.pushState(null, null, e.target.parentNode.href);
            router();
        }
    })
})

window.addEventListener('popstate',function(e){
    console.log('popstate')
    router();
})


