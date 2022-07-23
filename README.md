# CodeBuy Proof-of-Concept

* DAO where product owners trying to produce a digital product can quickly scrap together code from developers in the network
* Supports payment after every incremental development on application source code
* Benefits free-lance developers
* Supports agile methodology

### Instructions
1. cd ethereum
2. npm install
3. Change private key, network url and chain id in truffle.js
4. npm install @truffle/hdwallet-provider
5. truffle migrate --network private_poa
6. Copy "contract address" under Deploying...
7. Go to factory.js, update campaignFactoryAddress with the copied "contract address"

Program written for ML SEED Hackathon 2022
