function closeModal(selector) {
    const modalWindow = document.querySelector(selector);
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
    //document.body.classList.remove("modal-open"); // use class from bootstrap.css
}


const modals = () => {

    const scrollWidth = calcScroll();

    function openModal(selector) {
        const modalWindow = document.querySelector(selector);
        modalWindow.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollWidth}px`;
        //document.body.classList.add("modal-open"); // use class from bootstrap.css
        clearInterval(timerId);
    }


    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]");

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });
                openModal(modalSelector);
            });

        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            closeModal(modalSelector);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                closeModal(modalSelector);
            }
        });
    }

    function showModalByTime(selector, time) {
        return setTimeout(()=> {
            openModal(selector);
        }, time);
    }

    function calcScroll() {
        let div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";


        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }



    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    const timerId = showModalByTime(".popup", 5000);

};



export default modals;
export {closeModal};