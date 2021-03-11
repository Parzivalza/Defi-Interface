const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const ViewAmountVodka = async () => {
    const account = await getCurrentAccount();
    var POOL: any = (document.querySelector("#POOL2")! as HTMLInputElement).valueOf() 
    var Amount = await window.contractSlav.methods.pendingVodka(POOL.value, account).call({from: account}).catch((error: any) => {
        console.log(error)
    });
    console.log(Amount)
    document.querySelector('#Dinfo2')!.innerHTML = (Amount/1E18).toString();
};