"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { WA } from "../lib/site";

const links = [
  ["#inicio", "Início"],
  ["#comparar", "Comparar"],
  ["#servicos", "Serviços"],
  ["#peliculas", "Películas"],
  ["#como-funciona", "Processo"],
  ["#duvidas", "Dúvidas"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className="topbar">
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
      <a className="nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
        Solicitar orçamento
      </a>
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
      {open
        ? createPortal(
            <nav className="nav-panel" aria-label="Menu">
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <a href="#contato" onClick={() => setOpen(false)}>
                Contato
              </a>
              <a className="nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </nav>,
            document.body
          )
        : null}
    </header>
  );
}
