pragma solidity ^0.5.0;

import "./Task.sol";

contract TaskCreator {

    // list of campaigns
    address[] public tasks;
    
    // Create new task
    // Takes in two arrays for input and output. Must be arranged accordingly
    function createTask(string memory description, uint amount, uint[] memory inputs, uint[] memory outputs) public {
        
        address newTask = address (new Task(
            msg.sender,
            description,
            amount,
            inputs,
            outputs
        ));

        tasks.push(newTask);
    }

    // get all tasks
    function getTasks() public view returns (address[] memory) {
        return tasks;
    }
}
