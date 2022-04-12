const {assert} = require('chai')

const ShihVerse_nft = artifacts.require('./ShihVerse_nft');

// check for chai
require('chai')
.use(require('chai-as-promised'))
.should()

contract('ShihVerse_nft', (accounts) => {
    let contract
    before( async () => {
    contract = await ShihVerse_nft.deployed()
    })
    // testing container - describe

    describe('deployment', async() => {
        // test samples with writing it
        it('deploys successfully', async() => {
            const address = contract.address;
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
            assert.notEqual(address, 0x0)
        })

        it('has the name', async() => {
            const name = await contract.name()
            assert.equal(name, 'ShihVerse_nft')
        })

        it('has the symbol', async() => {
            const symbol =  await contract.symbol()
            assert.equal(symbol, 'SHIH')
        })
    })

    describe('minting', async () => {
        it('creates a NFT', async () => {
            const result = await contract.mint('https...1')
            const totalSupply = await contract.totalSupply()

            //Success
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            assert.equal(event._from, '0x0000000000000000000000000000000000000000', 'from is the contract')
            assert.equal(event._to, accounts[0], 'to is msg.sender')

            // Failure
            await contract.mint('https...1').should.be.rejected;
        })
    })

    describe('indexing', async () => {
        it('lists ShihVerse', async() => {
            await contract.mint('https...2')
            await contract.mint('https...3')
            await contract.mint('https...4')
            const totalSupply = await contract.totalSupply()

        // Loop through list and grab ShihVerse
            let result = []
            let ShihVerse_nft
            for(i = 1; i < totalSupply; i++) {
                ShihVerse_nft = await contract.ShihVerse(i - 1)
                result.push(ShihVerse_nft)
            }
    })
})

})