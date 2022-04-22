import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const injected = new WalletConnectConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
})