import Image from "next/image";
import styles from "./page.module.css";
import StarRating from "@/components/StarRating";
import GradientRating from "@/components/GradientRating";
import PieChart from "@/components/PieChart";

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
        <PieChart />
        <PieChart values={[{label:'one',value:50},{label:'two',value:50}]}/>
        <PieChart values={[{label:'one',value:33.33333},{label:'two',value:33.33333},{label:'thr',value:33.33333}]}/>


      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
