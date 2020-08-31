import checkNumInputs from "./checkNumInputs";


const changeModalState = (state)=> {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
        windowWidth = document.querySelectorAll("#width"),
        windowHeight = document.querySelectorAll("#height"),
        windowType = document.querySelectorAll("#view_type"),
        windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs('#width');
    checkNumInputs('#height');

    const dimensions = [];

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => { 
            item.addEventListener(event, ()=> {
                if(event === "input") {
                    if (!state.form) {
                        state.form = 1;
                    }
                    state.type = "tree";
                }
                switch(item.nodeName) {
                    case "SPAN":
                        state[prop] = i+1;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if(i == j ) {
                                    box.checked = true;
                                }
                            });
                            dimensions.forEach(elem => {
                                elem.value = "";
                            });
                        } else {
                            state[prop] = item.value;
                            dimensions.push(item);
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;