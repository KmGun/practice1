import JSbgImg from "../js/bgImg.js"
import JSclock from "../js/clock.js"
import JSdarkMode from "../js/darkMode.js"
import JSlogin from "../js/login.js"
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
        <div class="register">
            
        </div>
        <a href="http://localhost:3006/auth/test">쿠키 테스트</a>   
        `;
    }
    async executeJS(){
        //JSs to execute
        JSbgImg();
        JSclock();
        JSdarkMode();
        JSlogin();

        
    }
}
