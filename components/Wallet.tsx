import { MetaInjected } from '../components/wallet/connectors'
import { useWeb3React } from "@web3-react/core"

export default function Wallet() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(MetaInjected)
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
            {deactivate ? <button onClick={connect} className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500">Connect Wallet</button>
                : <button onClick={disconnect} className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500">Disconnect Wallet</button>}
            {active ? <span>Connected with <b>{account}</b></span> : "  "}
        </div>
    )
}


