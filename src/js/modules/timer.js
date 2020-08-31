const timer = (selector, deadline) => {

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }

    function getTimeRemaining(endtime) {
        const temp = (Date.parse(endtime) - Date.parse(new Date())) / 1000,
            days = Math.floor(temp / (3600 * 24)),
            hours = Math.floor((temp / 3600) % 24),
            minutes = Math.floor((temp / 60) % 60),
            seconds = Math.floor(temp % 60);

        return {
            "total": temp,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(selector) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timerInterval = setInterval(()=> {
                updateClock(getTimeRemaining(deadline));
            }, 1000);


        updateClock(getTimeRemaining(deadline));
        
        function updateClock(obj) {

            if(obj.total > 0) {
                days.innerHTML = getZero(obj.days);
                hours.innerHTML = getZero(obj.hours);
                minutes.innerHTML = getZero(obj.minutes);
                seconds.innerHTML = getZero(obj.seconds);
            } else {
                clearInterval(timerInterval);
                days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = "00";
            }
        }
    }

    setClock(selector);

};


export default timer;