// Main task is to keep the time matches with real time, 
// all the changes happen in seconds, hours, seconds

/* 
window.onload you can ensure that your JavaScript code 
is executed only when the entire web page, including its 
external resources, has finished loading, providing a 
reliable way to interact with and 
manipulate the page's elements.
*/
window.onload = () => {
    function buildClock()
    {

            const date = new Date();

            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;


            document.querySelector('#clock-hours').innerText = hours;
            document.querySelector('#clock-minutes').innerText = minutes;
            document.querySelector('#clock-seconds').innerText = seconds;

          

            setTimeout(buildClock, 100);
    }
    buildClock();

}
/*
            But the time we get here, is static we have to
            reload the page again and again
 */
