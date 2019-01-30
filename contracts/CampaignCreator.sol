pragma solidity ^0.4.25;

import "./CrowdCollab.sol";

contract CampaignCreator {
    address[] public campaigns;
    
    function createCampaign(uint minContribution, string description) 
        public {
            address newCampaign = new CrowdCollab(
                msg.sender,
                minContribution,
                description
            );

            campaigns.push(newCampaign);
    }
    
    function getCampaigns() public view returns( address[] ) {
        return campaigns;
    }
}
