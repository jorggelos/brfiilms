"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  ["#inicio", "Comparar"],
  ["#servicos", "Serviços"],
  ["#peliculas", "Películas"],
  ["#como-funciona", "Processo"],
  ["#duvidas", "Dúvidas"],
  ["#contato", "Contato"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="bar">
        <a className="brand" href="#inicio" aria-label="Brfiilms, início">
          <img src="/logo-nav.png" alt="" width="480" height="397" />
        </a>
        <nav className="desk-nav" aria-label="Principal">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      {open
        ? createPortal(
            <nav className="nav-panel" aria-label="Menu">
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>,
            document.body
          )
        : null}
    </header>
  );
}
