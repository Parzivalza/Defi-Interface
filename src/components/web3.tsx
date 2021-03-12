import Web3 from "web3";
import contractRose from "../contractdata/RoseswapAbi.json";
import contractSlav from "../contractdata/SlavSwapAbi.json";
import contractAmmo from "../contractdata/AmmoSwapAbi.json";

const contractAddressRoseSwap = '0x5059acdCe47C783442a353fcD2a7D226155f0135'; 
const contractAddressSlavSwap = '0x9eBbCD5B4b0B3fd43212e8D7C3aC5c041200B45a';
const contractAddressAmmoSwap = '0x8cB8C3b6834CbA511b55b7fE2852d76Bd49697a3'; 

const startWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  } else {
    window.alert("Metamask not detected!");
  }
};

const loadContract = async (Abi: any, Address: any) => {
  return await new window.web3.eth.Contract(Abi, Address);
};

export const LoadWeb3 = async () => {
  await startWeb3();
  window.contractSlav = await loadContract(contractSlav.abi, contractAddressSlavSwap);
  window.contractRose = await loadContract(contractRose.abi, contractAddressRoseSwap);
  window.contractAmmo = await loadContract(contractAmmo.abi, contractAddressAmmoSwap);
};