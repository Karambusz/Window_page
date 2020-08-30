const forms = ()=> {
    const form = document.querySelectorAll('form'),
        phoneInputs = document.querySelectorAll("input[name='user_phone']");

    phoneInputs.forEach(item => {
        item.addEventListener('input', ()=> {
            item.value = item.value.replace(/\D/, '');
        });
    });

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
            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.innerHTML = message.success;
            })
            .catch(()=> statusMessage.innerHTML = message.failure)
            .finally(()=> {
                item.reset();
                setTimeout(()=> {
                    statusMessage.remove();
                }, 4000);
            });
            
        });
    });

};

export default forms;