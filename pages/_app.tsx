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
        this.setState({ account: accounts })
        console.log(this.state.account)

        const networkId = await web3.eth.net.getId()
        const networkData = ShihVerse_nft.networks[networkId]
        if (networkData) {
            const abi = ShihVerse_nft.abi;
            const address = networkData.address;
            const contract = new web3.eth.Contract(abi, address)
            this.setState({ contract })
            console.log(this.state.contract)
        } else {
            window.alert('Smart contract not deployed')
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            contract: null
        }
    }

    render() {
        return (
            <div>
                <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-between h-16 font-poppins">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        {this.state.account}
                    </div>
                </nav>
                <Header />
            </div>
        )
    }
}

export default MyApp