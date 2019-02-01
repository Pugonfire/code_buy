import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0x6bfaae73411a3d9eef9a7f334238981ca811c09f";

console.log("web3 version", web3.version);
const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
