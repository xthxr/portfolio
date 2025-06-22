// File: src/components/Hero.jsx
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-accent">Hey, I'm Athar Akram</h2>
      <p className="mt-4 text-xl md:text-2xl text-text">
        <TypeAnimation
          sequence={[
            'a tech enthusiast.', 2000,
            'a full-stack developer.', 2000,
            'a SaaS builder.', 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </p>
      <p className="mt-6 max-w-xl text-md text-text">
        A tech enthusiast born on 17th Oct, 2005. I build clean, fast and functional full-stack apps with a love for dark, minimal design.
      </p>
    </section>
  );
}
