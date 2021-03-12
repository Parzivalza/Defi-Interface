const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const ViewAmountAmmo = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL3")! as HTMLInputElement).valueOf() 
    var Amount = await window.contractAmmo.methods.pendingAmmo(POOL, account).call({from: account}).catch((error: any) => {
        console.log(error)
    });
    document.querySelector('#Dinfo3')!.innerHTML = (Amount/1E18).toString();

};