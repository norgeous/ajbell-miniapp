import styles from './page.module.css';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Fund data={cautiousMockData} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
