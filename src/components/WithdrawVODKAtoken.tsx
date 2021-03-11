import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const WithdrawVODKAtoken = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL2")! as HTMLInputElement).valueOf() 
    var AmoutLPtoWithdraw: any = (document.querySelector("#AmountLP2")! as HTMLInputElement).valueOf(); 
    try{
        await window.contractRose.methods.withdraw(POOL.value, AmoutLPtoWithdraw.value).send({from: account}).catch((error: any) =>{
            alert('Please accept the transaction if you want to withdraw!')
        });
        LogEvents(`Withdrawing: ${AmoutLPtoWithdraw.value} VODKA from pool ${POOL.value}`); 
    }
    catch(e){
        alert("Please enter the number of unharvested VODKA tokens to withdraw!")
    }  
};