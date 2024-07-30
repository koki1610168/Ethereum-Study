const ganache = require('ganache');
const { Web3 } = require('web3');
const assert = require('assert');
const { describe, before } = require('mocha');
// updated ganache and web3 imports added for convenience

// contract test code will go here
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
});

describe('Inbox', () => {
    it('deploys', () => {
        console.log(accounts);
    });
});