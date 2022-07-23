pragma solidity ^0.5.0;


contract Task { 

    // store address of task issuer
    address public taskMaker;

    // description about task
    string public taskDescription;

    // payable amount
    uint public amount;

    // test cases input
    uint[] public inputs;

    // test cases output
    uint[] public outputs;

    // status of task (complete/not complete)
    bool public complete = false;

    constructor(address creator, string memory description, uint amt, uint[] memory inp, uint[] memory outp) public {  
        taskMaker = creator;
        taskDescription = description;
        amount = amt;
        inputs = inp;
        outputs = outp;
    }

    // Add test cases
    // function addTestCase(string memory inp, string memory outp) public { 
    //     TestCase memory newTestCase = TestCase({
    //         input: inp,
    //         output: outp
    //     });
    //     TestCases.push(newTestCase);
    // }

    // get no. of testcases
    function getTestCaseCount() public view returns (uint) {
        return inputs.length;
    }

    // called when task has been solved
    function solve(address payable solver) public returns (uint) {
        if (complete = true) return 0;
        complete = true; // mark task as solved
        solver.transfer(amount); // transfer prize amount to solver
        return 1;
    }

    // return info about task
    function getSummary() public view returns (uint, string memory, uint[] memory, uint[] memory, bool) {
        return (
            amount,
            taskDescription,
            inputs,
            outputs,
            complete
        );
    }
}
