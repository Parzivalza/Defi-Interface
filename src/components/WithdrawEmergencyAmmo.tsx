import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const WithdrawEmergencyAmmo = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL3")! as HTMLInputElement).valueOf() 
    try{
        await window.contractAmmo.methods.emergencyWithdraw(POOL.value).send({from: account});
    LogEvents(`Withdrawing: max LP without rewards`); 
    }
    catch(e){
        alert("Please accept the transaction if you want to withdraw your LP!")
    }
};