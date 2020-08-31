import checkNumInputs from "./checkNumInputs";

const forms = (state)=> {
    const form = document.querySelectorAll('form');

    checkNumInputs("input[name='user_phone']");

    const message = {
            loading: 'Идет отправка...',
            success: 'Отправлено! Скоро с вами свяжемся',
            failure: 'Что-то пошло не так...' 
        };

    const postData = async (url, data)=> {
        document.querySelector('.status').innerHTML = message.loading;
        let res = await fetch(url,{
            method: "POST",
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener("submit", (e)=> {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute("data-calc") === "end") {
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.innerHTML = message.success;
            })
            .catch(()=> statusMessage.innerHTML = message.failure)
            .finally(()=> {
                item.reset();

                for(let key in state) {
                    delete state[key];
                }
                console.log(state);
                setTimeout(()=> {
                    statusMessage.remove();
                    const windows = document.querySelectorAll("[data-modal]");
                    windows.forEach(item => {
                        item.style.display = 'none';
                        document.body.style.overflow = "";
                    });
                }, 3000);
            });
            
        });
    });

};

export default forms;