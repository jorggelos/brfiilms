"use client";

import { useRef, useState } from "react";

export default function CompareSlider({
  before,
  after,
  afterAlt,
  title,
  subtitle,
  label,
  initial = 54,
  frameClass,
}) {
  const box = useRef(null);
  const dragging = useRef(false);
  const [cut, setCut] = useState(initial);

  function move(clientX) {
    const rect = box.current?.getBoundingClientRect();
    if (!rect?.width) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setCut(Math.min(94, Math.max(6, next)));
  }

  return (
    <figure className="ba-card">
      <div
        className={frameClass ? `ba ${frameClass}` : "ba"}
        ref={box}
        style={{ "--cut": `${cut}%` }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          dragging.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          move(event.clientX);
        }}
        onPointerMove={(event) => {
          if (dragging.current) move(event.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        <img className="ba-after" src={after} alt={afterAlt} />
        <img className="ba-before" src={before} alt="" />
        <span className="ba-tag left">Sem película</span>
        <span className="ba-tag right">Com película</span>
        <span className="ba-line" aria-hidden="true" />
        <span className="ba-knob" aria-hidden="true" />
      </div>
      <figcaption>
        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
        <label>
          Arraste para comparar
          <input
            type="range"
            min="6"
            max="94"
            value={Math.round(cut)}
            aria-label={label}
            onChange={(event) => setCut(Number(event.target.value))}
          />
        </label>
      </figcaption>
    </figure>
  );
}
