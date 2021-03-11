const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const ViewAmountRoseToken = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL")! as HTMLInputElement).valueOf() 
    var Amount = await window.contractRose.methods.pendingCake(POOL.value, account).call({from: account}).catch((error: any) => {
        console.log(error)
    });
    document.querySelector('#Dinfo')!.innerHTML = (Amount/1E18).toString();
};