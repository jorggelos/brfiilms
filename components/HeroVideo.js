"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [sound, setSound] = useState(false);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !sound;
    video.muted = !next;
    if (next) video.play();
    setSound(next);
  }

  return (
    <div className="stage-frame">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Máquina de corte da Brfiilms em funcionamento"
      >
        <source src="/corte.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className="sound-btn"
        onClick={toggleSound}
        aria-pressed={sound}
      >
        {sound ? "Silenciar" : "Ativar som"}
      </button>
    </div>
  );
}
