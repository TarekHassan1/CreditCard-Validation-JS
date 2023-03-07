function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const form = document.querySelector("form");
const date_cvc = document.querySelector(".date-cvc");
const cardNInput = document.querySelector("form input:nth-of-type(2)");
const input4 = document.querySelector("form .date-cvc input:nth-of-type(2)");
const input3 = document.querySelector("form .date-cvc input:nth-of-type(1)");

const input5 = document.querySelector("form .date-cvc input:nth-of-type(3)");
const fix_Div = document.querySelector(".fix-end");
const inputs = document.querySelectorAll("form input");

inputs.forEach((e) => {
    e.addEventListener("blur", () => {
        const id = e.getAttribute("id");

        if (e.value === "") {
            if (e.classList.contains("empty")) {

            } else {
                e.classList.add("empty", "border");

                const pAlert = document.createElement("p");
                pAlert.classList.add("alert");
                pAlert.classList.add(`${id}`)
     
                    pAlert.textContent = "This Can't Be Blank";

                
                if (e === input3 || e === input4 ) {

                    if (fix_Div.hasChildNodes()) {
                        if (e === input3) {
                            if (fix_Div.children[0].classList.contains("null")) {
                                fix_Div.insertBefore(pAlert, fix_Div.firstChild);


                            } else {
                                fix_Div.insertBefore(pAlert, fix_Div.firstChild);

                            }
                        } else if (e === input4) {
                            if (fix_Div.children[0].classList.contains("Date")) {
                                insertAfter(pAlert, fix_Div.firstChild);

                            } else {
                                insertAfter(pAlert, fix_Div.firstChild);

                            }
                        }

                    } else {
                        fix_Div.appendChild(pAlert);

                    }

                } else if (e === input5) {
                    pAlert.classList.add("end");
                    fix_Div.appendChild(pAlert);

                } else {
                    insertAfter(pAlert, e);

                }




            }
        }
        else {
            const pAlert = document.querySelector(`form p.${id}`);

            if(e === cardNInput){
                if(e.value.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/ig)){
                    e.classList.remove("empty", "border");
                    pAlert.classList.add("remove");
                    document.querySelector(".remove").remove();
                }else{
                pAlert.innerHTML = "Invalid Format";
                }
            }
            else{


            if (pAlert) {
                    e.classList.remove("empty", "border");

                    pAlert.classList.add("remove");

                            document.querySelector(".remove").remove();


            }
            }
            

        }
    })

})

// pAlert.textContent="This Cant Be Blank";