import React, { Component } from 'react';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3'
import ShihVerse_nft from '../src/abis/ShihVerse_nft.json'
import Header from '../components/Header';



class MyApp extends Component {

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
                <Header />
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
                </div>
            </div>
        )
    }
}

export default MyApp