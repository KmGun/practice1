export default class {
    constructor() {
        document.title = "home";
        }

    async getHtml() {
        return `
        <div class="clock" id="jsClockContainer">
            <h1 id='jsClockTitle'>0000년00월00일 (월) 오후00시00분</h1>
        </div>
        <div class="darkModeCon">
            <button id = 'jsDarkModeBtn' class="darkModeBtn">DARK</button>
        </div>
        <div class="login" id="jsLogin">
            <form action = "http://localhost:3006/auth/login" method="post">
                <p>
                    <input class= "login__id" type="text" name="id" id="jsId" placeholder="Enter Your Id">
                </p>
                <p>
                    <input class= "login__pw" type="password" name="pw" id="jsPw" placeholder="Enter Your Pw">
                </p>
                <p class="login__authBtn">
                    <input id = 'jsLogin' type="submit" value="로그인">
                </p>
            </form>
            <a href="/home/register">
                <button id = 'jsRegister' onclick="window.router(event)">회원가입</button>
            </a> 
        </div>
        `;
    }
    async inputScriptTags(){
        // make script tags
        let i = 0;
        const scriptlist = ['/js/clock.js','/js/darkMode.js','/js/login.js','/js/bgImg.js'];
        const jsRouter = document.getElementById('jsRouter');
        while (i<scriptlist.length){
            let scr = document.createElement('script');
            scr.src = scriptlist[i];
            scr.type = 'module';
            document.getElementById('jsRouter').after(scr);
            i++;
        }
    }
}
