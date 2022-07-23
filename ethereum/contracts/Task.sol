pragma solidity ^0.5.0;


contract Task { 

    struct TestCase {
        string input;
        string output;
    }

    // Array of test cases
    TestCase[] public TestCases;

    // store address of task issuer
    address public taskMaker;

    // description about task
    string public taskDescription;

    // payable amount
    uint public amount;

    // status of task (complete/not complete)
    bool public complete;

    constructor(address creator, string memory description, uint amt) public {  
        taskMaker = creator;
        taskDescription = description;
        amount = amt;
        complete = false;
    }

    // Add test cases
    function addTestCase(string in, string out) public { 
        TestCase memory newTestCase = TestCase({
            input: in,
            output: out
        });
        TestCases.push(newTestCase);
    }

    // get no. of testcases
    function getTestCaseCount() public view returns (uint) {
        return TestCases.length;
    }

    // called when task has been solved
    function solve(address solver) public {
        complete = true; // mark task as solved
        solver.transfer(amount); // transfer prize amount to solver
    }

    // return info about task
    function getSummary() public view returns (uint, string, TestCases) {
        return (
            amount,
            description,
            TestCases
        );
    }
}
