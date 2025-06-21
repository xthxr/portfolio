import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Athar Akram | xthxr</title>
        <meta name="description" content="Portfolio of Athar Akram - a tech enthusiast born on 17th Oct, 2005." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-4 md:px-16">
        <Hero />
        <Projects />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

