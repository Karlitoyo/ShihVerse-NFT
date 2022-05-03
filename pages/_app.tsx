import '../styles/globals.css'
import '../styles/app.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
    return new Web3(provider)
}


function MyApp({ Component, pageProps }) {
    return <>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Header />
            <Component {...pageProps} />
        </Web3ReactProvider>
    </>
}

export default MyApp