// Joption 品牌風格（跟官網、教室外框同一套）：每一頁在 Tailwind 後面載入這支，
// 把 Tailwind 的藍紫、天藍、黃橙、灰色換成品牌色。紅、綠留著，因為課程裡代表 Call / Put 和賺賠。
(function () {
  var indigo = { 50: '#eeedfb', 100: '#dedcf7', 200: '#bdb9ef', 300: '#9b96e6', 400: '#6f69d6', 500: '#3a35c4', 600: '#322db0', 700: '#2a2694', 800: '#241f86', 900: '#1b1766', 950: '#110e40' };
  var sky = { 50: '#f0fcfe', 100: '#cff3fb', 200: '#b0ebf8', 300: '#7fd8ee', 400: '#4cc4e3', 500: '#1fa9cf', 600: '#1588ab', 700: '#126c88', 800: '#10566c', 900: '#0d4456', 950: '#082c39' };
  var coin = { 50: '#fff9e6', 100: '#fff1c2', 200: '#ffe58a', 300: '#ffd75a', 400: '#ffc62e', 500: '#f0a30a', 600: '#c98306', 700: '#9c6308', 800: '#7a4d0c', 900: '#5c3a0d', 950: '#3a2407' };
  var ink = { 50: '#fffcf5', 100: '#f6f1e6', 200: '#e7dfd0', 300: '#d4cbb8', 400: '#a49d8f', 500: '#7a7484', 600: '#5c5870', 700: '#403c55', 800: '#2a2640', 900: '#17142b', 950: '#0e0c1c' };
  var cfg = window.tailwind && window.tailwind.config || {};
  cfg.theme = cfg.theme || {};
  cfg.theme.extend = cfg.theme.extend || {};
  cfg.theme.extend.colors = Object.assign({
    blue: indigo, indigo: indigo, violet: indigo, purple: indigo, fuchsia: indigo, pink: indigo,
    sky: sky, cyan: sky, teal: sky,
    yellow: coin, amber: coin, orange: coin,
    gray: ink, slate: ink, zinc: ink, stone: ink, neutral: ink
  }, cfg.theme.extend.colors || {});
  cfg.theme.extend.fontFamily = Object.assign({
    sans: ['"PingFang TC"', '"Microsoft JhengHei"', '"Noto Sans TC"', 'system-ui', 'sans-serif']
  }, cfg.theme.extend.fontFamily || {});
  if (window.tailwind) window.tailwind.config = cfg;
})();
