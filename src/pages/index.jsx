// File: src/pages/index.jsx
import Education from '../components/Education';
import Experience from '../components/Experience';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Athar Akram | xthxr</title>
        <meta name="description" content="Portfolio of Athar Akram (xthxr) - a tech enthusiast born on 17th Oct, 2005 from Kazi Nazrul University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-4 md:px-16">
        <Hero />
<Skills />
<Education />
<Experience />
<Projects />
<Blogs />

      </main>
      <Footer />
    </>
  );
}
