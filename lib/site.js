export const WA =
  "https://wa.me/5531985000242?text=" +
  encodeURIComponent("Olá! Vim pelo site da Brfiilms e gostaria de um orçamento.");

export function wa(extra) {
  return (
    "https://wa.me/5531985000242?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site da Brfiilms e gostaria de um orçamento de película " + extra + "."
    )
  );
}
