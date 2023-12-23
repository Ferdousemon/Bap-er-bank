document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposite ammount from the deposite input f9eld
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDepositTotal = parseFloat(newDepositString);
    
    //step-3: get the current deposit total 
    //for non-inut (element other thaninput, textarea ) use inner Text to get the text 
    
    const depositElement = document.getElementById('deposit-total');
    const previousDepositString = depositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositString);
    
    //step-4: ad number  to set the total deposit 

    const currentDeposit = previousDepositTotal + newDepositTotal;
    
    //set total balance
    depositElement.innerText = currentDeposit;

    //step-5: calculate current total balance
    const balanceElement = document.getElementById('total-balance');
    const balanceString = balanceElement.innerText;
    const previousBalance = parseFloat(balanceString);

    //step-6:calculate current total balance
    const currentBalance = previousBalance + newDepositTotal;
   
    //set the balance total 
    balanceElement.innerText = currentBalance;
    
    
    
    
    
    
    
    
    depositField.value = '';
})