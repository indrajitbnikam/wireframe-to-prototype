import Head from 'next/head';
import Footer from '../components/footer'
import Header from '../components/header'
import FifthSection from '../components/sections/fifth-section';
import FirstSection from '../components/sections/first-section';
import FourthSection from '../components/sections/fourth-section';
import SecondSection from '../components/sections/second-section';
import SeventhSection from '../components/sections/seventh-section';
import SixthSection from '../components/sections/sixth-section';
import ThirdSection from '../components/sections/third-section';

import styles from './home-page.module.scss';

const {
  left_most_bar
} = styles;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/** Represents head tag in normal index.html file */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>


      {/** Application content starts here */}
      <Header />
      <main
        className="flex flex-col items-center flex-1 w-full pb-20"
        style={{
          maxWidth: '1400px'
        }}
      >
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </main>
      <Footer />

      <div className={left_most_bar}></div>
    </div>
  )
}
