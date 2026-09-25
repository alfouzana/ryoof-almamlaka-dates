import "./style.css";

const WA = "966505585822";

const products = [
  { name: "سكري مفتل", desc: "حلاوة طبيعية وقوام ذهبي، الأكثر طلباً للضيافة", size: "علبة 1 كجم", price: 55, tag: "الأكثر مبيعاً" },
  { name: "خلاص الأحساء", desc: "طري وغني بالطعم، رفيق القهوة السعودية", size: "علبة 1 كجم", price: 45 },
  { name: "عجوة المدينة", desc: "عجوة فاخرة منتقاة بعناية من مزارع المدينة", size: "علبة 1 كجم", price: 85 },
  { name: "مجدول ملكي", desc: "حبات كبيرة ولحم كثيف، مثالي للهدايا", size: "علبة 1 كجم", price: 95, tag: "فاخر" },
  { name: "صقعي", desc: "طعم متوازن بين الطراوة والقرمشة", size: "علبة 1 كجم", price: 50 },
  { name: "بوكس الهدايا", desc: "تشكيلة من 4 أنواع في علبة فاخرة جاهزة للإهداء", size: "بوكس 1.5 كجم", price: 149, tag: "هدية" },
];

const grid = document.querySelector("[data-products]");
grid.innerHTML = products
  .map((p, i) => {
    const msg = encodeURIComponent(`السلام عليكم، أبغى أطلب: ${p.name} (${p.size})`);
    const dates = [0, 1, 2]
      .map((j) => `<div class="date-art h-20 w-10 rounded-[50%] shadow-md" style="transform: rotate(${(j - 1) * 18 + i * 3}deg)"></div>`)
      .join("");
    return `
  <div class="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand/10 transition hover:-translate-y-1 hover:shadow-lg">
    <div class="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-cream to-[#efe1c6]">
      ${p.tag ? `<span class="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">${p.tag}</span>` : ""}
      <div class="flex gap-2">${dates}</div>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-xl font-bold text-brand-dark">${p.name}</h3>
      <p class="mt-2 flex-1 text-slate-600">${p.desc}</p>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-sm text-slate-500">${p.size}</span>
        <span class="text-2xl font-extrabold text-brand">${p.price} <span class="text-sm font-medium">ر.س</span></span>
      </div>
      <a href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener" class="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand py-3 font-bold text-white hover:bg-brand-dark">اطلب عبر واتساب</a>
    </div>
  </div>`;
  })
  .join("");

const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
