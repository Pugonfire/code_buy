import web3 from './web3';
import Task from './build/contracts/Task.json';

export default address => {
  return new web3.eth.Contract(Task.abi, address);
};
