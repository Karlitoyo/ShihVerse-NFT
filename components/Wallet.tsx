import { injected } from '../components/wallet/connectors'
import { useWeb3React } from "@web3-react/core"

export default function Wallet() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
        }
        catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            await deactivate()
        }
        catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            {deactivate ? <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-green-500">Connect Wallet</button>
                : <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-green-500">Disconnect Wallet</button>}
            {active ? <span>Connected with <b>{account}</b></span> : <span>Not Connected</span>}
        </div>
    )
}