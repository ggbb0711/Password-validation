let form=document.querySelector('form');
let password=document.querySelector('#password');
let confirm_pass=document.querySelector('#confirm-password');
let submit_message=document.querySelector('.submit-message');
var progress=0;
document.querySelectorAll('input[type="password"]').forEach(val=>{
    val.addEventListener('keyup',e=>{
        if(e.code==='Space'){
            val.nextElementSibling.innerText='Your password should not have white spaces';
            val.style.borderColor='red';
        }
    })
})
confirm_pass.addEventListener('input',e=>{
    submit_message.innerText='';
    confirm_pass.nextElementSibling.innerText='';
    confirm_pass.style.borderColor='black';
})
password.addEventListener('input',e=>{
    password_check(e.target.value)
})
function password_check(password){
    submit_message.innerText='';
    progress=0;
    var password_power=document.querySelector('.password-power');
    //check word_length
    if((password.match(/[a-zA-Z]/g)||[]).length>=3){
        progress+=5;
        document.querySelector('.words').className='words done';
        document.querySelector('.words>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.words').className='words close';
        document.querySelector('.words>.material-icons').innerText='close';
    }
    //check at least one number
    if(password.match(/[0-9]/g)){
        progress+=10;
        document.querySelector('.number').className='number done';
        document.querySelector('.number>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.number').className='number close';
        document.querySelector('.number>.material-icons').innerText='close';
    }
    //check for at least one upper case letter
    if(password.match(/[A-Z]/g)){
        progress+=5;
        document.querySelector('.upper_case').className='upper_case done';
        document.querySelector('.upper_case>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.upper_case').className='upper_case close';
        document.querySelector('.upper_case>.material-icons').innerText='close';
    }
    //check for at least one lower case letter
    if(password.match(/[a-z]/g)){
        progress+=5;
        document.querySelector('.lower_case').className='lower_case done';
        document.querySelector('.lower_case>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.lower_case').className='lower_case close';
        document.querySelector('.lower_case>.material-icons').innerText='close';
    }
    //check for at least one special character
    if(password.match(/[^a-zA-Z0-9\s]/g)){
        progress+=25;
        document.querySelector('.special').className='special done';
        document.querySelector('.special>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.special').className='special close';
        document.querySelector('.special>.material-icons').innerText='close';
    }
    //check for at least 8 character
    if(password.length>=8){
        progress+=50;
        document.querySelector('.limit').className='limit done';
        document.querySelector('.limit>.material-icons').innerText='done';
    }
    else{
        document.querySelector('.limit').className='limit close';
        document.querySelector('.limit>.material-icons').innerText='close';
    }
    //update the progress bar and the password bar
    document.querySelector('.progress').style.width=(progress>0)?`calc(${progress}% + 2px)`:0;
    if(progress<50){
        password_power.className='password-power close';
        password_power.innerText='very weak';
        document.querySelector('#password').style.borderColor='red';
        document.querySelector('#password+.close').innerText='Your password is not strong enough';
    }
    else if(progress<75){
        password_power.className='password-power close';
        password_power.innerText='weak';
        document.querySelector('#password').style.borderColor='red';
        document.querySelector('#password+.close').innerText='Your password is not strong enough';
    }
    else{
        password_power.className='password-power done';
        password_power.innerText='strong';
        document.querySelector('#password').style.borderColor='green';
        document.querySelector('#password+.close').innerText='';
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelectorAll('input[type="password"]').forEach(val=>{
        if (val.value===''){
            val.style.borderColor='red';
            val.nextElementSibling.innerText='You can\'t leave this field empty';
            submit_message.style.color='red';
            submit_message.innerText='Submit failed :(';
        }
    })
    if(password.value!==confirm_pass.value){
        confirm_pass.style.borderColor='red';
        confirm_pass.nextElementSibling.innerText='Your password doesn\'t match';
        submit_message.style.color='red';
        submit_message.innerText='Submit failed :(';
    }
    else if(progress<75){
        password.style.borderColor='red';
        if(!password.nextElementSibling.innerText) password.nextElementSibling.innerText='Your password is not strong enough';
        submit_message.style.color='red';
        submit_message.innerText='Submit failed :(';
    }
    else{
        submit_message.style.color='green';
        submit_message.innerText='Submit successfully :)';
    }
})