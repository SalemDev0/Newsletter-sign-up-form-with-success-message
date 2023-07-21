const box_1 = document.getElementById("box-1");
const box_2 = document.getElementById("box-2");
let email = document.getElementById("email-put")
let text = document.getElementById("text");
let button = document.getElementById('btnn')
let Keyput = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    function emailInpcolor(){
            email.style.marginTop = '0.5rem';
            email.style.backgroundColor = '#ff605529';
            email.style.border = "1px solid red";
            email.style.color = "red"
    }

    button.addEventListener('click', (e) =>{
        e.preventDefault();

        if(email.value.match(Keyput)){
            box_1.classList.add('hiidden');
            box_2.classList.remove('hiidden');
            text.style.display = 'none'

        } else if (email.value === "" || !email.value.match(Keyput)){
                box_1.classList.remove('hiidden');
                box_2.classList.add('hiidden');
                text.innerHTML = "Valid email required";
                text.style.color = "#e70e02";
                text.style.display = 'block'
                emailInpcolor ();
        }
    }) 
