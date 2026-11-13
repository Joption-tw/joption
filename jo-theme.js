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

// 統一版面：每一頁原本各自設計的底色、卡片框線陰影、大標題卡都換成同一套。
// 選擇器前面加 html body 是為了蓋過頁面自己的 <style> 和 Tailwind，不用一頁一頁改。
(function () {
  var root = document.documentElement;
  // 放在教室外框裡看時，外框已經有 Logo 頂列，頁面自己的 Logo 頁首就收起來
  if (window.self !== window.top) root.classList.add('jo-in-shell');

  var INK = '#17142b';
  var css = [
    // 底色：跟外框一樣的米白紙，淡淡的靛藍小圓點
    'html body{background:#fffcf5 radial-gradient(rgba(58,53,196,.12) 1.5px,transparent 1.6px) 0 0/24px 24px fixed !important;color:' + INK + '}',
    'html body::before{content:none !important}',
    // 卡片：2.5px 墨色框、圓角 18px、5px 硬陰影，不歪斜
    'html body .pop-card,html body .ghibli-card,html body .pop-border{border:2.5px solid ' + INK + ';border-radius:18px;--tw-rotate:0deg}',
    'html body .pop-card,html body .ghibli-card,html body .pop-shadow,html body .shadow-purple,html body .shadow-orange,html body [class*="pop-shadow-"]{box-shadow:5px 5px 0 ' + INK + '}',
    // 各頁自己做的切換鈕（pop-btn、strategy-btn、tab-btn、curve-mode-btn）：同一款，選中是靛藍
    'html body .pop-btn,html body .strategy-btn,html body .tab-btn,html body .curve-mode-btn{border:2.5px solid ' + INK + ' !important;box-shadow:3px 3px 0 ' + INK + ' !important;font-weight:900}',
    'html body .pop-btn.active,html body .strategy-btn.active,html body .tab-btn.active,html body .curve-mode-btn.active{background:#3a35c4 !important;color:#fff !important}',
    'html body .pop-btn:active,html body .strategy-btn:active,html body .tab-btn:active,html body .curve-mode-btn:active{transform:translate(2px,2px) !important;box-shadow:1px 1px 0 ' + INK + ' !important}',
    'html body .pop-card:hover,html body .ghibli-card:hover{transform:none;box-shadow:5px 5px 0 ' + INK + '}',
    'html body .pop-card[onclick]:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 ' + INK + '}',
    'html body .border-4,html body .border-8{border-width:2.5px}',
    // 頁首、頁尾的膠囊
    'html body .capsule-container{border:2.5px solid ' + INK + ';box-shadow:4px 4px 0 ' + INK + ';background:#fff}',
    'html.jo-in-shell body>header:has(.capsule-container),html.jo-in-shell body>nav.sticky{display:none}',
    // 大標題卡：金幣黃貼紙，標題 Lilita One，副標是靛藍膠囊
    'html body .jo-title-card{display:inline-block;max-width:100%;padding:20px 32px;background:#ffc62e !important;border:2.5px solid ' + INK + ' !important;border-radius:20px !important;box-shadow:6px 6px 0 ' + INK + ' !important;transform:none !important}',
    'html body .jo-title-card h1,html body .jo-title-card h2{margin:0;color:' + INK + ' !important;font-family:"Lilita One","Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif !important;font-weight:900;font-size:clamp(28px,4.6vw,48px) !important;line-height:1.25;letter-spacing:.02em;text-shadow:none;filter:none;padding:0}',
    'html body .jo-title-card>div:not(.absolute){margin-top:12px;padding:4px 16px;background:#3a35c4 !important;color:#fff !important;border:2.5px solid ' + INK + ' !important;border-radius:999px !important;box-shadow:3px 3px 0 ' + INK + ' !important;transform:none !important;font-size:clamp(15px,2vw,20px) !important;font-weight:900}',
    // 標題卡角落的裝飾 emoji 統一大小，貼在右上角，不蓋到字
    'html body .jo-title-card{position:relative}',
    'html body .jo-title-card>.absolute{top:-26px !important;right:-22px !important;bottom:auto !important;left:auto !important;font-size:clamp(36px,5vw,54px) !important;line-height:1 !important;opacity:1 !important;--tw-rotate:12deg}',
    // 內容區塊共用元件 ------------------------------------------------------
    // 版面寬度一致
    'html body main{max-width:1040px;margin-left:auto;margin-right:auto}',
    // 段落大標（卡片外面的 h2/h3）：墨色粗體、金幣黃螢光筆底線，原本的膠囊框、底線條、浮水印都拿掉
    'html body .jo-sec-title{display:table;max-width:100%;margin-left:auto !important;margin-right:auto !important;padding:0 .2em;color:' + INK + ' !important;font-size:clamp(24px,3.2vw,34px) !important;font-weight:900 !important;line-height:1.35 !important;letter-spacing:.02em;text-align:center;padding-bottom:16px !important;background:linear-gradient(#ffc62e,#ffc62e) no-repeat center bottom/72px 7px !important}',
    'html body .jo-unbox{border:0 !important;box-shadow:none !important;border-radius:0 !important;padding:0 .2em 16px !important;--tw-rotate:0deg;transform:none !important}',
    'html body .jo-sec-title span.absolute,html body .jo-hide{display:none !important}',
    // 卡片裡的標題：一律粗體
    'html body .jo-card-title{font-weight:900 !important;letter-spacing:.01em}',
    // 卡片裡的小說明框：圓角 12px、2px 墨色框、不要模糊陰影
    'html body [class~="border"][class*="rounded"]:not([class*="border-white"]):not([class*="border-transparent"]):not(input),html body [class~="border-2"][class*="rounded"]:not([class*="border-white"]):not([class*="border-transparent"]):not(input){border-width:2px;border-color:' + INK + '}',
    'html body [class~="border"][class*="rounded-xl"],html body [class~="border-2"][class*="rounded-xl"],html body [class~="border"][class*="rounded-2xl"],html body [class~="border-2"][class*="rounded-2xl"]{border-radius:12px}',
    // 模糊陰影改成品牌的硬陰影或拿掉
    'html body .shadow-sm,html body .shadow,html body .shadow-md,html body .shadow-lg,html body .shadow-xl,html body .shadow-2xl{box-shadow:none}',
    // 只抓 shadow-[…]，不要抓到 drop-shadow-[…]（那是文字陰影）
    'html body [class^="shadow-[6px"],html body [class*=" shadow-[6px"],html body [class^="shadow-[8px"],html body [class*=" shadow-[8px"],html body [class^="shadow-[10px"],html body [class*=" shadow-[10px"],html body [class^="shadow-[12px"],html body [class*=" shadow-[12px"]{box-shadow:5px 5px 0 ' + INK + '}',
    'html body [class^="shadow-[4px"],html body [class*=" shadow-[4px"],html body [class^="shadow-[3px"],html body [class*=" shadow-[3px"],html body [class^="shadow-[2px"],html body [class*=" shadow-[2px"]{box-shadow:3px 3px 0 ' + INK + '}',
    'html body .jo-title-card h1,html body .jo-title-card h2{box-shadow:none !important}',
    // 深色區塊統一用墨色
    'html body .bg-black{background-color:' + INK + '}',
    // 按鈕：2.5px 墨色框、3px 硬陰影，按下去會壓下
    'html body main button[class*="border"],html body main button[class*="rounded"][class*="bg-"]{border:2.5px solid ' + INK + ';box-shadow:3px 3px 0 ' + INK + ';font-weight:900;transition:transform .1s,box-shadow .1s}',
    'html body main button[class*="border"]:active,html body main button[class*="rounded"][class*="bg-"]:active{transform:translate(2px,2px);box-shadow:1px 1px 0 ' + INK + '}',
    // 選中的按鈕原本是墨色底，放在深色區塊會看不見，統一改成靛藍（跟外框側欄選中的章節一樣）
    'html body main button[class*="bg-[var(--c-dark)]"],html body main button[class*="bg-[#17142B]"],html body main button[class*="bg-[#17142b]"],html body main button.bg-black,html body main button[class*="bg-gray-900"],html body main button[class*="bg-slate-900"]{background-color:#3a35c4 !important;color:#fff !important}',
    // 滑桿：天藍軌道、金幣黃圓鈕，全部一樣
    'html body input[type=range]{-webkit-appearance:none !important;appearance:none !important;background:transparent !important;height:30px !important;border:0 !important;box-shadow:none !important;cursor:pointer}',
    'html body input[type=range]::-webkit-slider-runnable-track{height:12px !important;background:#cff3fb !important;border:2px solid ' + INK + ' !important;border-radius:999px !important;box-shadow:none !important}',
    'html body input[type=range]::-webkit-slider-thumb{-webkit-appearance:none !important;width:28px !important;height:28px !important;margin-top:-10px !important;background:#ffc62e !important;border:2.5px solid ' + INK + ' !important;border-radius:50% !important;box-shadow:2px 2px 0 ' + INK + ' !important}',
    'html body input[type=range]::-moz-range-track{height:8px;background:#cff3fb;border:2px solid ' + INK + ';border-radius:999px}',
    'html body input[type=range]::-moz-range-thumb{width:24px;height:24px;background:#ffc62e;border:2.5px solid ' + INK + ';border-radius:50%;box-shadow:2px 2px 0 ' + INK + '}',
    // 損益圖：線不要畫出圖框外（第五章價差、賣方頁原本會穿出卡片）
    'html body svg#chart{overflow:hidden !important}',
    // 6-4 的章節標題牌子、旁邊的星星
    'html body .plate-box{background:none !important;border:0 !important;box-shadow:none !important;transform:none !important;padding:0 !important;min-width:0 !important}',
    'html body .action-star,html body .comic-header-plate::before{display:none !important}',
    'html body .comic-header-plate{display:block !important;margin:2rem auto !important}',
    'html body .jo-sec-title{font-style:normal !important;-webkit-text-stroke:0 !important;text-shadow:none !important}',
    // 測驗頁：有些測驗會換整頁底色，統一用米白紙底
    'html body .min-h-screen[style*="background"]{background:transparent !important}',
    // 測驗選項：同一款白色圓角卡，滑過變天藍；A/B/C/D 是金幣黃圓點
    'html body [class*="btn-option"],html body .btn-pop{border:2.5px solid ' + INK + ' !important;border-radius:14px !important;box-shadow:4px 4px 0 ' + INK + ' !important}',
    'html body [class*="btn-option"]:active,html body .btn-pop:active{transform:translate(2px,2px) !important;box-shadow:1px 1px 0 ' + INK + ' !important}',
    'html body [class*="btn-option"][class*="bg-[var(--pop-btn)]"],html body [class*="btn-option"][class*="bg-[#FFC62E]"]{background-color:#fff !important}',
    'html body [class*="btn-option"]:not(:disabled):hover{background-color:#cff3fb !important}',
    'html body [class*="btn-option"]>span:first-child,html body .btn-pop>span:first-child{border:2.5px solid ' + INK + ' !important;border-radius:50% !important;background:#ffc62e !important;color:' + INK + ' !important;font-style:normal !important}',
    // 頁尾：不要框，置中小字
    'html body>footer{background:transparent !important;border:0 !important;margin-top:56px !important;padding-top:0 !important}',
    'html body>footer .capsule-container{border:0;box-shadow:none;background:transparent;border-radius:0}',
    'html body>footer *{color:#5c5870}',
    'html body .jo-hero{padding-top:40px;padding-bottom:40px}',
    'html body .jo-hero>.absolute{display:none}',
    // 測驗頁的題目標頭
    'html body header.pop-card,html body header:has(>.pop-card){--tw-rotate:0deg;transform:none}',
    'html body header.pop-card,html body header>.pop-card{background:#ffc62e !important}',
    'html body header.pop-card h1,html body header>.pop-card h1{font-style:normal;font-family:"Lilita One","Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;letter-spacing:.02em;filter:none}',
    'html body header>.pop-card .flex>span{--tw-skew-x:0deg;transform:none;background:#3a35c4 !important;color:#fff !important;border:2.5px solid ' + INK + ' !important;border-radius:999px;box-shadow:2px 2px 0 ' + INK + '}',
    '@media (max-width:640px){html body .pop-card,html body .ghibli-card,html body .pop-shadow{box-shadow:4px 4px 0 ' + INK + '}html body .jo-title-card{padding:16px 20px}}'
  ].join('\n');
  var style = document.createElement('style');
  style.id = 'jo-unify';
  style.textContent = css;
  document.head.appendChild(style);

  // 找出每頁的大標題卡加上 jo-title-card；第五章原本是沒有卡片的大字標題，包一張卡片進去
  function tagTitle() {
    var main = document.querySelector('main');
    if (!main) return;
    var first = main.firstElementChild;
    if (!first) return;
    if (first.tagName === 'HEADER') {
      first.classList.add('jo-hero');
      var h1 = first.querySelector('h1');
      if (h1 && !h1.parentNode.classList.contains('jo-title-card')) {
        var card = document.createElement('div');
        card.className = 'jo-title-card';
        h1.parentNode.insertBefore(card, h1);
        card.appendChild(h1);
        h1.querySelectorAll('br').forEach(function (br) { br.remove(); });
      }
    } else if (first.classList.contains('text-center')) {
      var box = first.querySelector(':scope > .inline-block');
      if (box) box.classList.add('jo-title-card');
    }
  }
  // 「框」：卡片、說明框、深色區塊這類有底色或框線的容器
  var BOX = /(^|\s)(pop-card|ghibli-card|pop-border|capsule-container|jo-title-card|bg-white|bg-black|bg-\[[^\]]+\]|bg-(gray|slate|sky|yellow|amber|blue|indigo|purple|red|green|emerald|rose|orange|cyan|teal|violet|pink)-\d+|border(-[248]|-\[\d+px\])?)(\s|$)/;
  function cls(el) { return typeof el.className === 'string' ? el.className : ''; }
  function boxAbove(el, stop) {
    for (var p = el.parentElement; p && p !== stop && p !== document.body; p = p.parentElement) {
      if (BOX.test(cls(p))) return p;
    }
    return null;
  }

  // 每一頁的標題、浮水印分類好，套上共用樣式；React 做的頁面（測驗、模擬器）內容會晚一點出現，所以有變動就再跑一次
  function normalize() {
    tagTitle();
    var main = document.querySelector('main');
    if (!main) return;
    main.querySelectorAll('h2,h3').forEach(function (h) {
      if (h.dataset.jo || h.closest('.jo-title-card')) return;
      h.dataset.jo = '1';
      if (boxAbove(h, main)) { h.classList.add('jo-card-title'); return; }
      h.classList.add('jo-sec-title');
      if (BOX.test(cls(h))) h.classList.add('jo-unbox');
      // 標題下方原本的裝飾短線
      var next = h.nextElementSibling;
      if (next && !next.textContent.trim() && /(^|\s)h-(1|1\.5|2)(\s|$)/.test(cls(next))) next.classList.add('jo-hide');
    });
    // 大字浮水印（PSYCHOLOGY、Γ 這些淡淡的大字）
    document.querySelectorAll('.absolute').forEach(function (el) {
      if (el.closest('.jo-title-card')) return;
      var c = cls(el);
      var big = /(^|\s)(md:|sm:)?text-(\[\d|[5-9]xl)/.test(c);
      var faded = /(^|\s)opacity-(5|10|20|80)(\s|$)/.test(c) || /text-stroke/.test(el.getAttribute('style') || '');
      if (big && faded) el.classList.add('jo-hide');
    });
  }

  var timer = null;
  function start() {
    normalize();
    new MutationObserver(function () {
      clearTimeout(timer);
      timer = setTimeout(normalize, 60);
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
