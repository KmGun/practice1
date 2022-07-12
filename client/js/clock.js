export default function clock(){
    
    const clockContainer = document.getElementById('jsClockContainer'),
        clockTitle = document.getElementById('jsClockTitle');

    const dayList = ['일','월','화','수','목','금','토']

    function getTime(){
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        clockTitle.innerText = `
            ${year}년${month < 10 ? `0${month}월` : `${month}월`}${date < 10 ? `0${date}일` : `${date}일`} (${dayList[day]}) ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}
        `
    }



    function init(){
        getTime();
        setInterval(getTime,1000)
    }

    init();

}



