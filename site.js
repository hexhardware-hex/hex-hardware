/* HEX Hardware — 全站共享功能
   header搜索建议 / 询价清单 / 浮动按钮 / 滚动动画 / 数字统计 */
(function(){
  function ready(fn){ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",fn); else setTimeout(fn,0); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }
  function prods(){ return (typeof HEX_PRODUCTS!=="undefined") ? HEX_PRODUCTS : []; }
  function imgUri(p){
    return (typeof HEX_PROD_URI!=="undefined" && HEX_PROD_URI[p.img]) ? HEX_PROD_URI[p.img] : ("assets/products/"+p.img);
  }
  function goCatalogSearch(q){
    if (document.getElementById("prodGrid") && typeof hexCatalogFilter==="function"){
      if (typeof showPage==="function" && document.getElementById("page-catalog")) showPage("catalog");
      hexCatalogFilter("search-"+encodeURIComponent(q));
    } else {
      window.location.href = "catalog.html#search-"+encodeURIComponent(q);
    }
  }

  /* ============ 1. Header 常驻搜索 + 即时建议 ============ */
  function initSearch(){
    var nav = document.querySelector(".site-header .nav");
    if(!nav || nav.querySelector(".nav-search")) return;
    var box = document.createElement("div");
    box.className = "nav-search";
    box.innerHTML =
      '<input type="search" placeholder="Search \u00b7 Cari \u00b7 \u641c\u7d22" autocomplete="off" aria-label="Search products">' +
      '<button type="button" class="ns-btn" aria-label="Search">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg></button>' +
      '<div class="nav-suggest" role="listbox"></div>';
    nav.appendChild(box);
    var input = box.querySelector("input"), panel = box.querySelector(".nav-suggest");

    function match(q){
      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      return prods().filter(function(p){
        var optv = "";
        if (p.options) for (var k in p.options) optv += " " + k + " " + p.options[k].join(" ");
        var hay = ((p.name||"")+" "+(p.brand||"")+" "+(p.desc||"")+" "+(p.series||"")+optv).toLowerCase();
        return terms.some(function(t){ return hay.indexOf(t) >= 0; });
      });
    }
    input.addEventListener("input", function(){
      var q = input.value.trim();
      if(!q){ panel.classList.remove("open"); panel.innerHTML = ""; return; }
      var res = match(q).slice(0, 8);
      var rows = res.map(function(p){
        var th = p.img ? '<img src="'+imgUri(p)+'" alt="" loading="lazy">' : '<span class="ns-noimg"></span>';
        return '<div class="ns-row" data-q="'+esc(p.name)+'" role="option">'+th+
          '<div class="ns-txt"><b>'+esc(p.name)+'</b>'+(p.brand ? '<small>'+esc(p.brand)+'</small>' : '')+'</div></div>';
      }).join("");
      rows += '<div class="ns-all" data-q="'+esc(q)+'">See all results \u2192</div>';
      panel.innerHTML = rows;
      panel.classList.add("open");
    });
    panel.addEventListener("mousedown", function(e){
      var r = e.target.closest("[data-q]"); if(!r) return;
      e.preventDefault();
      input.value = "";
      panel.classList.remove("open");
      goCatalogSearch(r.getAttribute("data-q"));
    });
    box.querySelector(".ns-btn").addEventListener("click", function(){
      if (input.value.trim()){ panel.classList.remove("open"); goCatalogSearch(input.value.trim()); }
      else input.focus();
    });
    input.addEventListener("keydown", function(e){
      if (e.key === "Enter" && input.value.trim()){
        panel.classList.remove("open");
        goCatalogSearch(input.value.trim());
      }
    });
    document.addEventListener("click", function(e){
      if (!box.contains(e.target)) panel.classList.remove("open");
    });
  }

  /* ============ 2. 询价清单 (Enquiry List) ============ */
  var basket = [];
  function basketText(){
    var lines = basket.map(function(it, i){
      return (i+1)+". "+it.name+(it.opts ? " ("+it.opts+")" : "");
    });
    return "Hi HEX Hardware, I would like to enquire about:\n" + lines.join("\n");
  }
  function renderBasket(){
    var count = document.querySelector(".fb-count");
    var items = document.querySelector(".bp-items");
    var send  = document.querySelector(".bp-send");
    if(!count) return;
    count.textContent = basket.length;
    count.style.display = basket.length ? "flex" : "none";
    if (!basket.length){
      items.innerHTML = '<div class="bp-empty">Your enquiry list is empty.<br>Tap \u201C+ List\u201D on any product to add it here.</div>';
      send.style.display = "none";
    } else {
      items.innerHTML = basket.map(function(it, i){
        return '<div class="bp-item"><div><b>'+esc(it.name)+'</b>'+(it.opts ? '<small>'+esc(it.opts)+'</small>' : '')+'</div>'+
          '<button type="button" class="bp-x" data-i="'+i+'" aria-label="Remove">\u2715</button></div>';
      }).join("");
      send.style.display = "";
      send.href = "https://wa.me/60129772129?text=" + encodeURIComponent(basketText());
    }
  }
  window.HEXBasketAdd = function(name, opts){
    basket.push({name:name, opts:opts||""});
    renderBasket();
    var fb = document.querySelector(".float-basket");
    if (fb){ fb.classList.remove("bump"); void fb.offsetWidth; fb.classList.add("bump"); }
  };
  function initFloats(){
    if (document.querySelector(".float-stack")) return;
    var wrap = document.createElement("div");
    wrap.className = "float-stack";
    wrap.innerHTML =
      '<button type="button" class="float-top" aria-label="Back to top">\u2191</button>' +
      '<button type="button" class="float-basket" aria-label="Enquiry list">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>' +
        '<span class="fb-count" style="display:none">0</span></button>' +
      '<div class="float-social">' +
        '<div class="fs-items">' +
          '<a class="fs-item fs-tt" href="https://www.tiktok.com/@hexhardware" target="_blank" rel="noopener" aria-label="TikTok Shop">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.32 7.28a5.34 5.34 0 0 1-3.11-1V15a5.71 5.71 0 1 1-5.71-5.7c.2 0 .4.01.59.03v3.03a2.72 2.72 0 1 0 2.12 2.64V2.5h3a5.32 5.32 0 0 0 3.11 4.28v.5z"/></svg></a>' +
          '<a class="fs-item fs-fb" href="https://www.facebook.com/profile.php?id=61582718126496" target="_blank" rel="noopener" aria-label="Facebook">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z"/></svg></a>' +
          '<a class="fs-item fs-sp" href="https://shopee.com.my/hexhardware" target="_blank" rel="noopener" aria-label="Shopee">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13a1.6 1.6 0 0 1-1.6 1.7H6.6A1.6 1.6 0 0 1 5 20z"/><path d="M9 7a3 3 0 0 1 6 0"/><path d="M10 12.2c.5-.8 3-1 3.4.3.4 1.5-3.6 1.3-3.2 2.9.4 1.4 2.9 1.1 3.4.3"/></svg></a>' +
          '<a class="fs-item fs-wa" href="https://wa.me/60129772129" target="_blank" rel="noopener" aria-label="WhatsApp">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.6.7 1.8.9.3.1.4.2.5.3 0 .2 0 .7-.2 1.2z"/></svg></a>' +
        '</div>' +
        '<button type="button" class="fs-toggle" aria-label="Contact us" aria-expanded="false">' +
          '<svg class="fs-i-chat" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.6 1.4 5 3.6 6.5-.1.9-.5 2.3-1.5 3.5 0 0 2.7-.4 4.7-1.7 1 .3 2.1.4 3.2.4 5.5 0 10-3.8 10-8.7S17.5 3 12 3z"/></svg>' +
          '<svg class="fs-i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="basket-panel">' +
        '<div class="bp-head"><h3>Enquiry List</h3><button type="button" class="bp-close" aria-label="Close">\u2715</button></div>' +
        '<div class="bp-items"></div>' +
        '<a class="btn-wa bp-send" target="_blank" rel="noopener" style="display:none">Send on WhatsApp \u2192</a>' +
      '</div>';
    document.body.appendChild(wrap);
    renderBasket();

    var panel = wrap.querySelector(".basket-panel");
    wrap.querySelector(".float-basket").addEventListener("click", function(){ panel.classList.toggle("open"); });
    wrap.querySelector(".bp-close").addEventListener("click", function(){ panel.classList.remove("open"); });
    wrap.querySelector(".bp-items").addEventListener("click", function(e){
      var x = e.target.closest(".bp-x"); if(!x) return;
      basket.splice(parseInt(x.getAttribute("data-i"), 10), 1);
      renderBasket();
    });
    var social = wrap.querySelector(".float-social");
    var toggle = wrap.querySelector(".fs-toggle");
    toggle.addEventListener("click", function(){
      var open = social.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function(e){
      if (!social.contains(e.target)) social.classList.remove("open");
    });
    var topBtn = wrap.querySelector(".float-top");
    topBtn.addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });
    window.addEventListener("scroll", function(){
      topBtn.classList.toggle("show", window.scrollY > 500);
    }, {passive:true});

    /* "+ List" 按钮全站委托 */
    document.addEventListener("click", function(e){
      var b = e.target.closest(".btn-add"); if(!b) return;
      var card = b.closest(".prod-card"); if(!card) return;
      var name = card.getAttribute("data-name") || (card.querySelector(".prod-name")||{}).textContent || "";
      var sels = card.querySelectorAll("select.prod-opt");
      var parts = [];
      for (var i=0;i<sels.length;i++) parts.push(sels[i].getAttribute("data-label")+": "+sels[i].value);
      window.HEXBasketAdd(name.trim(), parts.join(", "));
      var old = b.textContent;
      b.textContent = "\u2713";
      b.classList.add("added");
      setTimeout(function(){ b.textContent = old; b.classList.remove("added"); }, 1100);
    });
  }

  /* ============ 3. 滚动渐入动画 ============ */
  var revealObserver = null;
  window.hexReveal = function(root){
    var els = (root||document).querySelectorAll(
      ".card, .prod-card, .brand-link, .brand-chip, .cat-block, .info-row, .band, .promo-grid img, .promo-grid a, .stat");
    if (typeof IntersectionObserver === "undefined"){
      for (var i=0;i<els.length;i++) els[i].classList.add("rv","rv-in");
      return;
    }
    if (!revealObserver){
      revealObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if (en.isIntersecting){ en.target.classList.add("rv-in"); revealObserver.unobserve(en.target); }
        });
      }, {rootMargin:"0px 0px -8% 0px", threshold:.06});
    }
    for (var j=0;j<els.length;j++){
      var el = els[j];
      if (el.classList.contains("rv")) continue;
      el.classList.add("rv");
      el.style.transitionDelay = (Math.min(j % 8, 6) * 60) + "ms";
      revealObserver.observe(el);
    }
  };

  /* ============ 4. 数字滚动统计 ============ */
  function initCounters(){
    var nums = document.querySelectorAll(".stat b[data-target]");
    if (!nums.length) return;
    var prodStat = document.querySelector('.stat b[data-target="auto"]');
    if (prodStat) prodStat.setAttribute("data-target", String(prods().length));
    function animate(el){
      var target = parseInt(el.getAttribute("data-target"), 10) || 0;
      var t0 = null, dur = 1400;
      function step(ts){
        if (!t0) t0 = ts;
        var k = Math.min((ts - t0) / dur, 1);
        k = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * k);
        if (k < 1) requestAnimationFrame(step);
      }
      if (typeof requestAnimationFrame === "undefined"){ el.textContent = target; return; }
      requestAnimationFrame(step);
    }
    if (typeof IntersectionObserver === "undefined"){
      nums.forEach ? nums.forEach(function(n){ animate(n); }) : null;
      for (var i=0;i<nums.length;i++) animate(nums[i]);
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ animate(en.target); io.unobserve(en.target); }
      });
    }, {threshold:.4});
    for (var i=0;i<nums.length;i++) io.observe(nums[i]);
  }

  /* ============ 5. 进度条 / header收缩 / hero粒子视差 ============ */
  function initMotion(){
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    var header = document.querySelector(".site-header");
    var hero = document.querySelector(".hero");
    var layer = null;
    if (hero){
      layer = document.createElement("div");
      layer.style.cssText = "position:absolute;inset:0;pointer-events:none;overflow:hidden";
      var conf = [
        [46, "8%",  "18%", "#2E86E8", 7],
        [30, "78%", "12%", "#E8483F", 9],
        [22, "60%", "62%", "#7FB3F2", 6],
        [58, "88%", "58%", "#2E86E8", 11],
        [16, "30%", "70%", "#FFFFFF", 8]
      ];
      for (var i=0;i<conf.length;i++){
        var d = document.createElement("i");
        d.className = "hex-float";
        d.style.cssText = "width:"+conf[i][0]+"px;height:"+(conf[i][0]*1.12)+"px;left:"+conf[i][1]+";top:"+conf[i][2]+
          ";background:"+conf[i][3]+";animation-duration:"+conf[i][4]+"s;animation-delay:-"+(i*1.3)+"s";
        layer.appendChild(d);
      }
      hero.insertBefore(layer, hero.firstChild);
    }
    var ticking = false;
    function onScroll(){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        var y = window.scrollY || 0;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h * 100) : 0) + "%";
        if (header) header.classList.toggle("scrolled", y > 40);
        if (layer && y < 900) layer.style.transform = "translateY(" + (y * 0.22) + "px)";
        ticking = false;
      });
    }
    if (typeof requestAnimationFrame !== "undefined"){
      window.addEventListener("scroll", onScroll, {passive:true});
      onScroll();
    }
  }

  /* ============ 6. 类别/卡片实时计数 ============ */
  function initCounts(){
    var list = prods();
    if (!list.length) return;
    var byCat = {};
    list.forEach(function(p){ byCat[p.category] = (byCat[p.category]||0) + 1; });
    /* 类别卡片(Home供应卡/Categories页)加计数小圆片 */
    var links = document.querySelectorAll('a[href*="#cat-"], a[onclick*="cat-"]');
    for (var i=0;i<links.length;i++){
      var a = links[i];
      var h3 = a.querySelector("h3");
      if (!h3 || a.querySelector(".cat-count-pill")) continue;
      var src = (a.getAttribute("href")||"") + " " + (a.getAttribute("onclick")||"");
      var m = src.match(/cat-(\w+)/);
      if (!m || !byCat[m[1]]) continue;
      var pill = document.createElement("span");
      pill.className = "cat-count-pill";
      pill.textContent = byCat[m[1]];
      h3.appendChild(pill);
    }
  }

  window.hexGoCatalogBrand = function(f){
    if (typeof showPage === "function" && document.getElementById("page-catalog")){
      showPage("catalog");
      if (typeof hexCatalogFilter === "function") hexCatalogFilter("brand-" + encodeURIComponent(f));
      return false;
    }
    return true;
  };
  window.hexGoBrand = function(key){
    if (typeof showPage === "function" && document.getElementById("page-brand")){
      showPage("brand");
      if (typeof hexBrandPage === "function") hexBrandPage(key);
      return false;
    }
    return true; /* 正式网站: 照常跳转 brand.html#key */
  };

  ready(function(){
    initSearch();
    initFloats();
    initCounters();
    initMotion();
    initCounts();
    window.hexReveal();
  });
})();
