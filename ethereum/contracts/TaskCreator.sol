pragma solidity ^0.5.0;

import "./Task.sol";

contract TaskCreator {

    // list of campaigns
    address[] public tasks;

    
    // Create new task
    // Takes in two arrays for input and output. Must be arranged accordingly
    function createTask(string memory description, uint amount, string[] inputs, string[] outputs) public {
        address newTask = address (new Task(
            msg.sender,
            description,
            amount
        ));

        // iterate through both arrays to create the test cases
        for (uint i=0; i<inputs.length; i++) {
            newTask.addTestCase(inputs[i], outputs[i]);
        }

        Tasks.push(newTask);
    }

    // get all tasks
    function getTasks() public view returns (address[] memory) {
        return tasks;
    }
}
