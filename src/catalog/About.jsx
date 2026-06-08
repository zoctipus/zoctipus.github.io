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
        I have been an artist for about as long as I have been anything — figure drawing and
        oil painting since primary school, long before I ever wrote a line of code. I was
        never the student the transcripts admired; my record was uneven, and UW was the best
        non-art university that would have me. I arrived as someone the system had already filed
        away as ordinary.
      </p>

      <p>
        But I never put the pencil down. Through my first two years I kept drawing, and
        almost without deciding to, I began smuggling art into the margins of my physics.
      </p>

      <NoteCarousel
        images={[physicsNote1, physicsNote2]}
        caption="Thermodynamics and statistical mechanics, in my own hand — where the equations and the drawings refused to stay apart."
      />

      <p>
        I never planned on AI, reinforcement learning, or simulation. It found me through a
        small thing — a husky learning to wander a virtual UW campus. The first time it moved
        on its own, something clicked. This was art again, in a new form — the same dream I'd
        been chasing since I was a kid, alive in a place I never expected. It hadn't faded. It
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
        <figcaption>Project Go Husky — the moment it clicked.</figcaption>
      </figure>

      <p>
        So I threw myself into a robotics lab at UW, and the road was not kind. I went deep into
        simulation and code — too deep, I was told. The feedback kept coming back the same:
        too much engineer and too little research insight, and somehow out of place — in a
        robotics lab without building robots. <em>"Not PhD-candidate material."</em> For a
        while, I let that decide what I was worth.
      </p>

      <p>
        But this was the art I had chased my entire life — and you do not give up on that. So
        I kept building —
        without an advisor, more or less an independent researcher — writing simulation and
        earning my place beside the PhD students one collaboration at a time.
      </p>

      <blockquote className="about-pullquote">
        It was never about the title. It was always about the art.
      </blockquote>

      <p>
        My stubbornness did not pay the way the system pays. Admissions said no; even a
        returning master's seat said no. For a long time I read that as my failure. I have
        come to read it differently — what the rubric could not see, the work made
        undeniable. The craft I had built in simulation made me the collaborator people came
        looking for — in school and outside of it — and that opened a door no committee had:
        an offer to work on
        <strong> NVIDIA's Isaac Lab</strong>. The collaborations never stopped, and together
        we have made work I am proud of — like
        <a href="https://sgs-rl.github.io/" target="_blank" rel="noopener noreferrer"> SGS </a>
        and
        <a href="https://weirdlabuw.github.io/omnireset/" target="_blank" rel="noopener noreferrer"> OmniReset</a>,
        with more still coming.
      </p>

      <p className="about-closing">
        Through all of it, I never gave an inch on my stubborn dream for art — and I never will.
      </p>

      <p className="about-contact">
        See the <a href="#/projects">work</a>, the <a href="#/art">art</a>, or
        say hi on the <a href="#/contact">contact</a> page.
      </p>
    </div>
  );
}

export default About;
