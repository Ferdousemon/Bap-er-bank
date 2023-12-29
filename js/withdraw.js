//1.ass event handler with the withraw  button
//2.get the wothdraw a,ount from the withdraw input field 
//2-5. also make sure to convert the input into a number by using parseFloat
//3.Get the previous withdraw total
//4.calculate total withdraw amount
//4-5. set the total withdraw amount 
//5. get the perivous balance  total 
//6. calcualte new balance total
//6-5. set the new balance total
//7.clear the input field



//step-1: addEventListner
document.getElementById('btn-withdraw').addEventListener('click',function(){

    //step-2: get the withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    withdrawField.value = '';
    if(isNaN(newWithdraw)){
        alert('Please provide a input number');
        return;
    }

    //step-3:

    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    

    //step-4:


    //step-5
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
   
    if(newWithdraw>previousBalance){
        alert('bap er bank a eto tk nai');
        return;
    }
    const currentBalance = previousBalance - newWithdraw;

    //step-6: 

    balanceTotalElement.innerText = currentBalance;


    const currentWithdraw = previousWithdraw + newWithdraw;
    withdrawElement.innerText = currentWithdraw;
    //step-7


})