import About from '@/components/About';
import Background from '@/components/Background';
import BackgroundMusic from '@/components/BackgroundMusic';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <BackgroundMusic />
      <Background>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Background>
    </>
  );
}
