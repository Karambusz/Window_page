const modals = () => {

    function openModal(selector) {
        const modalWindow = document.querySelector(selector);
        modalWindow.style.display = "block";
        document.body.style.overflow = "hidden";
        //document.body.classList.add("modal-open"); // use class from bootstrap.css
        //clearInterval(timerId);
    }

    function closeModal(selector) {
        const modalWindow = document.querySelector(selector);
        modalWindow.style.display = "none";
        document.body.style.overflow = "";
        //document.body.classList.remove("modal-open"); // use class from bootstrap.css
    }



    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                openModal(modalSelector);
            });

        });

        close.addEventListener('click', () => {
            closeModal(modalSelector);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modalSelector);
            }
        });
    }

    function showModalByTime(selector, time) {
        return setTimeout(()=> {
            openModal(selector);
        }, time);
    }



    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    //const timerId = showModalByTime(".popup", 15000);

};



export default modals;