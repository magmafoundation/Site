import { About } from '../components/About';
import { Partners } from '../components/Partners';
import { Stats } from '../components/Stats';
import Downloads from '../components/Downloads';
import { Header } from '../components/Header';

export default function Home() {
    return (
       <div>
           <Header />
           <About />
           <Partners />
           <Stats />
           <Downloads />
       </div>
    );
}
