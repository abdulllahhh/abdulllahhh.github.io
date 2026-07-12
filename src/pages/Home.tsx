import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Training from '../components/sections/Training';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import Awards from '../components/sections/Awards';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={profile.summary} />
        <meta property="og:title" content={`${profile.name} — ${profile.title}`} />
        <meta property="og:description" content={profile.summary} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://abdulllahhh.github.io/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://abdulllahhh.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://abdulllahhh.github.io/og-image.png" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Training />
      <Projects />
      <Timeline />
      <Awards />
      <Education />
      <Contact />
    </>
  );
}
