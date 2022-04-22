import React, { Component } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3'
import ShihVerse_nft from '../src/abis/ShihVerse_nft.json'
import Header from '../components/Header';


class Marketplace extends Component {

    async componentDidMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadWeb3() {
        const provider = await detectEthereumProvider();

        // modern browsers

        if (provider) {
            console.log('ethereum wallet is connected')
            window.web3 = new Web3(provider)
        } else {
            console.log('no ethereum wallet connected')
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })

        const networkId = await web3.eth.net.getId()
        const networkData = ShihVerse_nft.networks[networkId]
        if (networkData) {
            const abi = ShihVerse_nft.abi;
            const address = networkData.address;
            const contract = new web3.eth.Contract(abi, address)
            this.setState({ contract })
            console.log(this.state.contract)

            const totalSupply = await contract.methods.totalSupply().call()
            this.setState({ totalSupply })
            // sets up an array to keep track of NFT's
            for (let i = 1; i <= totalSupply; i++) {
                const ShihVerse_nft = await contract.methods.ShihVerse(i - 1).call()
                this.setState({
                    ShihVerse: [...this.state.ShihVerse, ShihVerse_nft]
                })
            }

            console.log(this.state.ShihVerse)

        } else {
            window.alert('Smart contract not deployed')
        }
    }

    //minting function
    mint = (ShihVerse_nft_token) => {
        this.state.contract.methods.mint(ShihVerse_nft_token).send({ from: this.state.account })
            .once('receipt', (receipt) => {
                this.setState({
                    ShihVerse: [...this.state.ShihVerse, ShihVerse_nft]
                })
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            contract: null,
            totalSupply: 0,
            ShihVerse: []
        }
    }
    render() {
        return (
            <div>
                {console.log(this.state.ShihVerse_nft)}
                <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-between h-16 font-poppins">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        Connected Account:
                        <br></br>
                        {this.state.account}
                    </div>
                </nav>
                <div className='container mx-auto'>
                    <div className='row'>
                        <main role='main' className='columns-6 flex-wrap text-center relative flex items-center justify-between h-16 font-poppins mt-10'>
                            <div className='mr-auto ml-auto ' style={{ opacity: '0.8' }}>
                                <h1 className=''>ShihVerse NFT Marketplace</h1>

                                <form onSubmit={(event) => {
                                    event.preventDefault()
                                    const ShihVerse_nft_token = this.ShihVerse_nft_token.value
                                    this.mint(ShihVerse_nft_token)
                                }}>
                                    <div className="flex items-center border-b py-2 mt-10">
                                        <div className=" relative ">
                                            <input ref={(input) => this.ShihVerse_nft_token = input} type="text" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Mint NFT" />
                                        </div>
                                        <br></br>
                                        <div>
                                            {/* <input ref={(input) => this.ShihVerse_nft_token = input} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="MINT" aria-label="Full name" /> */}
                                            <button type="submit" className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 rounded-lg ">
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                    <hr></hr>
                    <div className='text-center mt-24 grid grid-cols-3 gap-4'>
                        {this.state.ShihVerse.map((ShihVerse_nft_token, key) => {
                            return (
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
                                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#f3c06b">
                                            </rect>
                                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#f3c06b">
                                            </rect>
                                        </svg>
                                        <div className="relative pt-10 px-10 flex items-center justify-center">
                                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                            </div>
                                            <picture>
                                                <img className="relative w-40" src={ShihVerse_nft_token} />
                                            </picture>
                                        </div>
                                        <div className="relative text-white px-6 pb-6 mt-6">
                                            <span className="block opacity-75 -mb-1">
                                                SHIHVERSE
                                            </span>
                                            <div className="flex justify-between">
                                                <span className="block font-semibold text-xl">
                                                    {ShihVerse_nft.contractName}
                                                </span>
                                                <span className="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                                    $36.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default Marketplace