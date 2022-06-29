const body = document.querySelector('body');
const darkModeBtn = document.getElementById('jsDarkModeBtn');

const darkStyle = 'darkStyle';
const lightStyle = 'lightStyle';

let isDarkStyle = false; 


function onDarkModeBtnClick(event){
    if (!isDarkStyle){
        darkModeBtn.innerText = 'LIGHT';
        darkModeBtn.classList.add(lightStyle)
        body.classList.add(darkStyle)
        isDarkStyle = true;
    } else {
        darkModeBtn.innerText = 'DARK';
        darkModeBtn.classList.remove(lightStyle)
        body.classList.remove(darkStyle);
        isDarkStyle = false;
    }
    
}

if (darkModeBtn){
    darkModeBtn.addEventListener('click',onDarkModeBtnClick)
}

function init(){

}

init();