import React from 'react';
import './MediaCarousel.css';

// Reusable media carousel: accepts a single slide object or an array of
// { img, video? } slides. Plays the active slide's video only when `isActive`.
function MediaCarousel({ media, isActive, alt = '' }) {
  const slides = Array.isArray(media) ? media : [media];
  const [active, setActive] = React.useState(0);
  const trackRef = React.useRef(null);
  const videoRefs = React.useRef([]);

  React.useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (isActive && i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
        try { v.currentTime = 0; } catch (e) { /* ignore */ }
      }
    });
  }, [isActive, active]);

  const goTo = (i) => {
    const idx = Math.max(0, Math.min(slides.length - 1, i));
    const t = trackRef.current;
    if (t) t.scrollTo({ left: t.clientWidth * idx, behavior: 'smooth' });
    setActive(idx);
  };

  const handleScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i !== active) setActive(i);
  };

  const stop = (fn) => (e) => { e.preventDefault(); e.stopPropagation(); fn(); };

  return (
    <div className="media-carousel">
      <div className="media-carousel__track" ref={trackRef} onScroll={handleScroll}>
        {slides.map((slide, i) => (
          <div className="media-carousel__slide" key={i}>
            {slide.video ? (
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                poster={slide.img}
                src={slide.video}
                muted
                loop
                playsInline
                preload="none"
              />
            ) : (
              <img src={slide.img} alt={alt} />
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="media-carousel__arrow media-carousel__arrow--prev"
            onClick={stop(() => goTo(active - 1))}
            aria-label="Previous"
          >‹</button>
          <button
            type="button"
            className="media-carousel__arrow media-carousel__arrow--next"
            onClick={stop(() => goTo(active + 1))}
            aria-label="Next"
          >›</button>
          <div className="media-carousel__dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`media-carousel__dot${i === active ? ' is-active' : ''}`}
                onClick={stop(() => goTo(i))}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MediaCarousel;
