import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}
const pools =['ROSE', 'ROSE/BNB', 'ROSE/BUSD', 'BUSD/BNB?'];

export const WithdrawRoseToken = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL")! as HTMLInputElement).valueOf() 
    var AmoutLPtoWithdraw: any = (document.querySelector("#AmountLP")! as HTMLInputElement).valueOf(); 
    try{
        await window.contractRose.methods.withdraw(POOL.value, AmoutLPtoWithdraw.value).send({from: account}).catch((error: any) =>{
            alert('Please accept the transaction if you want to withdraw!')
        });
        LogEvents(`Withdrawing: ${AmoutLPtoWithdraw.value} ROSE from pool ${pools[POOL.value]}`); 
    }
    catch(e){
        alert("Please enter the number of unharvested ROSE tokens to withdraw!")
    }  
};