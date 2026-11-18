(function () {
  var header = document.querySelector(".header");
  var onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  document.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.querySelector(".burger");
  var panel = document.getElementById("menu-mobile");

  function closeMenu() {
    panel.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    panel.hidden = false;
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Fechar menu");
    document.body.classList.add("menu-open");
    var first = panel.querySelector("a");
    if (first) first.focus();
  }

  burger.addEventListener("click", function () {
    if (panel.hidden) openMenu();
    else closeMenu();
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hidden) {
      closeMenu();
      burger.focus();
    }
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  document.querySelectorAll(".ba").forEach(function (ba) {
    var range = ba.parentElement.querySelector(".ba-range");
    var dragging = false;

    function setCut(value) {
      var v = Math.max(6, Math.min(94, Number(value)));
      ba.style.setProperty("--cut", v + "%");
      if (range) {
        range.value = String(Math.round(v));
        range.setAttribute("aria-valuenow", String(Math.round(v)));
      }
    }

    function fromEvent(event) {
      var rect = ba.getBoundingClientRect();
      if (!rect.width) return;
      setCut(((event.clientX - rect.left) / rect.width) * 100);
    }

    ba.addEventListener("pointerdown", function (event) {
      if (event.button !== 0) return;
      dragging = true;
      ba.setPointerCapture(event.pointerId);
      fromEvent(event);
    });
    ba.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      fromEvent(event);
    });
    ba.addEventListener("pointerup", function () { dragging = false; });
    ba.addEventListener("pointercancel", function () { dragging = false; });
    if (range) {
      range.addEventListener("input", function () { setCut(range.value); });
      setCut(range.value);
    }
  });

  var dialog = document.getElementById("lightbox");
  var lightImg = document.getElementById("lightbox-img");
  var lightCap = document.getElementById("lightbox-cap");

  document.querySelectorAll(".shot").forEach(function (button) {
    button.addEventListener("click", function () {
      lightImg.src = button.getAttribute("data-src");
      lightImg.alt = button.getAttribute("data-alt") || "";
      lightCap.textContent = button.getAttribute("data-caption") || "";
      dialog.showModal();
    });
  });

  dialog.querySelector(".lightbox-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    var figure = dialog.querySelector("figure");
    if (!figure.contains(event.target)) dialog.close();
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
