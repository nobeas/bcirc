/* ============================================================================
   B-CIRC shared site script. Builds the header, footer, modals and every
   data-driven block from assets/js/content.js.
   You should not need to edit this file to change content.
   A page asks for a block with <div data-render="carbons"></div>.
   ============================================================================ */
(function () {
  var S = window.SITE;
  var here = (location.pathname.split("/").pop() || "index.html");

  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  /* ---------------- header ---------------- */
  function header() {
    var links = S.nav.map(function (n) {
      var on = n.href === here;
      return '<a href="' + n.href + '" class="' + (on ? "text-forest-800 font-semibold" : "text-slate-600") + ' transition hover:text-forest-800">' + esc(n.label) + "</a>";
    }).join("");
    var mlinks = S.nav.map(function (n) {
      return '<a href="' + n.href + '" class="block py-2.5 ' + (n.href === here ? "font-semibold text-forest-800" : "text-slate-700") + '">' + esc(n.label) + "</a>";
    }).join("");

    return '<header id="nav" class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300">' +
      '<div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">' +
        '<a href="index.html" class="flex items-center gap-3">' +
          '<span class="flex h-9 w-1.5 flex-col overflow-hidden rounded-sm"><span class="flex-1 bg-cyan2-400"></span><span class="h-1 bg-white"></span><span class="flex-1 bg-slate-900"></span></span>' +
          '<span class="leading-none"><span class="block font-serif text-2xl font-bold text-forest-800">' + esc(S.brand.name) + '</span>' +
          '<span class="mt-1 block text-[10px] uppercase tracking-[0.2em] text-forest-600">' + esc(S.brand.locus) + "</span></span>" +
        "</a>" +
        '<nav class="hidden items-center gap-7 text-sm lg:flex">' + links + "</nav>" +
        '<div class="hidden items-center gap-2 lg:flex">' +
          '<button data-open="dossier" class="rounded-lg px-3 py-2 text-sm font-medium text-forest-800 transition hover:bg-mint-100">Request the dossier</button>' +
          '<button data-open="booking" class="rounded-lg bg-forest-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700">Book a technical review</button>' +
        "</div>" +
        '<button id="burger" aria-label="Menu" class="rounded-lg p-2 text-forest-800 ring-1 ring-forest-800/15 lg:hidden"><svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      "</div>" +
      '<div id="mobileMenu" class="hidden border-t border-mint-200 bg-white px-5 pb-5 pt-2 lg:hidden">' + mlinks +
        '<button data-open="booking" class="mt-3 w-full rounded-lg bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white">Book a technical review</button></div>' +
      "</header>";
  }

  /* ---------------- footer ---------------- */
  function footer() {
    var inst = S.contact.institution ? esc(S.contact.institution) + "<br>" : "";
    var nav1 = S.nav.slice(0, 3).map(function (n) { return '<li><a href="' + n.href + '" class="text-slate-600 hover:text-forest-800">' + esc(n.label) + "</a></li>"; }).join("");
    return '<footer class="border-t border-mint-200 bg-mint-50 py-14"><div class="mx-auto max-w-7xl px-5 lg:px-8">' +
      '<div class="grid gap-10 md:grid-cols-4"><div class="md:col-span-2">' +
        '<div class="flex items-center gap-3"><span class="flex h-9 w-1.5 flex-col overflow-hidden rounded-sm"><span class="flex-1 bg-cyan2-400"></span><span class="h-1 bg-white"></span><span class="flex-1 bg-slate-900"></span></span>' +
        '<span class="font-serif text-2xl font-bold text-forest-800">' + esc(S.brand.name) + "</span></div>" +
        '<p class="mt-4 max-w-sm text-sm text-slate-600">' + esc(S.brand.strapline) + ". Supercapacitors, a lithium-free Si@Carbon battery, sodium-ion cells and a photoelectrochemical hydrogen cell, from Botswana coal, fly ash silica and Sua Pan sodium.</p>" +
        '<p class="mt-5 font-mono text-xs text-slate-500">' + esc(S.contact.pi) + "<br>" + inst +
        '<a class="underline hover:text-forest-800" href="mailto:' + esc(S.contact.email) + '">' + esc(S.contact.email) + "</a> · " + esc(S.contact.city) + "</p>" +
      "</div>" +
      '<div><p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Platform</p><ul class="mt-4 space-y-2 text-sm">' + nav1 + "</ul></div>" +
      '<div><p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Engage</p><ul class="mt-4 space-y-2 text-sm">' +
        '<li><button data-open="booking" class="text-slate-600 hover:text-forest-800">Book a technical review</button></li>' +
        '<li><button data-open="booking" data-subject="Analysis request" class="text-slate-600 hover:text-forest-800">Submit a sample</button></li>' +
        '<li><button data-open="dossier" class="text-slate-600 hover:text-forest-800">Request the dossier</button></li>' +
        '<li><a href="contact.html" class="text-slate-600 hover:text-forest-800">Contact</a></li></ul></div></div>' +
      '<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-mint-200 pt-6 text-xs text-slate-500 sm:flex-row">' +
        "<p>&copy; " + new Date().getFullYear() + " " + esc(S.brand.name) + ". Submitted to the International Sustainable Chemistry Collaborative Centre.</p>" +
        '<p class="font-mono">' + esc(S.brand.locus) + "</p></div></div></footer>";
  }

  /* ---------------- modals ---------------- */
  function field(id, label, type, ph, req) {
    return '<div><label for="' + id + '" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">' + label + "</label>" +
      '<input id="' + id + '" name="' + id + '" type="' + type + '" ' + (req ? "required" : "") + ' placeholder="' + ph + '" class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20"></div>';
  }

  function modals() {
    return '' +
    '<div id="bookingModal" class="fixed inset-0 z-[60] hidden"><div class="absolute inset-0 bg-forest-900/60 backdrop-blur-sm" data-close="1"></div>' +
      '<div class="relative mx-auto flex min-h-full max-w-5xl items-center p-4"><div class="max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white shadow-2xl"><div class="grid lg:grid-cols-5">' +
        '<div class="bg-forest-800 p-7 text-mint-100 lg:col-span-2">' +
          '<span class="font-serif text-xl font-bold text-white">' + esc(S.brand.name) + "</span>" +
          '<h3 id="bookingTitle" class="mt-6 font-serif text-2xl font-bold text-white">Technical review</h3>' +
          '<ul class="mt-6 space-y-3 text-sm"><li>45 minutes</li><li>Video call, or in person in ' + esc(S.contact.city.split(",")[0]) + "</li><li>With a materials chemist, not a salesperson</li></ul>" +
          '<p class="mt-7 border-t border-white/15 pt-5 text-sm leading-relaxed text-mint-200/80">Bring a feedstock, a spec you need to hit, or a result you cannot explain. We will tell you honestly whether this is something the lab can help with.</p></div>' +
        '<div class="p-7 lg:col-span-3"><div class="flex items-start justify-between"><div><p class="font-semibold text-forest-800">Pick a slot</p><p class="mt-1 text-xs text-slate-500">Times shown in your local timezone</p></div>' +
          '<button data-close="1" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-mint-100"><svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
          '<div id="dateRow" class="mt-5 flex gap-2 overflow-x-auto no-scrollbar pb-1"></div><div id="timeRow" class="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4"></div>' +
          '<form id="bookingForm" class="mt-6 space-y-4 border-t border-mint-200 pt-6">' +
            '<div class="grid gap-4 sm:grid-cols-2">' + field("bk-name","Name","text","Your name",true) + field("bk-org","Organisation","text","Company or institution",true) + "</div>" +
            field("bk-email","Work email","email","you@organisation.org",true) +
            '<div><label for="bk-topic" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Subject</label>' +
            '<select id="bk-topic" name="bk-topic" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20">' +
            ["Materials supply or quote","Analytical services","Instrument training","Process development consult","Device or platform technical review","Funding, licensing or partnership"].map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select></div>" +
            '<div><label for="bk-notes" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">Feedstock or sample detail <span class="font-normal normal-case text-slate-400">(optional)</span></label>' +
            '<textarea id="bk-notes" name="bk-notes" rows="3" placeholder="e.g. Class F fly ash, 40 t/week, interested in the Si@Carbon route" class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20"></textarea></div>' +
            '<button type="submit" class="w-full rounded-lg bg-forest-800 py-3 text-sm font-semibold text-white transition hover:bg-forest-700">Confirm booking</button>' +
            '<p id="bookingMsg" class="hidden rounded-lg bg-mint-100 px-4 py-3 text-sm text-forest-800"></p></form></div></div></div></div></div>' +

    '<div id="dossierModal" class="fixed inset-0 z-[60] hidden"><div class="absolute inset-0 bg-forest-900/60 backdrop-blur-sm" data-close="1"></div>' +
      '<div class="relative mx-auto flex min-h-full max-w-lg items-center p-4"><div class="w-full rounded-2xl bg-white p-8 shadow-2xl">' +
        '<div class="flex items-start justify-between"><div><p class="text-xs font-semibold uppercase tracking-[0.18em] text-ochre-600">Partners and funders</p>' +
        '<h3 class="mt-2 font-serif text-2xl font-bold text-forest-800">Request the dossier</h3></div>' +
        '<button data-close="1" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-mint-100"><svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
        '<p class="mt-3 text-sm text-slate-600">Submission, carbon matrix, device data and budget. Shared under NDA.</p>' +
        '<form id="dossierForm" class="mt-6 space-y-4">' + field("do-name","Name","text","Full name",true) + field("do-org","Organisation","text","Fund, agency, utility or partner",true) + field("do-email","Work email","email","name@organisation.org",true) +
        '<button type="submit" class="w-full rounded-lg bg-forest-800 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700">Request access</button>' +
        '<p id="dossierMsg" class="hidden rounded-lg bg-mint-100 px-4 py-3 text-sm text-forest-800"></p></form></div></div></div>';
  }

  /* ---------------- block renderers ---------------- */
  var R = {};

  R.proof = function () {
    return '<div class="grid gap-px overflow-hidden rounded-2xl border border-mint-200 bg-mint-200 sm:grid-cols-2 lg:grid-cols-4">' +
      S.home.proof.map(function (p) {
        return '<div class="bg-white p-6"><p class="font-serif text-3xl font-bold ' + (p.accent ? "text-ochre-600" : "text-forest-800") + '">' + esc(p.value) + "</p>" +
               '<p class="mt-1.5 text-sm text-slate-600">' + esc(p.note) + "</p></div>";
      }).join("") + "</div>";
  };

  R.problems = function () {
    return '<div class="space-y-4">' + S.problems.map(function (p) {
      return '<div class="reveal rounded-2xl border border-mint-200 bg-mint-50 p-6"><div class="flex items-baseline gap-3">' +
        '<span class="font-mono text-sm text-ochre-600">' + esc(p.n) + "</span>" +
        '<h3 class="font-semibold text-forest-800">' + esc(p.title) + "</h3></div>" +
        '<p class="mt-2.5 text-slate-600">' + esc(p.body) + "</p></div>";
    }).join("") + "</div>";
  };

  R.feedstocks = function () {
    return '<div class="overflow-x-auto no-scrollbar"><table class="w-full min-w-[820px] border-collapse bg-white text-left text-sm shadow-sm ring-1 ring-mint-200">' +
      '<thead><tr class="bg-forest-800 text-white"><th class="px-5 py-3.5 font-medium">Raw material and source</th><th class="px-5 py-3.5 font-medium">Processing route</th><th class="px-5 py-3.5 font-medium">Product and function</th><th class="px-5 py-3.5 font-medium">Devices</th></tr></thead>' +
      '<tbody class="divide-y divide-mint-200">' + S.feedstocks.map(function (f) {
        return '<tr class="transition hover:bg-mint-50"><td class="px-5 py-4"><span class="font-semibold text-forest-800">' + esc(f.material) + '</span><p class="text-slate-500">' + esc(f.source) + "</p></td>" +
          '<td class="px-5 py-4 text-slate-600">' + esc(f.route) + "</td>" +
          '<td class="px-5 py-4 text-slate-600">' + esc(f.product) + "</td>" +
          '<td class="px-5 py-4 font-mono text-xs text-forest-600">' + esc(f.devices) + "</td></tr>";
      }).join("") + "</tbody></table></div>";
  };

  var activeRank = "supply";
  function dots(n) {
    var s = "";
    for (var i = 0; i < 3; i++) s += '<span class="inline-block h-1.5 w-1.5 rounded-full ' + (i < n ? "bg-forest-600" : "bg-mint-200") + '"></span>';
    return '<span class="inline-flex gap-1 align-middle">' + s + "</span>";
  }
  function paintCarbons() {
    var host = document.querySelector('[data-render="carbons"] .carbon-grid');
    if (!host) return;
    var list = S.carbons.slice().sort(function (a, b) { return b[activeRank] - a[activeRank]; });
    host.innerHTML = list.map(function (c, i) {
      var rows = S.carbonProps.map(function (p) {
        var hot = p[0] === activeRank;
        return '<div class="flex items-center justify-between py-1 ' + (hot ? "font-semibold text-forest-800" : "text-slate-500") + '"><span>' + esc(p[1]) + "</span>" + dots(c[p[0]]) + "</div>";
      }).join("");
      var badge = c.published
        ? '<span class="rounded-md bg-ochre-100 px-2 py-0.5 text-[11px] font-semibold text-ochre-700">Data published</span>'
        : '<span class="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">In programme</span>';
      return '<article class="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ' + (i === 0 ? "ring-forest-600" : "ring-mint-200") + '">' +
        '<div class="flex items-start justify-between gap-3"><h3 class="font-semibold leading-snug text-forest-800">' + esc(c.name) + "</h3>" +
        '<span class="shrink-0 rounded-md bg-mint-100 px-2 py-0.5 font-mono text-[11px] text-forest-700">' + esc(c.tag) + "</span></div>" +
        '<div class="mt-2">' + badge + "</div>" +
        '<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">' + esc(c.note) + "</p>" +
        '<div class="mt-4 border-t border-mint-200 pt-3 text-xs">' + rows + "</div></article>";
    }).join("");
    document.querySelectorAll(".rank-btn").forEach(function (b) {
      var on = b.dataset.prop === activeRank;
      b.className = "rank-btn rounded-lg border px-3.5 py-2 text-sm transition " +
        (on ? "border-forest-800 bg-forest-800 text-white" : "border-mint-200 bg-white text-slate-600 hover:border-forest-600");
    });
  }
  R.carbons = function () {
    var btns = S.carbonProps.map(function (p) {
      return '<button class="rank-btn rounded-lg border px-3.5 py-2 text-sm" data-prop="' + p[0] + '">' + esc(p[1]) + "</button>";
    }).join("");
    return '<div class="flex flex-wrap gap-2"><span class="self-center text-sm text-slate-500">Rank by</span>' + btns + "</div>" +
           '<div class="carbon-grid mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"></div>' +
           '<div class="mt-8 rounded-2xl border-l-4 border-ochre-600 bg-ochre-100 p-6"><h3 class="font-semibold text-forest-800">' + esc(S.designRule.title) + "</h3>" +
           '<p class="mt-2 text-slate-700">' + esc(S.designRule.body) + "</p></div>";
  };

  function paintDevice(id) {
    var d = S.devices.filter(function (x) { return x.id === id; })[0];
    var box = document.querySelector('[data-render="devices"] .device-box');
    if (!d || !box) return;
    box.innerHTML = '<div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-6">' +
      '<span class="inline-block rounded-md bg-mint-100 px-2.5 py-1 font-mono text-xs text-forest-700">' + esc(d.tag) + "</span>" +
      '<h3 class="mt-3 font-serif text-2xl font-bold text-forest-800">' + esc(d.title) + "</h3>" +
      '<p class="mt-4 leading-relaxed text-slate-600">' + esc(d.body) + "</p>" +
      '<div class="mt-5 rounded-xl border-l-4 border-forest-600 bg-mint-50 p-4 text-sm text-slate-700">' + esc(d.note) + "</div>" +
      '<button data-open="booking" data-subject="Technical review: ' + esc(d.title) + '" class="mt-6 rounded-lg bg-forest-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700">Discuss this device</button></div>' +
      '<div class="lg:col-span-6"><p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Measured performance</p>' +
      '<table class="mt-3 w-full text-left text-sm"><thead><tr class="border-b border-mint-200 text-xs uppercase tracking-wider text-slate-500">' +
      '<th class="py-2.5 font-medium">Parameter</th><th class="py-2.5 text-right font-medium">Target</th><th class="py-2.5 text-right font-medium">Result</th></tr></thead><tbody class="divide-y divide-mint-100">' +
      d.rows.map(function (r) {
        return '<tr><td class="py-2.5 pr-3 text-slate-600">' + esc(r[0]) + '</td><td class="py-2.5 text-right font-mono text-xs text-slate-500">' + esc(r[1]) +
               '</td><td class="py-2.5 pl-3 text-right font-mono text-xs font-semibold text-forest-800">' + esc(r[2]) + "</td></tr>";
      }).join("") + "</tbody></table></div></div>";
    document.querySelectorAll(".dev-btn").forEach(function (b) {
      var on = b.dataset.dev === id;
      b.className = "dev-btn rounded-xl border px-5 py-2.5 text-sm font-medium transition " +
        (on ? "border-forest-800 bg-forest-800 text-white" : "border-mint-200 bg-white text-slate-600 hover:border-forest-600");
    });
  }
  R.devices = function () {
    return '<div class="flex flex-wrap gap-2" role="tablist">' + S.devices.map(function (d) {
      return '<button class="dev-btn rounded-xl border px-5 py-2.5 text-sm font-medium" data-dev="' + d.id + '" role="tab">' + esc(d.title.split(" ").slice(0, 3).join(" ")) + "</button>";
    }).join("") + "</div>" +
    '<div class="device-box mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-mint-200 lg:p-9"></div>' +
    '<div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6"><h3 class="font-semibold text-forest-800">' + esc(S.honestNote.title) + "</h3>" +
    '<p class="mt-2 text-slate-600">' + esc(S.honestNote.body) + "</p></div>";
  };

  R.materials = function () {
    return '<div class="grid gap-5 md:grid-cols-3">' + S.materials.map(function (m) {
      return '<article class="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mint-200">' +
        '<div class="flex items-start justify-between"><h3 class="font-semibold text-forest-800">' + esc(m.name) + "</h3>" +
        '<span class="rounded-md bg-mint-100 px-2 py-0.5 font-mono text-[11px] text-forest-700">' + esc(m.sku) + "</span></div>" +
        '<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">' + esc(m.body) + "</p>" +
        '<dl class="mt-4 grid grid-cols-2 gap-y-1.5 border-t border-mint-200 pt-3 font-mono text-xs">' +
        m.specs.map(function (s) { return '<dt class="text-slate-500">' + esc(s[0]) + '</dt><dd class="text-right text-slate-700">' + esc(s[1]) + "</dd>"; }).join("") + "</dl>" +
        '<button data-open="booking" data-subject="Material inquiry: ' + esc(m.name) + '" class="mt-4 rounded-lg bg-mint-100 py-2.5 text-sm font-semibold text-forest-800 transition group-hover:bg-forest-800 group-hover:text-white">Request a quote</button></article>';
    }).join("") + "</div>";
  };

  R.analyses = function () {
    return '<div class="overflow-x-auto no-scrollbar"><table class="w-full min-w-[720px] border-collapse bg-white text-left text-sm shadow-sm ring-1 ring-mint-200">' +
      '<thead><tr class="bg-forest-800 text-white"><th class="px-5 py-3.5 font-medium">Technique</th><th class="px-5 py-3.5 font-medium">What it answers</th><th class="px-5 py-3.5"></th></tr></thead>' +
      '<tbody class="divide-y divide-mint-200">' + S.analyses.map(function (a) {
        return '<tr class="hover:bg-mint-50"><td class="px-5 py-4"><span class="font-semibold text-forest-800">' + esc(a.name) + '</span><p class="font-mono text-xs text-slate-500">' + esc(a.sub) + "</p></td>" +
          '<td class="px-5 py-4 text-slate-600">' + esc(a.answers) + "</td>" +
          '<td class="px-5 py-4 text-right"><button data-open="booking" data-subject="Analysis request: ' + esc(a.name) + '" class="font-semibold text-ochre-600 hover:text-ochre-700">Submit sample</button></td></tr>';
      }).join("") + "</tbody></table></div>";
  };

  R.courses = function () {
    return '<div class="space-y-4">' + S.courses.map(function (c) {
      return '<div class="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-mint-200">' +
        '<div><h3 class="font-semibold text-forest-800">' + esc(c.name) + '</h3><p class="mt-1 text-sm text-slate-600">' + esc(c.body) + "</p></div>" +
        '<div class="text-right"><p class="font-mono text-sm text-ochre-600">' + esc(c.days) + "</p>" +
        '<button data-open="booking" data-subject="Course: ' + esc(c.name) + '" class="mt-2 rounded-lg bg-mint-100 px-4 py-2 text-xs font-semibold text-forest-800 transition hover:bg-forest-800 hover:text-white">Reserve a seat</button></div></div>';
    }).join("") + "</div>";
  };

  R.capacity = function () {
    return '<div class="rounded-2xl bg-forest-800 p-7 text-mint-100"><h3 class="font-serif text-xl font-bold text-white">' + esc(S.capacity.title) + "</h3>" +
      S.capacity.paras.map(function (p) { return '<p class="mt-4 leading-relaxed">' + esc(p) + "</p>"; }).join("") +
      '<button data-open="booking" data-subject="Instrument training" class="mt-6 rounded-lg bg-ochre-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ochre-700">Enquire about a course</button></div>';
  };

  R.budget = function () {
    return '<dl class="grid grid-cols-2 gap-4">' + S.partners.budget.map(function (b) {
      return '<div class="rounded-xl border border-white/15 p-5"><dt class="text-xs uppercase tracking-wider text-mint-200/70">' + esc(b.label) + "</dt>" +
             '<dd class="mt-2 font-mono text-xl text-white">' + esc(b.value) + "</dd></div>";
    }).join("") + "</dl>" +
    '<div class="mt-8 space-y-3 text-sm">' + S.partners.milestones.map(function (m) {
      return '<div class="flex gap-4 border-t border-white/10 pt-3"><span class="w-20 shrink-0 font-mono text-ochre-400">' + esc(m.when) + '</span><span class="text-mint-200">' + esc(m.what) + "</span></div>";
    }).join("") + "</div>" +
    '<p class="mt-8 text-sm text-mint-200/70">' + esc(S.partners.commercial) + "</p>";
  };

  R.areas = function () {
    var a = S.areas || { items: [] };
    return '<h2 class="font-serif text-3xl font-bold text-forest-800 sm:text-4xl">' + esc(a.heading) + "</h2>" +
      '<p class="mt-4 max-w-3xl text-lg text-slate-600">' + esc(a.intro) + "</p>" +
      '<div class="mt-10 grid gap-5 sm:grid-cols-2">' + (a.items || []).map(function (it, i) {
        var tags = (it.tags || []).map(function (t) {
          return '<span class="rounded-md bg-mint-100 px-2 py-0.5 text-[11px] font-medium text-forest-700">' + esc(t) + "</span>";
        }).join("");
        return '<article class="reveal flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-mint-200 transition hover:ring-forest-600">' +
          '<span class="font-mono text-xs text-ochre-600">' + ("0" + (i + 1)) + "</span>" +
          '<h3 class="mt-2 font-serif text-xl font-bold text-forest-800">' + esc(it.title) + "</h3>" +
          '<p class="mt-3 flex-1 leading-relaxed text-slate-600">' + esc(it.body) + "</p>" +
          (tags ? '<div class="mt-5 flex flex-wrap gap-2">' + tags + "</div>" : "") + "</article>";
      }).join("") + "</div>";
  };

  R.team = function () {
    var people = (S.team && S.team.people) || [];
    return '<p class="max-w-3xl text-lg leading-relaxed text-slate-600">' + esc(S.team.intro) + "</p>" +
      '<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">' + people.map(function (p) {
        var initials = p.name.split(" ").filter(function (w) { return /^[A-Za-z]/.test(w); })
                        .map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
        var open = /^open position$/i.test(p.name);
        var avatar = p.photo
          ? '<img src="assets/img/' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy" ' +
            'class="h-20 w-20 shrink-0 rounded-xl object-cover ring-1 ring-mint-200" ' +
            'onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-mint-100 font-serif text-xl font-bold text-forest-700\',textContent:\'' + initials + '\'}))">'
          : '<div class="grid h-20 w-20 shrink-0 place-items-center rounded-xl ' +
            (open ? "border border-dashed border-mint-200 text-slate-400" : "bg-mint-100 text-forest-700") +
            ' font-serif text-xl font-bold">' + (open ? "&#43;" : initials) + "</div>";
        var org = p.org ? '<p class="mt-0.5 text-sm text-slate-500">' + esc(p.org) + "</p>" : "";
        var link = p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener" class="mt-3 inline-block text-sm font-semibold text-ochre-600 hover:text-ochre-700">Profile &#8594;</a>' : "";
        return '<article class="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ' + (open ? "ring-mint-200/60" : "ring-mint-200") + '">' +
          '<div class="flex items-start gap-4">' + avatar +
          '<div><h3 class="font-semibold leading-snug ' + (open ? "text-slate-500" : "text-forest-800") + '">' + esc(p.name) + "</h3>" +
          '<p class="mt-0.5 text-sm font-medium text-ochre-600">' + esc(p.role) + "</p>" + org + "</div></div>" +
          '<p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600">' + esc(p.focus) + "</p>" + link + "</article>";
      }).join("") + "</div>";
  };

  R.gallery = function () {
    var g = S.gallery || { photos: [] };
    var photos = g.photos || [];
    if (!photos.length) return "";
    var intro = g.intro ? '<p class="mt-3 max-w-3xl text-lg text-slate-600">' + esc(g.intro) + "</p>" : "";
    return '<h2 class="font-serif text-3xl font-bold text-forest-800 sm:text-4xl">' + esc(g.heading) + "</h2>" + intro +
      '<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">' + photos.map(function (p) {
        return '<figure class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-mint-200">' +
          '<a href="assets/img/' + esc(p.file) + '" target="_blank" rel="noopener">' +
          '<img src="assets/img/' + esc(p.file) + '" alt="' + esc(p.caption || "B-CIRC laboratory") + '" loading="lazy" ' +
          'class="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.03]"></a>' +
          (p.caption ? '<figcaption class="px-5 py-4 text-sm text-slate-600">' + esc(p.caption) + "</figcaption>" : "") +
          "</figure>";
      }).join("") + "</div>";
  };

  R.news = function () {
    return '<div class="space-y-5">' + S.news.map(function (p) {
      var d = new Date(p.date + "T00:00:00");
      var when = isNaN(d) ? p.date : d.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
      return '<article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mint-200"><div class="flex flex-wrap items-center gap-3">' +
        '<span class="rounded-md bg-mint-100 px-2 py-0.5 text-[11px] font-semibold text-forest-700">' + esc(p.tag) + "</span>" +
        '<time class="font-mono text-xs text-slate-500">' + esc(when) + "</time></div>" +
        '<h3 class="mt-3 font-serif text-xl font-bold text-forest-800">' + esc(p.title) + "</h3>" +
        '<p class="mt-2 leading-relaxed text-slate-600">' + esc(p.body) + "</p></article>";
    }).join("") + "</div>";
  };

  R.newsletter = function () {
    return '<h2 class="font-serif text-3xl font-bold text-forest-800 sm:text-4xl">' + esc(S.newsletter.heading) + "</h2>" +
      '<p class="mt-4 text-lg text-slate-600">' + esc(S.newsletter.body) + "</p>" +
      '<form id="newsForm" class="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">' +
      '<label for="nl-email" class="sr-only">Email</label>' +
      '<input id="nl-email" name="email" type="email" required placeholder="you@organisation.org" class="flex-1 rounded-xl border border-slate-300 px-5 py-3.5 text-sm outline-none transition focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20">' +
      '<button type="submit" class="rounded-xl bg-ochre-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ochre-700">Subscribe</button></form>' +
      '<p id="newsMsg" class="mx-auto mt-4 hidden max-w-xl rounded-lg bg-mint-100 px-4 py-3 text-sm text-forest-800"></p>' +
      '<p class="mt-4 text-xs text-slate-500">No sales sequences. Unsubscribe in one click.</p>';
  };

  /* ---------------- booking slots ---------------- */
  var booking = { date: null, time: null };
  function buildSlots() {
    var dateRow = document.getElementById("dateRow"), timeRow = document.getElementById("timeRow");
    if (!dateRow) return;
    dateRow.innerHTML = ""; timeRow.innerHTML = ""; booking.date = null; booking.time = null;
    var days = [], d = new Date();
    while (days.length < 7) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d)); }
    days.forEach(function (day, i) {
      var b = el('<button type="button" class="shrink-0 rounded-xl border border-mint-200 bg-white px-4 py-3 text-center transition hover:border-forest-600">' +
        '<span class="block text-[11px] uppercase tracking-wider text-slate-500">' + day.toLocaleDateString(undefined, { weekday: "short" }) + "</span>" +
        '<span class="mt-0.5 block font-mono text-base text-forest-800">' + day.getDate() + "</span>" +
        '<span class="block text-[11px] text-slate-500">' + day.toLocaleDateString(undefined, { month: "short" }) + "</span></button>");
      b.onclick = function () {
        booking.date = day.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });
        dateRow.querySelectorAll("button").forEach(function (x) { x.classList.remove("border-forest-600", "bg-mint-50", "ring-1", "ring-forest-600"); });
        b.classList.add("border-forest-600", "bg-mint-50", "ring-1", "ring-forest-600");
        buildTimes();
      };
      dateRow.appendChild(b);
      if (i === 0) b.click();
    });
  }
  function buildTimes() {
    var timeRow = document.getElementById("timeRow");
    timeRow.innerHTML = ""; booking.time = null;
    ["09:00","09:45","10:30","11:15","13:00","13:45","14:30","15:15"].forEach(function (t) {
      var b = el('<button type="button" class="rounded-lg border border-mint-200 bg-white py-2.5 font-mono text-sm text-slate-600 transition hover:border-forest-600">' + t + "</button>");
      b.onclick = function () {
        booking.time = t;
        timeRow.querySelectorAll("button").forEach(function (x) { x.classList.remove("border-forest-600", "bg-forest-800", "text-white"); });
        b.classList.add("border-forest-600", "bg-forest-800", "text-white");
      };
      timeRow.appendChild(b);
    });
  }

  /* ---------------- forms ---------------- */
  function wireForm(formId, msgId, endpoint, okText, extra) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById(msgId);
      if (extra && !extra(msg)) return;
      msg.className = "rounded-lg bg-mint-100 px-4 py-3 text-sm text-forest-800 mx-auto max-w-xl mt-4";
      if (!endpoint) {
        msg.textContent = okText + "  (Demo mode: no endpoint set in content.js, nothing was sent.)";
        msg.classList.remove("hidden");
        return;
      }
      var data = new FormData(form);
      if (formId === "bookingForm") { data.append("slot", booking.date + " at " + booking.time); data.append("subject", document.getElementById("bookingTitle").textContent); }
      msg.textContent = "Sending...";
      msg.classList.remove("hidden");
      fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { msg.textContent = r.ok ? okText : "Something went wrong. Please email us instead."; if (r.ok) form.reset(); })
        .catch(function () { msg.textContent = "Network error. Please email us instead."; });
    });
  }

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("site-header"); if (h) h.outerHTML = header();
    var f = document.getElementById("site-footer"); if (f) f.outerHTML = footer();
    document.body.insertAdjacentHTML("beforeend", modals());

    document.querySelectorAll("[data-render]").forEach(function (node) {
      var k = node.dataset.render;
      if (R[k]) node.innerHTML = R[k]();
    });
    paintCarbons();
    if (S.devices.length) paintDevice(S.devices[0].id);

    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open],[data-close],.rank-btn,.dev-btn,#burger");
      if (!t) return;
      if (t.id === "burger") { document.getElementById("mobileMenu").classList.toggle("hidden"); return; }
      if (t.classList.contains("rank-btn")) { activeRank = t.dataset.prop; paintCarbons(); return; }
      if (t.classList.contains("dev-btn")) { paintDevice(t.dataset.dev); return; }
      if (t.dataset.close) { closeAll(); return; }
      var which = t.dataset.open;
      if (which === "booking") {
        var title = t.dataset.subject || "Technical review";
        document.getElementById("bookingTitle").textContent = title;
        var sel = document.getElementById("bk-topic"), notes = document.getElementById("bk-notes");
        if (title.indexOf("Course:") === 0 || title === "Instrument training") sel.selectedIndex = 2;
        else if (title.indexOf("Analysis request") === 0) sel.selectedIndex = 1;
        else if (title.indexOf("Material inquiry") === 0) { sel.selectedIndex = 0; notes.value = title.replace("Material inquiry: ", "Interested in "); }
        else if (title.indexOf("Technical review:") === 0) sel.selectedIndex = 4;
        buildSlots();
        document.getElementById("bookingMsg").classList.add("hidden");
        open_("bookingModal");
      } else if (which === "dossier") {
        document.getElementById("dossierMsg").classList.add("hidden");
        open_("dossierModal");
      }
    });

    function open_(id) { document.getElementById(id).classList.remove("hidden"); document.body.style.overflow = "hidden"; }
    window.closeAll = function () {
      ["bookingModal", "dossierModal"].forEach(function (id) { var m = document.getElementById(id); if (m) m.classList.add("hidden"); });
      document.body.style.overflow = "";
    };
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });

    wireForm("bookingForm", "bookingMsg", S.forms.booking, "Booking request sent. A calendar invite follows by email.", function (msg) {
      if (!booking.date || !booking.time) {
        msg.className = "rounded-lg bg-ochre-100 px-4 py-3 text-sm text-ochre-700";
        msg.textContent = "Choose a date and a time first.";
        msg.classList.remove("hidden");
        return false;
      }
      return true;
    });
    wireForm("dossierForm", "dossierMsg", S.forms.dossier, "Request received. The dossier follows within two working days.");
    wireForm("newsForm", "newsMsg", S.forms.newsletter, "You are on the list.");

    var nav = document.getElementById("nav");
    function onScroll() {
      var on = window.scrollY > 20;
      ["bg-white/90", "backdrop-blur-md", "border-mint-200", "shadow-sm"].forEach(function (c) { nav.classList.toggle(c, on); });
      nav.classList.toggle("border-transparent", !on);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (x) { io.observe(x); });
  });
})();
