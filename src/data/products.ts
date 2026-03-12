import discHarrow34 from "@/assets/products/disc-harrow-34.jpg";
import discHarrowTbg32 from "@/assets/products/disc-harrow-tbg32.jpg";
import discHarrowTbg40 from "@/assets/products/disc-harrow-tbg40.jpg";
import discHarrowTby24 from "@/assets/products/disc-harrow-tby24.jpg";
import discHarrowTby28 from "@/assets/products/disc-harrow-tby28.jpg";
import mower165 from "@/assets/products/mower-165.jpg";
import mower195 from "@/assets/products/mower-195.jpg";
import seeder76 from "@/assets/products/seeder-76.jpg";
import seeder90 from "@/assets/products/seeder-90.jpg";
import plow3 from "@/assets/products/plow-3.jpg";
import plow4 from "@/assets/products/plow-4.jpg";
import laser25 from "@/assets/products/laser-25.jpg";
import laser30 from "@/assets/products/laser-30.jpg";
import laser35 from "@/assets/products/laser-35.jpg";
import laser40 from "@/assets/products/laser-40.jpg";
import laser45 from "@/assets/products/laser-45.jpg";
import subsoiler from "@/assets/products/subsoiler.jpg";
import sprayer600 from "@/assets/products/sprayer-600.jpg";
import spreader800 from "@/assets/products/spreader-800.jpg";
import cultivator from "@/assets/products/cultivator.jpg";
import ovh600 from "@/assets/products/ovh-600.jpg";
import grainSeeder24 from "@/assets/products/grain-seeder-24.jpg";
import grainSeeder28 from "@/assets/products/grain-seeder-28.jpg";
import potatoPlanter from "@/assets/products/potato-planter.jpg";

export type ProductSpec = { label: string; value: string };

export interface Product {
  id: string;
  name: string;
  nameUz: string;
  category: string;
  image: string;
  specs: ProductSpec[];
  specsUz: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "dh34",
    name: "Дисковая борона 34 диском",
    nameUz: "Diskli borona 34 diskli",
    category: "discHarrows",
    image: discHarrow34,
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
    image: discHarrowTbg32,
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
    image: discHarrowTbg40,
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
    image: discHarrowTby24,
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
    image: discHarrowTby28,
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
    image: mower165,
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
    image: mower195,
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
    image: seeder76,
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
    image: seeder90,
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
    image: plow3,
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
    image: plow4,
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
    image: laser25,
    specs: [
      { label: "Ширина", value: "2,5 м" },
      { label: "Тип", value: "С наклонной системой" },
    ],
    specsUz: [
      { label: "Kengligi", value: "2,5 m" },
      { label: "Turi", value: "Qiya tizimli" },
    ],
  },
  {
    id: "laser30",
    name: "Лазерный планировщик 3,0 м",
    nameUz: "Lazerli tekislagich 3,0 m",
    category: "laserLevelers",
    image: laser30,
    specs: [
      { label: "Ширина", value: "3,0 м" },
      { label: "Тип", value: "С наклонной системой" },
    ],
    specsUz: [
      { label: "Kengligi", value: "3,0 m" },
      { label: "Turi", value: "Qiya tizimli" },
    ],
  },
  {
    id: "laser35",
    name: "Лазерный планировщик 3,5 м",
    nameUz: "Lazerli tekislagich 3,5 m",
    category: "laserLevelers",
    image: laser35,
    specs: [
      { label: "Ширина", value: "3,5 м" },
      { label: "Тип", value: "С наклонной системой" },
    ],
    specsUz: [
      { label: "Kengligi", value: "3,5 m" },
      { label: "Turi", value: "Qiya tizimli" },
    ],
  },
  {
    id: "laser40",
    name: "Лазерный планировщик 4,0 м",
    nameUz: "Lazerli tekislagich 4,0 m",
    category: "laserLevelers",
    image: laser40,
    specs: [
      { label: "Ширина", value: "4,0 м" },
      { label: "Тип", value: "С наклонной системой" },
    ],
    specsUz: [
      { label: "Kengligi", value: "4,0 m" },
      { label: "Turi", value: "Qiya tizimli" },
    ],
  },
  {
    id: "laser45",
    name: "Лазерный планировщик 4,5 м",
    nameUz: "Lazerli tekislagich 4,5 m",
    category: "laserLevelers",
    image: laser45,
    specs: [
      { label: "Ширина", value: "4,5 м" },
      { label: "Тип", value: "С наклонной системой" },
    ],
    specsUz: [
      { label: "Kengligi", value: "4,5 m" },
      { label: "Turi", value: "Qiya tizimli" },
    ],
  },
  {
    id: "subsoiler",
    name: "Глубокорыхлитель 3-точечный",
    nameUz: "Chuqur yumshatgich 3 nuqtali",
    category: "plows",
    image: subsoiler,
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
    image: sprayer600,
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
    image: spreader800,
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
    image: cultivator,
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
    image: ovh600,
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
    image: grainSeeder24,
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
    image: grainSeeder28,
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
    image: potatoPlanter,
    specs: [{ label: "Модель", value: "СКН-300/2" }],
    specsUz: [{ label: "Model", value: "SKN-300/2" }],
  },
];

export const categories = [
  { key: "all", ru: "Все товары", uz: "Barcha mahsulotlar" },
  { key: "discHarrows", ru: "Дисковые бороны", uz: "Diskli boronalar" },
  { key: "mowers", ru: "Косилки", uz: "O'roq mashinalari" },
  { key: "seeders", ru: "Сеялки", uz: "Ekish mashinalari" },
  { key: "plows", ru: "Плуги и рыхлители", uz: "Pluglar va yumshatgichlar" },
  { key: "laserLevelers", ru: "Лазерные планировщики", uz: "Lazerli tekislagichlar" },
  { key: "sprayers", ru: "Опрыскиватели и разбрасыватели", uz: "Purkagichlar va sepgichlar" },
  { key: "other", ru: "Прочее", uz: "Boshqalar" },
];
