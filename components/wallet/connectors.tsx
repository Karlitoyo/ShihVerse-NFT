// import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector'

// export const injected = new WalletConnectConnector({
//     supportedChainIds: [1, 3, 4, 5, 42],
// })

export const MetaInjected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
})