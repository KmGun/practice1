import JSbgImg from "../js/bgImg.js"
import JSclock from "../js/clock.js"
import JSdarkMode from "../js/darkMode.js"
import jsRegister from "../js/register.js"


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
            <div class="register" id="jsRegister">
                    <p>
                        <input class= "register__id" type="text" name="id" id="jsId" placeholder="Enter Your Id">
                        <button class= "register__IdOverlapCheck" id ="jsIdOverlapCheckBtn">중복확인</button>   
                    </p>
                    <br>
                    <p>
                        <input class= "register__pw" type="password" name="pw" id="jsPw" placeholder="Enter Your Pw">
                    </p>
                    <br>
                    <p>
                        <input class= "register__pw2" type="password" name="pw2" id="jsPw2" placeholder="Enter Your Pw Again">
                    </p>
                    <br>

                    <p class="register__authBtn">
                        <input id = 'jsRegisterBtn' type="submit" value="회원가입">
                    </p>
            </div>
        `;
    }
    async executeJS(){
        //JSs to execute
        JSbgImg();
        JSclock();
        JSdarkMode();
        jsRegister();

        
    }
}


