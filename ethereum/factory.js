import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0xea3c94815ffe5c6cef94bfdb038ce86440ea5eb0";

console.log("web3 version", web3.version);
const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
