const name_ = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btn = document.getElementById('btn-send');
const result = document.getElementById('result')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        result.innerHTML = error[1];
        result.classList.add('red');
    }else{
        result.innerHTML = "E-mail sent successfully";
        result.classList.add('green');
    }
});

const validarCampos = () => {
    let error = [];
    if(name_.value-length == 0 || email.value.length == 0 || message.value.length == 0){
        error[0] = true;
        error[1] = 'To submit the form correctly, all fields must be filled in';
        return error;
    }
    else if(name_.value.length < 3){
        error[0] = true;
        error[1] = 'The name cannot contain less than 3 letters';
        return error;
    }
    else if(name_.value.length > 20){
        error[0] = true;
        error[1] = 'The name cannot contain more than 20 letters';
        return error;
    }
    return error;
}

