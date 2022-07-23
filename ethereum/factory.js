import web3 from './web3';
import TaskFactory from './build/contracts/TaskCreator.json';

const TaskFactoryAddress = "0x4Bf2AeAe78559e4e2D81E34043e4e162Cd03d94F";

const instance = new web3.eth.Contract(TaskFactory.abi, TaskFactoryAddress);

export default instance;