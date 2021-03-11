import Web3 from "web3";
import { LogEvents } from "./LogEvents"

const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const OnLoad = async () => {
    const account = await getCurrentAccount();
    LogEvents(`web3 is present: ${Web3.version}`);
    LogEvents(`Current connected account: ${account}`);
};