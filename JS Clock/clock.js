const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minnutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hour}` : hours}:${
        minnutes < 10 ? `0${minnutes}`: minnutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();