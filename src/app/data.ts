import { Category, Product } from './models';

export const categories: Category[] = [
  { id: 1, name: 'Смартфоны' },
  { id: 2, name: 'Ноутбуки' },
  { id: 3, name: 'Наушники' },
  { id: 4, name: 'Аксессуары' }
];

export const products: Product[] = [
  // Категория 1: Смартфоны (Ваши оригинальные данные)
  { id: 1, categoryId: 1, name: 'iPhone 13 128Gb', price: 315000, likes: 0, rating: 4.9, description: 'Apple iPhone 13 128GB Midnight', image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg', link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-102298404/' },
  { id: 2, categoryId: 1, name: 'iPhone 15 128Gb', price: 421000, likes: 0, rating: 4.9, description: 'Apple iPhone 15 128GB Pink', image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg', link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-rozovyi-113137949/' },
  { id: 3, categoryId: 1, name: 'iPhone 16 Pro Max', price: 850000, likes: 0, rating: 4.9, description: 'Apple iPhone 16 Pro Max 256Gb Desert Titanium', image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png', link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-nanosim-esim-zolotistyi-123890547/' },
  { id: 4, categoryId: 1, name: 'Samsung S24', price: 380000, likes: 0, rating: 4.7, description: 'Samsung Galaxy S24 256GB Black', image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h6d/84919113056286.jpg', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-256-gb-chernyi-116244670/' },
  { id: 5, categoryId: 1, name: 'Xiaomi 14', price: 350000, likes: 0, rating: 4.6, description: 'Xiaomi 14 12/512GB Black', image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h11/85375323275294.jpg', link: 'https://kaspi.kz/shop/p/xiaomi-14-12-512-gb-chernyi-117231406/' },

  // Категория 2: Ноутбуки (Ваши данные)
  { id: 6, categoryId: 2, name: 'MacBook Air 13', price: 500000, likes: 0, rating: 4.9, description: 'M2 Chip 8/256GB', image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h31/64400512122910.jpg', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-temno-sinii-105514432/' },
  { id: 7, categoryId: 2, name: 'MacBook Pro 14', price: 950000, likes: 0, rating: 5.0, description: 'M3 Chip 16/512GB', image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/h2a/84381395877918.jpg', link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-16-gb-ssd-512-gb-macos-mtx73-seryi-114828168/' },
  { id: 8, categoryId: 2, name: 'Asus Zenbook', price: 450000, likes: 0, rating: 4.5, description: 'OLED Display Laptop', image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h8e/85055097438238.jpg', link: 'https://kaspi.kz/shop/p/asus-zenbook-14-oled-ux3402va-kp383-90nb10g2-m00pf0-serebristyi-116345448/' },
  { id: 9, categoryId: 2, name: 'HP Victus', price: 380000, likes: 0, rating: 4.4, description: 'Gaming Laptop RTX 4050', image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h30/85324316049438.jpg', link: 'https://kaspi.kz/shop/p/hp-victus-15-fa1008ci-9e3p8ea-serebristyi-117144703/' },
  { id: 10, categoryId: 2, name: 'Lenovo Legion', price: 600000, likes: 0, rating: 4.8, description: 'High Performance Gaming', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h14/85065464152094.jpg', link: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16aph8-82y900fqrk-seryi-116374719/' },

  // Категория 3: Наушники
  { id: 11, categoryId: 3, name: 'AirPods Pro 2', price: 120000, likes: 0, rating: 5.0, description: 'Apple AirPods Pro 2 with USB-C', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg', link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113558963/' },
  { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', price: 180000, likes: 0, rating: 4.9, description: 'Wireless Noise Cancelling Headphones', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h0d/64361517547550.jpg', link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221461/' },
  { id: 13, categoryId: 3, name: 'Marshall Major IV', price: 75000, likes: 0, rating: 4.8, description: 'Classic Bluetooth Headphones', image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048205854.jpg', link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/' },
  { id: 14, categoryId: 3, name: 'AirPods Max', price: 320000, likes: 0, rating: 4.9, description: 'Apple Over-ear Headphones Space Gray', image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h09/63973950095390.jpg', link: 'https://kaspi.kz/shop/p/apple-airpods-max-seryi-100949286/' },
  { id: 15, categoryId: 3, name: 'Galaxy Buds3 Pro', price: 95000, likes: 0, rating: 4.7, description: 'Samsung Wireless Buds', image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h44/86608107929630.jpg', link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121544464/' },

  // Категория 4: Аксессуары
  { id: 16, categoryId: 4, name: 'Apple Watch Series 9', price: 210000, likes: 0, rating: 4.9, description: 'Aluminum Case with Sport Band', image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h07/83874223226910.jpg', link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-chernyi-113398100/' },
  { id: 17, categoryId: 4, name: 'MagSafe Charger', price: 25000, likes: 0, rating: 4.8, description: 'Apple Wireless Charging', image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/h9d/64010022715422.jpg', link: 'https://kaspi.kz/shop/p/apple-magsafe-charger-belyi-100650630/' },
  { id: 18, categoryId: 4, name: 'AirTag (4 Pack)', price: 55000, likes: 0, rating: 5.0, description: 'Bluetooth Item Tracker', image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h69/63979603591198.jpg', link: 'https://kaspi.kz/shop/p/apple-airtag-4-pack-belyi-101569438/' },
  { id: 19, categoryId: 4, name: 'DualSense Controller', price: 38000, likes: 0, rating: 4.9, description: 'PS5 Wireless Controller White', image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h55/64020525285406.jpg', link: 'https://kaspi.kz/shop/p/sony-dualsense-belyi-100922415/' },
  { id: 20, categoryId: 4, name: 'Logitech MX Master 3S', price: 52000, likes: 0, rating: 4.9, description: 'Performance Wireless Mouse', image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h6d/64860769353758.jpg', link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-chernyi-105128038/' }
];
