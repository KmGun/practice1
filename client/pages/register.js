import JSbgImg from "../js/bgImg.js"
import JSclock from "../js/clock.js"
import JSdarkMode from "../js/darkMode.js"


export default class {
    constructor() {
        document.title = "Register";
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
                <form action = "http://localhost:3006/auth/register" method="post">
                    <p>
                        <input class= "register__id" type="text" name="id" id="jsId" placeholder="Enter Your Id">
                    </p>
                    <p>
                        <input class= "register__pw" type="password" name="pw" id="jsPw" placeholder="Enter Your Pw">
                    </p>
                    <p>
                        <input class= "register__pw2" type="password" name="pw2" id="jsPw2" placeholder="Enter Your Pw Again">
                    </p>
                    <p class="register__authBtn">
                        <input id = 'jsRegister' type="submit" value="회원가입">
                    </p>
                </form>
            </div>
        `;
    }
    async executeJS(){
        //JSs to execute
        JSbgImg();
        JSclock();
        JSdarkMode();

        
    }
}


