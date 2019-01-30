pragma solidity ^0.4.25;

contract CrowdCollab { 
    struct Request {
        string description;
        uint amount;
        address recipient;
        bool complete;
        mapping(address=>bool) approvals;
        uint approvalCount; 
    }

    address public manager;
    uint public minimumContribution;
    string public campaignDescription;
    mapping(address=>bool) public supporters;
    uint public numberSupporters;
    Request[] public requests;

    modifier managerOnly() {
        require(msg.sender == manager);
        _;
    }

    modifier supporterOnly() {
        require(supporters[msg.sender]);
        _;
    }

    constructor(address creator, uint minContribution, string description) public {  
        manager = creator;
        minimumContribution = minContribution;
        campaignDescription = description;
    }

    function support() public payable {
        require(msg.value > minimumContribution);
        supporters[msg.sender] = true;
        numberSupporters ++;
    }      

    function createRequest(string description, uint amount, address recipient) 
        public managerOnly {
        Request memory newRequest = Request({
            description: description,              
            amount: amount,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint requestId) public supporterOnly {
        Request storage request = requests[requestId];   
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }  

    function finalizeRequest(uint requestId) public managerOnly {
        Request storage request = requests[requestId];
        require(!request.complete);    
        require(request.approvalCount > (numberSupporters/2));
        request.recipient.transfer(request.amount);
        request.complete = true;
    } 
}
