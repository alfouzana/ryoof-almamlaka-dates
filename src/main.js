import "./style.css";

const WA = "966505585822";

const products = [
  { name: "سكري مفتل", desc: "حلاوة طبيعية وقوام ذهبي، الأكثر طلباً للضيافة", tag: "الأكثر مبيعاً" },
  { name: "سكري جلكسي", desc: "حبات فاخرة بلون ذهبي لامع وطعم سكري مميز", tag: "فاخر" },
  { name: "عجوة", desc: "عجوة منتقاة بعناية، طرية وغنية بالطعم" },
  { name: "صقعي", desc: "طعم متوازن بين الطراوة والقرمشة" },
  { name: "مجدولة", desc: "حبات كبيرة ولحم كثيف، مثالية للضيافة والهدايا" },
];
const sizes = ["1 كيلو", "2 كيلو", "3 كيلو"];
const ACTIVE = ["bg-brand", "text-white", "border-brand"];

const grid = document.querySelector("[data-products]");
grid.innerHTML = products
  .map((p, i) => {
    const dates = [0, 1, 2]
      .map((j) => `<div class="date-art h-20 w-10 rounded-[50%] shadow-md" style="transform: rotate(${(j - 1) * 18 + i * 3}deg)"></div>`)
      .join("");
    const opts = sizes
      .map((z, k) => `<button type="button" data-size="${z}" class="size-btn flex-1 rounded-full border-2 border-brand/30 py-2 text-sm font-bold ${k === 0 ? ACTIVE.join(" ") : "text-brand"}">${z}</button>`)
      .join("");
    return `
  <div class="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand/10 transition hover:-translate-y-1 hover:shadow-lg" data-card data-name="${p.name}">
    <div class="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-cream to-[#efe1c6]">
      ${p.tag ? `<span class="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">${p.tag}</span>` : ""}
      <div class="flex gap-2">${dates}</div>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-xl font-bold text-brand-dark">${p.name}</h3>
      <p class="mt-2 flex-1 text-slate-600">${p.desc}</p>
      <p class="mt-4 text-sm font-medium text-slate-500">اختر الوزن:</p>
      <div class="mt-2 flex gap-2">${opts}</div>
      <a href="#" target="_blank" rel="noopener" data-order class="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand py-3 font-bold text-white hover:bg-brand-dark">اطلب عبر واتساب</a>
    </div>
  </div>`;
  })
  .join("");

document.querySelectorAll("[data-card]").forEach((card) => {
  let size = sizes[0];
  const link = card.querySelector("[data-order]");
  const buttons = card.querySelectorAll(".size-btn");
  const update = () => {
    const msg = `السلام عليكم، أبغى أطلب: ${card.dataset.name} - ${size}`;
    link.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  };
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      size = b.dataset.size;
      buttons.forEach((x) => {
        x.classList.remove(...ACTIVE);
        x.classList.add("text-brand");
      });
      b.classList.remove("text-brand");
      b.classList.add(...ACTIVE);
      update();
    })
  );
  update();
});

const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
