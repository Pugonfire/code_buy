import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0x2dBd38B291D9FF6Ab51236163f6AAe471519A875";

const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
