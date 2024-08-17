import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  <style jsx>
    {
      `
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }`
    }
  </style>

  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <h2>Hunting Coder</h2>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img className={styles.myImg} src="/homeimg.jpg" width={237} height={158} alt="hunting coder" />
        </div>
        <div className={styles.description}>
          <p>A blog for Hunting Coder by a JMT Coder</p>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h2>How to learn JavaScript in 2024</h2>
            <p>JavaScript is a language used to desigb ogic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h2>How to learn JavaScript in 2024</h2>
            <p>JavaScript is a language used to desigb ogic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h2>How to learn JavaScript in 2024</h2>
            <p>JavaScript is a language used to desigb ogic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h2>How to learn JavaScript in 2024</h2>
            <p>JavaScript is a language used to desigb ogic for the web</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h2>How to learn JavaScript in 2024</h2>
            <p>JavaScript is a language used to desigb ogic for the web</p>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
