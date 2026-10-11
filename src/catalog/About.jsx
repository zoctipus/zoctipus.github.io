import React from 'react';
import './About.css';
import goHuskyPoster from '../../public/panel/images/goHusky.png';
import physicsNote1 from '../../public/about/physics_note1.jpg';
import physicsNote2 from '../../public/about/physics_note2.jpg';

const goHuskyVideo = 'https://zoctipus.s3.us-west-004.backblazeb2.com/panel/videos/goHusky.mp4';

function NoteCarousel({ images, caption }) {
  const [active, setActive] = React.useState(0);
  const trackRef = React.useRef(null);

  const handleScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i !== active) setActive(i);
  };

  const goTo = (i) => {
    const t = trackRef.current;
    if (t) t.scrollTo({ left: t.clientWidth * i, behavior: 'smooth' });
    setActive(i);
  };

  return (
    <figure className="about-figure">
      <div className="note-carousel">
        <div className="note-carousel__track" ref={trackRef} onScroll={handleScroll}>
          {images.map((src, i) => (
            <div className="note-carousel__slide" key={i}>
              <img src={src} alt={`Handwritten note ${i + 1}`} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="note-carousel__arrow note-carousel__arrow--prev"
          onClick={() => goTo(Math.max(0, active - 1))}
          aria-label="Previous note"
        >‹</button>
        <button
          type="button"
          className="note-carousel__arrow note-carousel__arrow--next"
          onClick={() => goTo(Math.min(images.length - 1, active + 1))}
          aria-label="Next note"
        >›</button>
        <div className="note-carousel__dots">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`note-carousel__dot${i === active ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Note ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-epigraph">A stubborn dream for art.</p>

      <p>
        I have been an artist for about as long as I have been anything. I have done figure
        drawing and oil painting since primary school, long before I ever wrote a line of code. I was
        never a strong student. My grades were mediocre, and UW was the best non-art school
        that accepted me.
      </p>

      <p>
        But I never put the pencil down. Through my first two years of college I kept drawing, and
        almost without deciding to, I began smuggling art into the margins of my physics.
      </p>

      <NoteCarousel
        images={[physicsNote1, physicsNote2]}
        caption="Thermodynamics and statistical mechanics, in my own hand, where the equations and the drawings refused to stay apart."
      />

      <p>
        I never planned on AI, reinforcement learning, or simulation. It found me through a
        class project. In <a href="https://courses.cs.washington.edu/courses/cse457/" target="_blank" rel="noopener noreferrer">CSE 457</a>, UW's computer graphics course, I took Unity's
        ML-Agents demo <a href="https://unity.com/blog/engine-platform/puppo-the-corgi-cuteness-overload-with-the-unity-ml-agents-toolkit" target="_blank" rel="noopener noreferrer">Puppo, The Corgi</a> and rebuilt it with a UW theme: a husky
        learning to wander a virtual UW campus. The first time it moved on its own, something clicked. This was art again, in a new form. It was the same dream
        I'd been chasing since I was a kid, alive in a place I never expected. It hadn't faded. It
        had just found somewhere new to live.
      </p>

      <figure className="about-figure">
        <video
          src={goHuskyVideo}
          poster={goHuskyPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <figcaption>Project Go Husky: the moment it clicked.</figcaption>
      </figure>

      <p>
        So I threw myself into a robotics lab at UW, and it was harder than I expected. I went deep into
        simulation and code. Too deep, I was told. The feedback kept coming back the same:
        too much engineering and too little research insight, and out of place in a robotics lab
        because I wasn't building robots. In the end, every master's and PhD program I applied
        to rejected me. For a
        while, I let that decide what I was worth.
      </p>

      <p>
        I felt a lot of pressure from my family to take that feedback seriously, to be less
        stubborn and stop doing things my own way. And they had a point. I was not a genius by
        any standard, and there was no real reason to believe my way was better than the
        judgment of people with far more experience. I wavered. Maybe they were right. Maybe
        I should just listen.
      </p>

      <p>
        But this was the art I had chased my entire life. <em>You do not give up on that.</em>
        So I kept going. Without an advisor, I worked more or less as an independent researcher,
        building simulation and working with PhD students on their projects. That work led to
        more collaborations at UW and beyond, and eventually to a job on NVIDIA's Isaac Lab. I
        have been lucky to work with great people along the way.
      </p>

      <blockquote className="about-pullquote">
        It was never about the title. It was always about the art.
      </blockquote>

      <p className="about-closing">
        Through all of it, I never gave an inch on my stubborn dream for art, and I never will.
      </p>

      <p className="about-contact">
        See the <a href="#/projects">work</a>, the <a href="#/art">art</a>, or
        say hi on the <a href="#/contact">contact</a> page.
      </p>
    </div>
  );
}

export default About;
