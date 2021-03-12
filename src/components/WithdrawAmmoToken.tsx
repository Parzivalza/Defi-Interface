import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const WithdrawAmmoToken = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL3")! as HTMLInputElement).valueOf() 
    var AmoutLPtoWithdraw: any = (document.querySelector("#AmountLP3")! as HTMLInputElement).valueOf(); 
    try{
        await window.contractAmmo.methods.withdraw(POOL.value, AmoutLPtoWithdraw.value).send({from: account}).catch((error: any) =>{
            alert('Please accept the transaction if you want to withdraw!')
        });
        LogEvents(`Withdrawing: ${AmoutLPtoWithdraw.value} AMMO from pool ${POOL.value}`); 
    }
    catch(e){
        alert("Please enter the number of unharvested AMMO tokens to withdraw!")
    }  
};