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
        result.classList.remove('green');
        result.classList.add('red');
    }else{
        result.innerHTML = "E-mail sent successfully";
        result.classList.remove('red');
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
    
    else if(email.value.includes(' ') || name_.value.includes(' ')){
        error[0] = true;
        error[1] = 'The E-mail or Name cannot contain spaces';
    }

    else if(!email.value.includes('@')){
        error[0] = true;
        error[1] = 'Invalid E-mail';
    }

    else if(!email.value.includes('.')){
        error[0] = true;
        error[1] = 'Invalid E-mail';
    }
    return error;
}

