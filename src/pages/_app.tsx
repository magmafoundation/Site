import '../styles/app.scss'
import type {AppProps} from 'next/app'
import {Header} from "../components/Header";
import {Content} from "../components/Content";
import {Footer} from "../components/Footer";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <div id="page" className="site">
            <Header/>
            <Content/>
            <Footer/>
        </div>

    )
}

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default MyApp
