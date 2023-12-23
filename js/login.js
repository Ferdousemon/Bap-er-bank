document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if(email === 'sontan@bap.com' &&  pass === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
       // alert('Salarput Thik koira Password Likh');
       window.location.href = 'pop.html';
    }

    
})
  