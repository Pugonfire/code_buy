import web3 from './web3';
import Campaign from './build/contracts/CrowdCollab.json';

export default address => {
  // console.log("Campaign", Campaign.abi);
  return new web3.eth.Contract(Campaign.abi, address);
};
