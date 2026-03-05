import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";

import discHarrowImg from "@/assets/products/disc-harrow.png";
import rotaryMowerImg from "@/assets/products/rotary-mower.png";
import pneumaticSeederImg from "@/assets/products/pneumatic-seeder.png";
import plowImg from "@/assets/products/plow.png";
import laserLevelerImg from "@/assets/products/laser-leveler.png";
import sprayerImg from "@/assets/products/sprayer.png";
import fertilizerSpreaderImg from "@/assets/products/fertilizer-spreader.png";
import cultivatorImg from "@/assets/products/cultivator.png";
import grainSeederImg from "@/assets/products/grain-seeder.png";
import potatoPlanterImg from "@/assets/products/potato-planter.png";

type ProductSpec = { label: string; value: string };

interface Product {
  id: string;
  name: string;
  nameUz: string;
  category: string;
  image: string;
  specs: ProductSpec[];
  specsUz: ProductSpec[];
}

const products: Product[] = [
  {
    id: "dh34",
    name: "Дисковая борона 34 диском",
    nameUz: "Diskli borona 34 diskli",
    category: "discHarrows",
    image: discHarrowImg,
    specs: [
      { label: "Количество дисков", value: "34" },
      { label: "Расстояние между дисками", value: "250 мм" },
      { label: "Мощность трактора", value: "135–150 л.с." },
      { label: "Вес", value: "4 350 кг" },
    ],
    specsUz: [
      { label: "Disklar soni", value: "34" },
      { label: "Disklar orasidagi masofa", value: "250 mm" },
      { label: "Traktor quvvati", value: "135–150 ot kuchi" },
      { label: "Og'irligi", value: "4 350 kg" },
    ],
  },
  {
    id: "tbg32",
    name: "Т-БГ 32 Дисковая борона складная прицепная",
    nameUz: "T-BG 32 Yig'iladigan tirqama diskli borona",
    category: "discHarrows",
    image: discHarrowImg,
    specs: [
      { label: "Количество дисков", value: "32" },
      { label: "Диаметр диска", value: "610 мм" },
      { label: "Расстояние между дисками", value: "250 мм" },
      { label: "Мощность трактора", value: "135–150 л.с." },
      { label: "Вес", value: "4 350 кг" },
    ],
    specsUz: [
      { label: "Disklar soni", value: "32" },
      { label: "Disk diametri", value: "610 mm" },
      { label: "Disklar orasidagi masofa", value: "250 mm" },
      { label: "Traktor quvvati", value: "135–150 ot kuchi" },
      { label: "Og'irligi", value: "4 350 kg" },
    ],
  },
  {
    id: "tbg40",
    name: "Т-БГ 40 Дисковая борона складная прицепная",
    nameUz: "T-BG 40 Yig'iladigan tirqama diskli borona",
    category: "discHarrows",
    image: discHarrowImg,
    specs: [
      { label: "Количество дисков", value: "40" },
      { label: "Диаметр диска", value: "610 мм" },
      { label: "Расстояние между дисками", value: "250 мм" },
      { label: "Мощность трактора", value: "160–200 л.с." },
      { label: "Вес", value: "5 200 кг" },
    ],
    specsUz: [
      { label: "Disklar soni", value: "40" },
      { label: "Disk diametri", value: "610 mm" },
      { label: "Disklar orasidagi masofa", value: "250 mm" },
      { label: "Traktor quvvati", value: "160–200 ot kuchi" },
      { label: "Og'irligi", value: "5 200 kg" },
    ],
  },
  {
    id: "tby24",
    name: "TBY-24-24 Дисковая борона с катком",
    nameUz: "TBY-24-24 G'altakli diskli borona",
    category: "discHarrows",
    image: discHarrowImg,
    specs: [
      { label: "Количество дисков", value: "24" },
      { label: "Расстояние между дисками", value: "220 мм" },
      { label: "Мощность трактора", value: "140–150 л.с." },
      { label: "Вес", value: "2 500 кг" },
    ],
    specsUz: [
      { label: "Disklar soni", value: "24" },
      { label: "Disklar orasidagi masofa", value: "220 mm" },
      { label: "Traktor quvvati", value: "140–150 ot kuchi" },
      { label: "Og'irligi", value: "2 500 kg" },
    ],
  },
  {
    id: "tby28",
    name: "TBY-28-28 Дисковая борона с катком",
    nameUz: "TBY-28-28 G'altakli diskli borona",
    category: "discHarrows",
    image: discHarrowImg,
    specs: [
      { label: "Количество дисков", value: "28" },
      { label: "Расстояние между дисками", value: "200 мм" },
      { label: "Мощность трактора", value: "130–150 л.с." },
      { label: "Вес", value: "2 100 кг" },
    ],
    specsUz: [
      { label: "Disklar soni", value: "28" },
      { label: "Disklar orasidagi masofa", value: "200 mm" },
      { label: "Traktor quvvati", value: "130–150 ot kuchi" },
      { label: "Og'irligi", value: "2 100 kg" },
    ],
  },
  {
    id: "mower165",
    name: "Косилка роторная 165 мм",
    nameUz: "Rotorli o'roq mashinasi 165 mm",
    category: "mowers",
    image: rotaryMowerImg,
    specs: [
      { label: "Ширина захвата", value: "2,65 м" },
      { label: "Количество ножей", value: "6–8" },
      { label: "Производительность", value: "2 га/ч" },
      { label: "Вес", value: "360 кг" },
    ],
    specsUz: [
      { label: "Ishlov kengligi", value: "2,65 m" },
      { label: "Pichoqlar soni", value: "6–8" },
      { label: "Unumdorlik", value: "2 ga/soat" },
      { label: "Og'irligi", value: "360 kg" },
    ],
  },
  {
    id: "mower195",
    name: "Косилка роторная 195 мм",
    nameUz: "Rotorli o'roq mashinasi 195 mm",
    category: "mowers",
    image: rotaryMowerImg,
    specs: [
      { label: "Ширина захвата", value: "2,65 м" },
      { label: "Количество ножей", value: "6–8" },
      { label: "Производительность", value: "2 га/ч" },
      { label: "Вес", value: "380 кг" },
    ],
    specsUz: [
      { label: "Ishlov kengligi", value: "2,65 m" },
      { label: "Pichoqlar soni", value: "6–8" },
      { label: "Unumdorlik", value: "2 ga/soat" },
      { label: "Og'irligi", value: "380 kg" },
    ],
  },
  {
    id: "seeder76",
    name: "Дисковая пневматическая сеялка 4-рядная 76 мм",
    nameUz: "Diskli pnevmatik ekish mashinasi 4 qatorli 76 mm",
    category: "seeders",
    image: pneumaticSeederImg,
    specs: [
      { label: "Количество секций", value: "4" },
      { label: "Расстояние между рядами", value: "45–50–76 см" },
      { label: "Мин. вес", value: "1 180 кг" },
      { label: "Бункер для удобрений", value: "180/2 л" },
    ],
    specsUz: [
      { label: "Seksiyalar soni", value: "4" },
      { label: "Qatorlar orasidagi masofa", value: "45–50–76 sm" },
      { label: "Min. og'irligi", value: "1 180 kg" },
      { label: "O'g'it bunkeri", value: "180/2 l" },
    ],
  },
  {
    id: "seeder90",
    name: "Дисковая пневматическая сеялка 4-рядная 90 мм",
    nameUz: "Diskli pnevmatik ekish mashinasi 4 qatorli 90 mm",
    category: "seeders",
    image: pneumaticSeederImg,
    specs: [
      { label: "Количество секций", value: "4" },
      { label: "Расстояние между рядами", value: "45–50–76 см" },
      { label: "Мин. вес", value: "1 180 кг" },
      { label: "Бункер для удобрений", value: "180/2 л" },
    ],
    specsUz: [
      { label: "Seksiyalar soni", value: "4" },
      { label: "Qatorlar orasidagi masofa", value: "45–50–76 sm" },
      { label: "Min. og'irligi", value: "1 180 kg" },
      { label: "O'g'it bunkeri", value: "180/2 l" },
    ],
  },
  {
    id: "plow3",
    name: "Плуг оборотный 3+1",
    nameUz: "Aylanma plug 3+1",
    category: "plows",
    image: plowImg,
    specs: [
      { label: "Количество корпусов", value: "3+1" },
      { label: "Размеры шасси", value: "120×100" },
      { label: "Глубина работы", value: "26 см" },
      { label: "Вес", value: "1 115 кг" },
    ],
    specsUz: [
      { label: "Korpuslar soni", value: "3+1" },
      { label: "Shassi o'lchamlari", value: "120×100" },
      { label: "Ish chuqurligi", value: "26 sm" },
      { label: "Og'irligi", value: "1 115 kg" },
    ],
  },
  {
    id: "plow4",
    name: "Плуг оборотный 4+1",
    nameUz: "Aylanma plug 4+1",
    category: "plows",
    image: plowImg,
    specs: [
      { label: "Количество корпусов", value: "4+1" },
      { label: "Ширина захвата корпуса", value: "20–30–35 см" },
      { label: "Глубина работы", value: "30 см" },
      { label: "Вес", value: "1 245 кг" },
    ],
    specsUz: [
      { label: "Korpuslar soni", value: "4+1" },
      { label: "Korpus ishlov kengligi", value: "20–30–35 sm" },
      { label: "Ish chuqurligi", value: "30 sm" },
      { label: "Og'irligi", value: "1 245 kg" },
    ],
  },
  {
    id: "laser25",
    name: "Лазерный планировщик 2,5 м",
    nameUz: "Lazerli tekislagich 2,5 m",
    category: "laserLevelers",
    image: laserLevelerImg,
    specs: [{ label: "Ширина", value: "2,5 м" }, { label: "Тип", value: "С наклонной системой" }],
    specsUz: [{ label: "Kengligi", value: "2,5 m" }, { label: "Turi", value: "Qiya tizimli" }],
  },
  {
    id: "laser30",
    name: "Лазерный планировщик 3,0 м",
    nameUz: "Lazerli tekislagich 3,0 m",
    category: "laserLevelers",
    image: laserLevelerImg,
    specs: [{ label: "Ширина", value: "3,0 м" }, { label: "Тип", value: "С наклонной системой" }],
    specsUz: [{ label: "Kengligi", value: "3,0 m" }, { label: "Turi", value: "Qiya tizimli" }],
  },
  {
    id: "laser35",
    name: "Лазерный планировщик 3,5 м",
    nameUz: "Lazerli tekislagich 3,5 m",
    category: "laserLevelers",
    image: laserLevelerImg,
    specs: [{ label: "Ширина", value: "3,5 м" }, { label: "Тип", value: "С наклонной системой" }],
    specsUz: [{ label: "Kengligi", value: "3,5 m" }, { label: "Turi", value: "Qiya tizimli" }],
  },
  {
    id: "laser40",
    name: "Лазерный планировщик 4,0 м",
    nameUz: "Lazerli tekislagich 4,0 m",
    category: "laserLevelers",
    image: laserLevelerImg,
    specs: [{ label: "Ширина", value: "4,0 м" }, { label: "Тип", value: "С наклонной системой" }],
    specsUz: [{ label: "Kengligi", value: "4,0 m" }, { label: "Turi", value: "Qiya tizimli" }],
  },
  {
    id: "laser45",
    name: "Лазерный планировщик 4,5 м",
    nameUz: "Lazerli tekislagich 4,5 m",
    category: "laserLevelers",
    image: laserLevelerImg,
    specs: [{ label: "Ширина", value: "4,5 м" }, { label: "Тип", value: "С наклонной системой" }],
    specsUz: [{ label: "Kengligi", value: "4,5 m" }, { label: "Turi", value: "Qiya tizimli" }],
  },
  {
    id: "subsoiler",
    name: "Глубокорыхлитель 3-точечный",
    nameUz: "Chuqur yumshatgich 3 nuqtali",
    category: "plows",
    image: plowImg,
    specs: [
      { label: "Тип подвеса", value: "3-точечная" },
      { label: "Длина", value: "180 см" },
      { label: "Рабочая глубина", value: "40–80 см" },
      { label: "Вес", value: "300 кг" },
    ],
    specsUz: [
      { label: "Osma turi", value: "3 nuqtali" },
      { label: "Uzunligi", value: "180 sm" },
      { label: "Ish chuqurligi", value: "40–80 sm" },
      { label: "Og'irligi", value: "300 kg" },
    ],
  },
  {
    id: "sprayer600",
    name: "Опрыскиватель полевой 600 л / 12 м",
    nameUz: "Dala purkagichi 600 l / 12 m",
    category: "sprayers",
    image: sprayerImg,
    specs: [
      { label: "Объём бака", value: "600 л" },
      { label: "Ширина штанги", value: "12 м" },
      { label: "Вес", value: "185 кг" },
    ],
    specsUz: [
      { label: "Bak hajmi", value: "600 l" },
      { label: "Shtanga kengligi", value: "12 m" },
      { label: "Og'irligi", value: "185 kg" },
    ],
  },
  {
    id: "spreader800",
    name: "Разбрасыватель удобрений двухдисковый 800",
    nameUz: "Ikki diskli o'g'it sepgichi 800",
    category: "sprayers",
    image: fertilizerSpreaderImg,
    specs: [
      { label: "Ширина", value: "1 700 мм" },
      { label: "Длина", value: "1 170 мм" },
      { label: "Высота", value: "1 200 мм" },
      { label: "Вес", value: "205 кг" },
    ],
    specsUz: [
      { label: "Kengligi", value: "1 700 mm" },
      { label: "Uzunligi", value: "1 170 mm" },
      { label: "Balandligi", value: "1 200 mm" },
      { label: "Og'irligi", value: "205 kg" },
    ],
  },
  {
    id: "cultivator",
    name: "Мотокультиватор",
    nameUz: "Motokultivator",
    category: "other",
    image: cultivatorImg,
    specs: [
      { label: "Мощность", value: "4–5 кВт (5,5–6,5 л.с.)" },
      { label: "Вес", value: "110–130 кг" },
      { label: "Размеры (Д×Ш×В)", value: "170–180 × 100–110 × 80–100 см" },
    ],
    specsUz: [
      { label: "Quvvati", value: "4–5 kVt (5,5–6,5 ot kuchi)" },
      { label: "Og'irligi", value: "110–130 kg" },
      { label: "O'lchamlari (U×K×B)", value: "170–180 × 100–110 × 80–100 sm" },
    ],
  },
  {
    id: "ovh600",
    name: "Опрыскиватель ОВХ-600",
    nameUz: "Purkagich OVX-600",
    category: "sprayers",
    image: sprayerImg,
    specs: [
      { label: "Объём бака", value: "600 л" },
      { label: "Совместимые тракторы", value: "МТЗ-80х, Т-28х4М, ТТЗ-100 К11, ТТЗ 80.11" },
    ],
    specsUz: [
      { label: "Bak hajmi", value: "600 l" },
      { label: "Mos traktorlar", value: "MTZ-80x, T-28x4M, TTZ-100 K11, TTZ 80.11" },
    ],
  },
  {
    id: "grain24",
    name: "Зерновая сеялка 24-рядная",
    nameUz: "24 qatorli don ekish mashinasi",
    category: "seeders",
    image: grainSeederImg,
    specs: [
      { label: "Ширина захвата", value: "3,5 м" },
      { label: "Междурядье", value: "12,5 см" },
      { label: "Количество рядов", value: "24" },
      { label: "Глубина заделки", value: "30–150 мм" },
      { label: "Скорость", value: "до 12 км/ч" },
      { label: "Бункер зерновой", value: "650 л" },
      { label: "Масса", value: "1 320 кг" },
    ],
    specsUz: [
      { label: "Ishlov kengligi", value: "3,5 m" },
      { label: "Qatorlar oralig'i", value: "12,5 sm" },
      { label: "Qatorlar soni", value: "24" },
      { label: "Ekish chuqurligi", value: "30–150 mm" },
      { label: "Tezligi", value: "12 km/soatgacha" },
      { label: "Don bunkeri", value: "650 l" },
      { label: "Massasi", value: "1 320 kg" },
    ],
  },
  {
    id: "grain28",
    name: "Зерновая сеялка 28-рядная",
    nameUz: "28 qatorli don ekish mashinasi",
    category: "seeders",
    image: grainSeederImg,
    specs: [
      { label: "Ширина захвата", value: "4,0 м" },
      { label: "Междурядье", value: "12,5 см" },
      { label: "Количество рядов", value: "28" },
      { label: "Глубина заделки", value: "30–150 мм" },
      { label: "Скорость", value: "до 12 км/ч" },
      { label: "Масса", value: "1 420 кг" },
    ],
    specsUz: [
      { label: "Ishlov kengligi", value: "4,0 m" },
      { label: "Qatorlar oralig'i", value: "12,5 sm" },
      { label: "Qatorlar soni", value: "28" },
      { label: "Ekish chuqurligi", value: "30–150 mm" },
      { label: "Tezligi", value: "12 km/soatgacha" },
      { label: "Massasi", value: "1 420 kg" },
    ],
  },
  {
    id: "potato",
    name: "Картофелесажалка СКН-300/2",
    nameUz: "Kartoshka ekish mashinasi SKN-300/2",
    category: "other",
    image: potatoPlanterImg,
    specs: [{ label: "Модель", value: "СКН-300/2" }],
    specsUz: [{ label: "Model", value: "SKN-300/2" }],
  },
];

const categories = [
  { key: "all", ru: "Все товары", uz: "Barcha mahsulotlar" },
  { key: "discHarrows", ru: "Дисковые бороны", uz: "Diskli boronalar" },
  { key: "mowers", ru: "Косилки", uz: "O'roq mashinalari" },
  { key: "seeders", ru: "Сеялки", uz: "Ekish mashinalari" },
  { key: "plows", ru: "Плуги и рыхлители", uz: "Pluglar va yumshatgichlar" },
  { key: "laserLevelers", ru: "Лазерные планировщики", uz: "Lazerli tekislagichlar" },
  { key: "sprayers", ru: "Опрыскиватели и разбрасыватели", uz: "Purkagichlar va sepgichlar" },
  { key: "other", ru: "Прочее", uz: "Boshqalar" },
];

const UrunlerPage = () => {
  const { i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const isRu = i18n.language === "ru";

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      {/* Hero header */}
      <section className="bg-section-dark py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">
            {isRu ? "КАТАЛОГ ТЕХНИКИ" : "TEXNIKA KATALOGI"}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-section-dark-foreground/60">
            {isRu
              ? "«Bulung'ur Motors» МЧЖ — техника, ожидаемая к продаже в 2026 году"
              : "«Bulung'ur Motors» MChJ — 2026 yilda sotuvga qo'yilishi kutilayotgan texnikalar"}
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="bg-section-dark border-t border-section-dark-foreground/10 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-none border transition-colors
                  ${activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-section-dark-foreground/70 border-section-dark-foreground/20 hover:border-primary hover:text-primary"
                  }`}
              >
                {isRu ? cat.ru : cat.uz}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-section-dark py-12 md:py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <p className="text-section-dark-foreground/40 text-sm mb-8">
            {isRu ? `Найдено: ${filtered.length}` : `Topildi: ${filtered.length}`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const isOpen = expandedProduct === product.id;
              const specs = isRu ? product.specs : product.specsUz;

              return (
                <div
                  key={product.id}
                  className="group border border-section-dark-foreground/10 bg-section-dark hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-background/5 p-6 flex items-center justify-center h-56">
                    <img
                      src={product.image}
                      alt={isRu ? product.name : product.nameUz}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      {categories.find((c) => c.key === product.category)?.[isRu ? "ru" : "uz"]}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-section-dark-foreground font-bold text-sm md:text-base leading-tight mb-3">
                      {isRu ? product.name : product.nameUz}
                    </h3>

                    {/* Specs preview (first 2) */}
                    <div className="space-y-1.5 mb-3">
                      {specs.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-section-dark-foreground/50">{s.label}</span>
                          <span className="text-section-dark-foreground font-semibold">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    {specs.length > 2 && (
                      <>
                        {isOpen && (
                          <div className="space-y-1.5 mb-3 animate-in fade-in slide-in-from-top-2 duration-200">
                            {specs.slice(2).map((s, i) => (
                              <div key={i} className="flex justify-between text-xs">
                                <span className="text-section-dark-foreground/50">{s.label}</span>
                                <span className="text-section-dark-foreground font-semibold">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() => setExpandedProduct(isOpen ? null : product.id)}
                          className="text-primary text-xs font-semibold hover:underline"
                        >
                          {isOpen
                            ? (isRu ? "Свернуть ▲" : "Yig'ish ▲")
                            : (isRu ? "Все характеристики ▼" : "Barcha xususiyatlar ▼")}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UrunlerPage;
