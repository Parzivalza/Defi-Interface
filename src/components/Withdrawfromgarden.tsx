import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const Withdrawfromgarden = async () => {
    const account = await getCurrentAccount();
    var GardenAmount: any = (document.querySelector("#Garden")! as HTMLInputElement).valueOf() 
    try{
        await window.contractRose.methods.leaveStaking(GardenAmount.value).send({from: account});
        LogEvents(`Withdrawing: ${GardenAmount.value} ROSE from gardens`); 
    }
    catch(e){
        alert("Please enter the number of staked ROSE to withdraw!")
    }
};