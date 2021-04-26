import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const WithdrawAxeToken = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL4")! as HTMLInputElement).valueOf() 
    var AmoutLPtoWithdraw: any = (document.querySelector("#AmountLP4")! as HTMLInputElement).valueOf(); 
    try{
        await window.contractAxe.methods.withdraw(POOL.value, AmoutLPtoWithdraw.value).send({from: account}).catch((error: any) =>{
            alert('Please accept the transaction if you want to withdraw!')
        });
        LogEvents(`Withdrawing: ${AmoutLPtoWithdraw.value} AXE from pool ${POOL.value}`); 
    }
    catch(e){
        alert("Please enter the number of unharvested AXE tokens to withdraw!")
    }  
};