import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x7a1DD72559d97Ca6261e0446562e9403Be4858A7';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
