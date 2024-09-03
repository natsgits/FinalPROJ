const signname = document.getElementById('username').value;
const pw = document.getElementById('password').value;
const form = document.getElementById('signform');
const errmsgn = document.getElementById("errn");
const errmsgp = document.getElementById("errp")




form.addEventListener('submit',(e)=>{
    var err= 0;
    if(signname.length == 0 || signname === null){
        err=1;
    }

    if(pw.length <= 4 || pw.length >= 20){
        err=1;
    }

    if(err==1){
        e.preventDefault();
        errmsgn.innerText = "Enter full username"
    }
    if(err==2){
        e.preventDefault();
        errmsgp.innerText = "Password should be more than 4 characters and less than 20 characters";
    }
    
})