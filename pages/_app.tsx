import '../styles/globals.css'
import '../styles/app.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import IndexPage from '.'


function MyApp({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
    </>
}

export default MyApp