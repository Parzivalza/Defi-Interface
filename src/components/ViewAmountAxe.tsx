const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const ViewAmountAxe = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL4")! as HTMLInputElement).valueOf() 
    var Amount = await window.contractAxe.methods.pendingAxe(POOL, account).call({from: account}).catch((error: any) => {
        console.log(error)
    });
    document.querySelector('#Dinfo4')!.innerHTML = (Amount/1E18).toString();

};