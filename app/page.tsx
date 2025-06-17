import Image from 'next/image';
import styles from './page.module.css';
import StarRating from '@/components/StarRating';
import GradientRating from '@/components/GradientRating';
import PieChart from '@/components/PieChart';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StarRating value={1} />
        <StarRating value={2} />
        <StarRating value={3} />
        <StarRating value={4} />
        <StarRating value={5} />
        <StarRating value={7} max={10} />

        <GradientRating value={3} max={5} />
        <GradientRating value={7} />
        <GradientRating value={17} max={20} />

        <PieChart
          values={[
            { label: 'one', value: 50 },
            { label: 'two', value: 50 },
          ]}
        />
        <PieChart
          values={[
            { label: 'one', value: 33.33333 },
            { label: 'two', value: 33.33333 },
            { label: 'thr', value: 33.33333 },
          ]}
        />
        <PieChart
          values={[
            { label: 'one', value: 25 },
            { label: 'two', value: 25 },
            { label: 'thr', value: 25 },
            { label: 'fou', value: 25 },
          ]}
        />
        <PieChart />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
