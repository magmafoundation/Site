import '../styles/app.scss'
import type {AppProps} from 'next/app'
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {About} from "../components/About";
import {Partners} from "../components/Partners";
import {Stats} from "../components/Stats";
import Downloads from "../components/Downloads";
import App from "next/app";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <div id="page" className="site">
            <h1>{pageProps.ver}</h1>
            <Navbar/>
            <div id="content" className="site-content">
                <Header/>
                <Component/>
                <About/>
                <Partners/>
                <Stats/>
                <Downloads/>
            </div>
            <Footer/>
        </div>

    )
}

MyApp.getInitialProps = async (appContext: any) => {
    const appProps = await App.getInitialProps(appContext);
    appProps.pageProps.ver = 1337;
    return {...appProps}
}

export default MyApp
