import styles from './app.module.scss';
import Directory from "../directory";
import MainBanner from "../mainBanner";
import ProfessionBanner from "../professionBanner";
import RequestInfoBanner from "../requestInfoBanner";
import Footer from "../footer";

function App() {
    return (
        <section className={styles.main}>
            <Directory/>
            <MainBanner/>
            <ProfessionBanner/>
            <RequestInfoBanner/>
            <Footer/>
        </section>
    );
}

export default App;
