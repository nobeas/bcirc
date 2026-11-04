/* ============================================================================
   B-CIRC SITE CONTENT  —  THIS IS THE ONLY FILE YOU NORMALLY NEED TO EDIT.
   Every heading, number, device, course and news item on the site comes from
   here. Edit the text between the quote marks, save, commit. The site updates.

   Rules that keep it working:
     - keep the quote marks "like this" around text
     - keep the commas between items
     - if your text contains a double quote, write it as \"
     - to add an item, copy a whole { ... } block and paste it, comma-separated
     - never delete a key name (the part before the colon)
   If the site goes blank after an edit you broke the punctuation. Open the
   browser console (F12) and it will name the line.
   ============================================================================ */

window.SITE = {

  /* ---------- 1. identity and contact ---------- */
  brand: {
    name: "B-CIRC",
    strapline: "Botswana Circular Energy Storage Platform",
    locus: "Botswana · Africa · Global",
    quote: "From Botswana's ground to the world's grid."
  },

  contact: {
    pi: "Dr Isaac N. Beas",
    piNote: "Principal investigator. Published as I. Nongwe.",
    email: "ibeas@bitri.co.bw",
    city: "Gaborone, Botswana",
    institution: ""            // leave "" to hide. The supplied logo had BITRI removed.
  },

  /* ---------- 2. form endpoints ----------
     Empty string = the form shows a success message but sends nothing (demo mode).
     To make them live, create a free form at https://formspree.io and paste the
     endpoint URL, e.g. "https://formspree.io/f/abcdwxyz"                        */
  forms: {
    booking:    "",
    dossier:    "",
    newsletter: ""
  },

  /* ---------- 3. navigation ---------- */
  nav: [
    { label: "Platform", href: "platform.html" },
    { label: "Devices",  href: "devices.html"  },
    { label: "Services", href: "services.html" },
    { label: "Training", href: "training.html" },
    { label: "Team",     href: "team.html"     },
    { label: "Papers",   href: "publications.html" },
    { label: "Partners", href: "partners.html" },
    { label: "News",     href: "news.html"     }
  ],

  /* ---------- 4. home page ---------- */
  home: {
    badge: "ISC3 Innovation Challenge 2026 · Sustainable chemistry",
    h1: "Energy storage built from what a power station throws away",
    zeros: "Zero cobalt · Zero lithium · Zero waste",
    intro: "B-CIRC is a circular energy storage platform sourced entirely inside Botswana. Coal, fly ash silica, Sua Pan evaporites and sorghum straw go in. Six carbon architectures and four working devices come out, including a Si@Carbon battery that stores charge without lithium as the carrier and without a cobalt cathode.",
    proof: [
      { value: "204 F g⁻¹",    note: "Supercapacitor, measured at 0.5 A g⁻¹ against a 180 target", accent: false },
      { value: "740 mAh g⁻¹",  note: "Si@FJH-graphene reversible capacity at 100 cycles",          accent: false },
      { value: ">86%",         note: "Electrode mass recovered at end of life",                    accent: true  },
      { value: "2.4×",         note: "Photocurrent gain on the PEC cell, peer reviewed in 2016",   accent: true  }
    ],
    problemHeading: "Africa supplies the minerals and keeps under 2% of the value",
    problemIntro: "Sub-Saharan Africa holds the coal, the fly ash silica and the sodium evaporites that next-generation storage runs on. Three failures keep that from turning into industry, and no current programme addresses them together."
  },

  problems: [
    { n: "01", title: "End-of-life chemistry nobody has characterised",
      body: "What activated carbons, metal oxides and fluoropolymer binders become once they reach soil and water is largely unknown. The socioenvironmental impact of lithium-ion technology has been called a hugely underresearched area in the field, with freshwater ecotoxicity dominating end-of-life impact in lifecycle assessments of Li-ion packs." },
    { n: "02", title: "The material dilution trap",
      body: "Thinning the active material in a device looks like efficiency, until the quantity left per cell is too small to recover economically and the resource is dissipated for good. Circular strategies could meet 37 to 91% of critical raw material demand by 2050, but only where the design was recoverable from the start." },
    { n: "03", title: "Resource exclusion",
      body: "Africa carries a disproportionate share of the extraction footprint for the energy transition while the IP, the manufacturing and the margin settle elsewhere. Circular economy research on the continent is still described as largely unexplored." }
  ],

  /* ---------- 5. supply chain (platform page) ---------- */
  feedstocks: [
    { material: "Coal", source: "Mmamabula / Morupule",
      route: "Flash Joule heating at ~3,000 K, or gasification to CH₄ / C₂H₂ as CVD precursor",
      product: "Turbostratic graphene, CVD carbon shell, CNTs", devices: "All four" },
    { material: "Coal fly ash SiO₂", source: "Morupule B, ~80,000 t/yr",
      route: "Alkali extraction, then magnesiothermic reduction at 650 °C",
      product: "Porous Si nanoparticles, core of every Si@Carbon architecture", devices: "SGB, SC" },
    { material: "Sua Pan evaporite", source: "3,000 km² soda ash pan",
      route: "Calcination, then solid-state and wet chemistry",
      product: "NaMnO₂ and NaFePO₄ cathode, NaClO₄ electrolyte salt", devices: "NIB" },
    { material: "Biomass", source: "Sorghum straw, mopane wood",
      route: "Slow pyrolysis at 1,200 °C under N₂",
      product: "Hard carbon anode and carbon coating precursor", devices: "NIB" }
  ],

  /* ---------- 6. carbon architectures ----------
     Ratings are 0 to 3 and render as dots. 3 = excellent, 0 = limited.       */
  carbonProps: [
    ["conductivity","Electrical conductivity"], ["buffering","Si expansion buffering"],
    ["ions","Ion transport kinetics"], ["conformality","Shell conformality"],
    ["scalability","Synthesis scalability"], ["supply","Botswana supply chain"],
    ["biodeg","Biodegradation profile"], ["recovery","Material recoverability"],
    ["rate","Rate capability"]
  ],
  carbons: [
    { name: "FJH turbostratic graphene", tag: "Si@FJH-G",
      note: "Flash Joule heating of Botswana coal at ~3,000 K. No solvents, acids or oxidants. Lead architecture, with proof-of-concept data behind it.",
      conductivity:3, buffering:2, ions:2, conformality:2, scalability:3, supply:3, biodeg:3, recovery:2, rate:2, published:true },
    { name: "CVD amorphous carbon shell", tag: "Si@CVD-aC",
      note: "CVD at 600 to 800 °C on coal-derived acetylene or methane in a fluidised bed. Every particle gets the same shell regardless of shape.",
      conductivity:1, buffering:3, ions:1, conformality:3, scalability:2, supply:3, biodeg:2, recovery:2, rate:1, published:false },
    { name: "CVD carbon nanotubes", tag: "Si@CNT",
      note: "Catalytic CVD at 700 to 900 °C, tubes grown straight off the silicon surface. Best conductor of the six and deliberately not the primary route, because the network cannot be recovered.",
      conductivity:3, buffering:2, ions:3, conformality:1, scalability:2, supply:2, biodeg:1, recovery:1, rate:3, published:false },
    { name: "Electrospun carbon nanofibres", tag: "Si@CNF",
      note: "PAN or Botswana coal tar pitch electrospun with Si, stabilised then carbonised. Self-standing electrodes, so binder and current collector can be dropped.",
      conductivity:2, buffering:2, ions:1, conformality:2, scalability:2, supply:3, biodeg:2, recovery:2, rate:1, published:false },
    { name: "Biomass hard carbon coating", tag: "Si@HC",
      note: "Sorghum straw hard carbon ball milled with Si and annealed. Simplest route, most benign end of life, and both phases store charge. Interlayer spacing suits Na⁺.",
      conductivity:1, buffering:1, ions:2, conformality:1, scalability:3, supply:3, biodeg:3, recovery:2, rate:1, published:false },
    { name: "Hollow carbon spheres on fly ash silica", tag: "Si@HCS",
      note: "Carbon deposited on fly ash silica spheres, then the template reduced in place to porous Si inside the shell. Novel route, no prior art found, provisional patent at month 6. Builds on the PI's published hollow sphere method.",
      conductivity:2, buffering:3, ions:3, conformality:3, scalability:2, supply:3, biodeg:3, recovery:2, rate:2, published:true }
  ],
  designRule: {
    title: "The design rule that decides between them",
    body: "Where cutting material further would push the active mass below the threshold for economic recovery, we stop cutting. Carbon nanotubes conduct best of the six and are still not the primary architecture, because an entangled CNT network is effectively unrecoverable. FJH graphene and CVD amorphous carbon win on the metric that matters over a device lifetime."
  },

  /* ---------- 7. devices ---------- */
  devices: [
    { id:"sgb", tag:"B-CIRC SGB", title:"Si@Carbon battery",
      body:"Not a lithium-ion cell with a better anode. The Si@Carbon composite is itself the storage medium, working through capacitive storage at the carbon surface together with reversible alloying in the silicon core. No lithium as the carrier, no cobalt cathode, no LiPF₆, no fluoropolymer binder, and nothing in the active path that was not dug up in Botswana.",
      note:"Silicon's theoretical capacity is 3,579 mAh g⁻¹ against graphite's 372. The carbon shell is what makes a usable fraction of that survive cycling, which is why six shells are being compared rather than one.",
      rows:[["Initial discharge capacity","≥1,200 mAh g⁻¹","~1,410 mAh g⁻¹ at 0.1C"],["Reversible at 100 cycles","≥700 mAh g⁻¹","~740 mAh g⁻¹"],["Coulombic efficiency","≥98%","~98.4%"],["Rate capability at 2C","≥400 mAh g⁻¹","~430 mAh g⁻¹"],["Si expansion","<30% vol. change","~22%, in-situ XRD"]] },
    { id:"sc", tag:"B-CIRC SC", title:"Graphene and silica supercapacitor",
      body:"FJH graphene carries the double layer, with 15 to 25 wt% mesoporous SiO₂ from coal fly ash dispersed through the matrix as a functional additive, bound with water-soluble CMC. The silica opens extra mesoporous ion channels and adds pseudocapacitance at the graphene interface through surface hydroxyls.",
      note:"This electrode is a composite mixture, not a core-shell structure. Encapsulation belongs to the Si@Carbon battery, and conflating the two is the most common misreading of the platform.",
      rows:[["Specific capacitance","≥180 F g⁻¹","204 F g⁻¹ at 0.5 A g⁻¹"],["Energy density","≥28 Wh kg⁻¹","31.2 Wh kg⁻¹"],["Cycle stability","≥90% at 10,000 cyc","92.8% retention"],["BET surface area","≥1,200 m² g⁻¹","~1,380 m² g⁻¹"],["Electrode recovery","≥80%",">86%"],["Biodegradation","Non-toxic metabolites","Confirmed, OECD 301B"]] },
    { id:"nib", tag:"B-CIRC NIB", title:"Sodium-ion battery from Sua Pan",
      body:"Sua Pan is a 3,000 km² endorheic pan holding one of the world's largest natural Na₂CO₃ deposits. It becomes the NaMnO₂ cathode by solid-state synthesis at 700 °C, and the NaClO₄ electrolyte salt by electrochemical oxidation of Sua Pan NaCl. The anode is hard carbon from sorghum straw and mopane wood pyrolysed at 1,200 °C.",
      note:"This is the first device in the platform where the charge carrier itself is domestic. The Si@HC architecture also drops into this anode, adding Na–Si alloying capacity on top of hard carbon intercalation.",
      rows:[["Hard carbon anode capacity","≥280 mAh g⁻¹","In programme"],["Interlayer spacing","0.37–0.40 nm","Target for Na⁺"],["Cathode","NaMnO₂ layered oxide","NaFePO₄ alternative"],["Electrolyte","1 M NaClO₄ or aqueous Na₂SO₄","Sua Pan sourced"],["Electrode recovery","≥75%","Target"]] },
    { id:"pec", tag:"B-CIRC PEC", title:"TiO₂ and NHCS water splitting cell",
      body:"The one device with a complete peer-reviewed proof of concept, co-authored by the PI in 2016. Nitrogen-doped hollow carbon spheres on a TiO₂ photoanode raise anodic photocurrent 2.4 times over pristine TiO₂ under AM 1.5G, through donor levels near the conduction band and faster electron transport that cuts recombination. B-CIRC rebuilds it with fly ash silica as the sphere template.",
      note:"Paired with the Si@Carbon battery this becomes a day and night system: hydrogen generated in sunlight, electricity stored for the evening, both out of one fly ash feedstream.",
      rows:[["Photocurrent at 1.23 V_RHE","0.06 mA cm⁻² pristine","0.15 mA cm⁻² with NHCS"],["Solar to hydrogen","0.06%","0.15%"],["IPCE at 300 nm","14%","19%"],["Photocurrent decay, 1 h","−16%","−7%"],["Scale-up target","not applicable","10 cm² FTO, doctor bladed"]] }
  ],
  honestNote: {
    title: "What is not Botswana-sourced yet",
    body: "TiO₂ makes up 99.5 wt% of the photoanode paste and is bought commercially for Year 1. The nitrogen-doped hollow carbon spheres, which are the actual innovation in that device, are entirely fly ash derived. Year 2 investigates titanium precursors from Selibe-Phikwe nickel and copper tailings. We would rather say this on the website than have a technical reviewer find it."
  },

  /* ---------- 8. services page ----------
     image: a picture of the material, uploaded to assets/img/.
            Leave "" and that product is left out of the home page carousel.
            Works with .jpg .png .webp, with animated .gif and animated .webp,
            and with silent .mp4 or .webm clips, which autoplay on a loop.    */
  materials: [
    { name:"FJH turbostratic graphene", sku:"FJH-G",
      image: "Fly graphene.jpeg",
      body:"Flash Joule heated from Botswana coal in a millisecond discharge. No solvents, no acids, no oxidants anywhere in the route.",
      specs:[["BET","~1,380 m² g⁻¹"],["I_D/I_G","0.15–0.45"]] },
    { name:"Fly ash silica and porous Si", sku:"SI-FA",
      image: "silica.jpeg",
      body:"Mesoporous SiO₂ by alkali extraction from Morupule B ash, and porous silicon nanoparticles by magnesiothermic reduction at 650 °C.",
      specs:[["Forms","SiO₂, Si, Si@C"],["Feed","~80,000 t/yr"]] },
    { name:"Hard carbon and hollow spheres", sku:"HC / HCS",
      image: "Carbon sphere.jpeg",
      body:"Sorghum straw hard carbon for sodium-ion anodes, and CVD hollow carbon spheres templated on fly ash silica, including N and B doped grades.",
      specs:[["Interlayer","0.38–0.40 nm"],["Doping","N, B available"]] }
  ],
  analyses: [
    { name:"BET and BJH", sub:"N₂ physisorption", answers:"Surface area, pore volume and pore size distribution" },
    { name:"GC-MS", sub:"Volatile speciation", answers:"Pyrolysis oil and tar composition, degradation products, solvent residues" },
    { name:"ICP-MS", sub:"Trace elemental", answers:"Composition to ppb, including the contaminants that poison a catalyst" },
    { name:"Online gas MS", sub:"Continuous", answers:"Live syngas composition through a gasification or pyrolysis run" },
    { name:"TPD", sub:"NH₃ and CO₂", answers:"Acid and base site density and strength distribution" },
    { name:"TPR, TPO and TPx", sub:"Temperature programmed", answers:"Reducibility, oxidation behaviour, coke on spent catalyst" }
  ],

  /* ---------- 9. training page ---------- */
  courses: [
    { name:"Surface area and porosimetry with BET", days:"2 days", body:"Degassing, isotherm quality, when BJH misleads you" },
    { name:"GC-MS for complex organic mixtures",    days:"3 days", body:"Sample prep, column choice, deconvolution, library matching" },
    { name:"ICP-MS trace analysis and interference control", days:"3 days", body:"Digestion, internal standards, collision cell strategy, QC limits" },
    { name:"TPD, TPR and TPx for catalyst characterisation", days:"2 days", body:"Experiment design, peak assignment, quantification, artefacts" }
  ],
  capacity: {
    title: "Capacity building is part of the programme",
    paras: [
      "Three PhD students trained with Botswana citizens prioritised, across CVD engineering, electrochemistry and the quantum and ML workstream. An annual quantum computing workshop open to southern African researchers. A battery materials short course for Morupule Coal Mine, Botswana Power Corporation and Botswana Ash engineering staff.",
      "School outreach runs alongside it: \"Energy from Botswana Coal and Ash\" demonstration kits aimed at more than 2,000 students a year."
    ]
  },

  /* ---------- 10. partners page ---------- */
  partners: {
    heading: "€981,600 over 24 months, against a defined output list",
    intro: "The programme is costed line by line and the deliverables are countable rather than aspirational: eight peer-reviewed papers, two patents, a published material passport, and all ML and quantum code open sourced under MIT by month 12.",
    budget: [
      { label:"Personnel, 4 FTE",            value:"€310,000" },
      { label:"FJH and CVD commissioning",   value:"€90,000"  },
      { label:"Year 2 pilot fabrication",    value:"€80,000"  },
      { label:"LCA and OECD testing",        value:"€45,000"  }
    ],
    milestones: [
      { when:"Month 6",  what:"Provisional patent on the Si@HCS in-situ magnesiothermic route, no prior art identified" },
      { when:"Month 12", what:"Sodium-ion first full cell, PEC device rebuilt on fly ash spheres at 10 cm², PCT filing" },
      { when:"Month 18", what:"Pilot supercapacitor module at 100 F and a Si@Carbon battery demonstrator" },
      { when:"Month 21", what:"Botswana-to-device material passport published, industry MoU signed" }
    ],
    commercial: "Commercial path: licensing the coal to FJH graphene to Si@Carbon process to regional manufacturers, with the supply chain model replicable in Zambia, Zimbabwe and Mozambique. IP is filed in Botswana and held there."
  },

  /* ---------- 11. research areas ----------
     Copy a block to add an area, delete one to remove it.               */
  areas: {
    heading: "Research areas",
    intro: "Four lines of work sit under the platform. Each one runs as contract research as well as feeding B-CIRC.",
    items: [
      { title: "Battery electrochemistry",
        body: "Half-cell and full-cell assembly, galvanostatic cycling, rate capability and coulombic efficiency, impedance spectroscopy, and in-situ XRD to watch silicon expand and contract while it cycles.",
        tags: ["Coin cells", "EIS", "In-situ XRD"] },

      { title: "Gasification",
        body: "Fixed-bed and fluidised configurations, sweeping temperature, equivalence ratio and residence time. Syngas composition comes off an online mass spectrometer, so the H₂/CO ratio is watched as it shifts rather than inferred afterwards.",
        tags: ["Co-gasification", "Online gas MS", "Syngas to CVD precursor"] },

      { title: "Pyrolysis",
        body: "Slow and fast pyrolysis of coal and biomass, with yields reported across gas, tar, bio-oil and char. Hard carbon for sodium-ion anodes comes out of this line at 1,200 °C under nitrogen.",
        tags: ["Hard carbon", "Bio-oil", "Tar speciation by GC-MS"] },

      { title: "Heterogeneous catalysis",
        body: "Catalyst formulation and support selection, with the acid-base and redox characterisation that explains why a formulation works: NH₃ and CO₂ TPD for site strength, H₂-TPR for reducibility, TPO for coke on spent catalyst, and activity testing in a packed bed.",
        tags: ["Waste-derived supports", "Deactivation studies", "Contract R&D under NDA"] }
    ]
  },

  /* ---------- 12. team ----------
     photo: the file name of a picture you uploaded to assets/img/
            leave it as "" and the card shows the person's initials instead.
     link:  an ORCID, Google Scholar, LinkedIn or university page. "" hides it. */
  team: {
    intro: "B-CIRC is led from Botswana and spans electrochemical materials science, sustainable synthesis, CVD engineering, computation, industrial ecology and energy policy.",
    people: [
      { name: "Dr Isaac N. Beas",
        role: "Principal investigator",
        org:  "B-CIRC/BITRI",
        photo: "Isaac.jpeg",
        focus: "Flash Joule heating of Botswana coal to graphene, and Si@carbon device development. Co-author of the published TiO₂/NHCS photoelectrochemical proof of concept, which appeared under the name I. Nongwe.",
        link: "https://scholar.google.com/citations?user=enYxWVoAAAAJ&hl=fr", "https://orcid.org/0000-0002-8636-7895"},

      { name: "Chawangwa Damba",
        role: " Materials and Processing, Intellectual Property expert",
        org:  "BITRI",
        photo: "chawangwa-damba.jpeg",
        focus: "Materials and IP specialist, owrking on converting waste and low-value resources into commercially viable materials. Hold and LL.M in intellectual Property. Materials and Processing. IP management and technology transfer.",
        link: "https://www.linkedin.com/in/chawangwa-d-8a506b49/" },

      { name: "Ledwaba Kabelo",
        role: "Electrochemistry & Battery",
        org:  "University of South Africa",
        photo: "ledwaba-kabelo.jpg",
        focus: "EDIT: one line on what this person leads on the project.",
        link: "" },

      /* The roles below are the ones still open in the ISC3 submission.
         Fill in a name when you have one, or delete the whole block.      */
      { name: "Open position",
        role: "Carbon synthesis and CVD lead",
        org:  "",
        photo: "",
        focus: "CVD reactor design, nanotube and amorphous carbon deposition, Raman characterisation.",
        link: "" },

      { name: "Open position",
        role: "Green chemistry and biodegradation lead",
        org:  "",
        photo: "",
        focus: "OECD protocols, degradation pathways by GC-MS and HPLC, REACH compliance.",
        link: "" },

      { name: "Open position",
        role: "Computation and machine learning lead",
        org:  "",
        photo: "",
        focus: "Classical GNN and LSTM pipelines for ion migration barriers and capacity fade, with the quantum workstream alongside.",
        link: "" }
    ]
  },

  /* ---------- 13. lab photographs ----------
     Upload the picture files to assets/img/ first, then list them here.
     Only the file name goes in "file", not the whole path.
     An empty list hides the whole gallery section.                        */
  gallery: {
    heading: "Inside the lab",
    intro: "",
    photos: [
      /* Example. Delete this line and add your own:
      { file: "lab-fjh-reactor.jpg", caption: "Flash Joule heating rig, Botswana coal in the discharge cell" },
      */
    ]
  },

  /* ---------- 14. publications ----------
     Verified against Crossref. Newest first; the page groups them by year.
     To add one, copy a block and fill it in. The doi is the bare identifier,
     not the full https address. Leave doi: "" and no link is shown.        */
  publications: {
    heading: "Publications",
    intro: "Peer-reviewed work by the B-CIRC team. Papers before 2021 appear under the name I. Nongwe, which is the same author as I. N. Beas.",
    /* EDIT: update these three when your metrics change, and the date with them. */
    metrics: [
      { value: "26",    label: "peer-reviewed journal articles" },
      { value: "16",    label: "h-index" },
      { value: "2,305", label: "citations" }
    ],
    metricsNote: "Metrics as recorded in the PI's curriculum vitae.",
    highlight: ["Beas", "Nongwe"],
    items: [
    { year: 2025,
      title: "Comparative analysis of zeolites synthesized from acid refluxed and acid roasted coal fly ash: Application of fly ash-derived zeolites for removal of dye from water",
      authors: "E.M.V. Gaolefufa, T. Manyepedza, I.N. Beas, B.F. Modukanele, M.T. Kabomo",
      where: "MRS Advances 10, 2435-2446",
      doi: "10.1557/s43580-025-01322-8" },

    { year: 2025,
      title: "ZSM‐5 Zeolite Synthesis from Coal Fly Ash Synthesised Silica: Sole Silica & Alumina Source",
      authors: "T. Manyepedza, E.V. Gaolefufa, I.N. Beas, M. Maubane‐Nkadimeng, M.T. Kabomo",
      where: "ChemistryOpen 14",
      doi: "10.1002/open.202400314" },

    { year: 2024,
      title: "Characterisation of Bambara groundnut (Vigna subterranea (L.) Verdc.) shell waste as a potential biomass for different bio-based products",
      authors: "L.K. Ncube, A.U. Ude, E.N. Ogunmuyiwa, I.N. Beas",
      where: "Environmental Monitoring and Assessment 196",
      doi: "10.1007/s10661-024-12937-z" },

    { year: 2024,
      title: "Cytotoxic Cu(II) Complexes with a Novel Quinoline Derivative Ligand: Synthesis, Molecular Docking, and Biological Activity Analysis",
      authors: "G. Shumi, T.B. Demissie, M. Koobotse, G. Kenasa, I.N. Beas, M. Zachariah, T. Desalegn",
      where: "ACS Omega 9, 25014-25026",
      doi: "10.1021/acsomega.4c02129" },

    { year: 2024,
      title: "Debunking the impact of crystallite/particle size in cobalt-based Fischer-Tropsch synthesis",
      authors: "J. Gorimbo, R. Chikati, P. Khangale, I.N. Beas, L.L. Mguni, D. Nkazi",
      where: "Chemical Engineering Communications 211, 1262-1287",
      doi: "10.1080/00986445.2024.2341263" },

    { year: 2024,
      title: "Effect of Support Particle Size in Fischer–Tropsch Synthesis: the Use of Natural Clinoptilolite as Support",
      authors: "J. Gorimbo, R. Chikati, P. Khangale, T.N. Phaahlamohlaka, L.L. Mguni, I.N. Beas, D. Nkazi",
      where: "Industrial & Engineering Chemistry Research 63, 3018-3029",
      doi: "10.1021/acs.iecr.3c03999" },

    { year: 2024,
      title: "Mechano-synthesis of a AgSrFeO 3 catalyst for epoxidation of ethylene in a chemical looping set-up",
      authors: "C. Damba, I.N. Beas, M.M. Mapolelo, J. Darkwa, E.J. Marek",
      where: "Materials Advances 5, 6007-6015",
      doi: "10.1039/d4ma00485j" },

    { year: 2024,
      title: "Synthesis, Molecular Docking, and antibacterial evaluation of Quinoline-Derived Ni(II), Cu(II) and Zn(II) complexes",
      authors: "D. Dinku, T.B. Demissie, I.N. Beas, T. Desalegn",
      where: "Results in Chemistry 8, 101562",
      doi: "10.1016/j.rechem.2024.101562" },

    { year: 2024,
      title: "Towards Attainment of Value-Added Chemicals with Industrial Applications Over Versatile Laco1-Xmnxo3±Δ Perovskites",
      authors: "H.P. Mokwena, I.N. Beas, H. Li, N. Bingwa",
      where: "",
      doi: "10.2139/ssrn.4848248" },

    { year: 2023,
      title: "The Transfer Hydrogenation of Cinnamaldehyde Using Homogeneous Cobalt(II) and Nickel(II) (E)-1-(Pyridin-2-yl)-N-(3-(triethoxysilyl)propyl)methanimine and the Complexes Anchored on Fe3O4 Support as Pre-Catalysts: An Experimental and In Silico Approach",
      authors: "F.P. Sejie, O.A. Oyetunji, J. Darkwa, I.N. Beas, B.C.E. Makhubela, N.Y. Dzade, N.H. de Leeuw",
      where: "Molecules 28, 659",
      doi: "10.3390/molecules28020659" },

    { year: 2023,
      title: "Thermogravimetric-mass spectrometry study of pyrolysis of Botswana-Morupule coal: kinetic parameters determination using iso-conversional and model fitting methods",
      authors: "K.P. Kgatlane, S. Odisitse, C. Gate, J. Darkwa, I.N. Beas",
      where: "Reaction Kinetics, Mechanisms and Catalysis 136, 2343-2358",
      doi: "10.1007/s11144-023-02459-z" },

    { year: 2022,
      title: "Photocatalytic Degradation of Methylene Blue and Ortho-Toluidine Blue: Activity of Lanthanum Composites LaxMOy (M: Fe, Co, Ni)",
      authors: "M.L. Mocwana, P.P. Mokoena, P.S. Mbule, I.N. Beas, G.L. Kabongo, S.N. Ogugua, T.E. Tshabalala",
      where: "Catalysts 12, 1313",
      doi: "10.3390/catal12111313" },

    { year: 2021,
      title: "TiO2@hollow carbon spheres: A photocatalyst for hydrogen generation under visible irradiation",
      authors: "A. Boudjemaa, I. Nongwe, B. Mutuma, B. Matsoso, K. Bachari, N. Coville",
      where: "Journal of Photochemistry and Photobiology A: Chemistry 417, 113355",
      doi: "10.1016/j.jphotochem.2021.113355" },

    { year: 2020,
      title: "Cyclometalation of lanthanum( iii ) based MOF for catalytic hydrogenation of carbon dioxide to formate",
      authors: "P. Tshuma, B.C.E. Makhubela, L. Öhrström, S.A. Bourne, N. Chatterjee, I.N. Beas, J. Darkwa, G. Mehlana",
      where: "RSC Advances 10, 3593-3605",
      doi: "10.1039/c9ra09938g" },

    { year: 2020,
      title: "Environmental Impact of Food Packaging Materials: A Review of Contemporary Development from Conventional Plastics to Polylactic Acid Based Materials",
      authors: "L.K. Ncube, A.U. Ude, E.N. Ogunmuyiwa, R. Zulkifli, I.N. Beas",
      where: "Materials 13, 4994",
      doi: "10.3390/ma13214994" },

    { year: 2020,
      title: "Unravelling the interfacial interaction in mesoporous SiO2@nickel phyllosilicate/TiO2 core–shell nanostructures for photocatalytic activity",
      authors: "B.K. Mutuma, X. Mathebula, I. Nongwe, B.P. Mtolo, B.J. Matsoso, R. Erasmus, Z. Tetana, N.J. Coville",
      where: "Beilstein Journal of Nanotechnology 11, 1834-1846",
      doi: "10.3762/bjnano.11.165" },

    { year: 2019,
      title: "Easy and convenient synthesis of CNT/TiO2 nanohybrid by in-surface oxidation of Ti3+ ions and application in the photocatalytic degradation of organic contaminants in water",
      authors: "A.V. Abega, H.M. Ngomo, I. Nongwe, H.E. Mukaya, P.M.A. Kouoh Sone, X. Yangkou Mbianda",
      where: "Synthetic Metals 251, 1-14",
      doi: "10.1016/j.synthmet.2019.03.012" },

    { year: 2018,
      title: "Reduction of sulphur dioxide using carbon monoxide over gold supported catalysts",
      authors: "T. Ngwenya, I. Nongwe, L.L. Jewell",
      where: "Gold Bulletin 51, 153-162",
      doi: "10.1007/s13404-018-0235-2" },

    { year: 2017,
      title: "Au and Ag nanoparticles encapsulated within silica nanospheres using dendrimers as dual templating agent and their catalytic activity",
      authors: "M. Nemanashi-Maumela, I. Nongwe, R.C. Motene, B.L. Davids, R. Meijboom",
      where: "Molecular Catalysis 438, 184-196",
      doi: "10.1016/j.mcat.2017.06.003" },

    { year: 2016,
      title: "N-doped ordered mesoporous carbon supported PdCo nanoparticles for the catalytic oxidation of benzyl alcohol",
      authors: "V. Ravat, I. Nongwe, N.J. Coville",
      where: "Microporous and Mesoporous Materials 225, 224-231",
      doi: "10.1016/j.micromeso.2015.11.019" },

    { year: 2016,
      title: "Pt supported nitrogen doped hollow carbon spheres for the catalysed reduction of cinnamaldehyde",
      authors: "I. Nongwe, V. Ravat, R. Meijboom, N.J. Coville",
      where: "Applied Catalysis A: General 517, 30-38",
      doi: "10.1016/j.apcata.2016.02.025" },

    { year: 2016,
      title: "Selective gas phase isomerization of styrene oxide to phenylacetaldehyde in a steel tube reactor",
      authors: "B. Terfassa, I. Nongwe, V. Ravat, N.J. Coville",
      where: "Reaction Kinetics, Mechanisms and Catalysis 120, 543-554",
      doi: "10.1007/s11144-016-1115-5" },

    { year: 2016,
      title: "Study of photoelectrochemical water splitting using composite films based on TiO 2 nanoparticles and nitrogen or boron doped hollow carbon spheres as photoanodes",
      authors: "K. Ranganathan, A. Morais, I. Nongwe, C. Longo, A.F. Nogueira, N.J. Coville",
      where: "Journal of Molecular Catalysis A: Chemical 422, 165-174",
      doi: "10.1016/j.molcata.2015.10.024" },

    { year: 2014,
      title: "Synthesis of gold encapsulated in spherical carbon capsules with a mesoporous shell structure. A robust catalyst in a nanoreactor",
      authors: "I. Nongwe, G. Bepete, A. Shaikjee, V. Ravat, B. Terfassa, R. Meijboom, N.J. Coville",
      where: "Catalysis Communications 53, 77-82",
      doi: "10.1016/j.catcom.2014.05.001" },

    { year: 2013,
      title: "Efficient and reusable Co/nitrogen doped hollow carbon sphere catalysts for the aerobic oxidation of styrene",
      authors: "I. Nongwe, V. Ravat, R. Meijboom, N.J. Coville",
      where: "Applied Catalysis A: General 466, 1-8",
      doi: "10.1016/j.apcata.2013.06.014" },

    { year: 2013,
      title: "Pd on boron-doped hollow carbon spheres – PdO particle size and support effects",
      authors: "V. Ravat, I. Nongwe, R. Meijboom, G. Bepete, N.J. Coville",
      where: "Journal of Catalysis 305, 36-45",
      doi: "10.1016/j.jcat.2013.04.018" },

    { year: 2012,
      title: "Palladium‐Supported Boron‐Doped Hollow Carbon Spheres as Catalysts for the Solvent‐free Aerobic Oxidation of Alcohols",
      authors: "V. Ravat, I. Nongwe, N.J. Coville",
      where: "ChemCatChem 4, 1930-1934",
      doi: "10.1002/cctc.201200374" }
    ]
  },

  /* ---------- 14. news ----------
     Newest first. Copy a block to add a post. Keep the date as YYYY-MM-DD.  */
  news: [
    { date:"2026-04-15", tag:"Submission",
      title:"B-CIRC submitted to the ISC3 Innovation Challenge 2026",
      body:"Four devices, six carbon architectures and a 24 month programme went to the International Sustainable Chemistry Collaborative Centre under the Novel Devices category. Write to us for the dossier." },
    { date:"2026-03-02", tag:"Result",
      title:"Si@FJH-graphene holds 740 mAh g⁻¹ at 100 cycles",
      body:"The lead architecture cleared its 700 mAh g⁻¹ target with coulombic efficiency at 98.4% after the fifth cycle. In-situ XRD put volume change at roughly 22%, comfortably inside the 30% design ceiling." }
  ],

  /* ---------- 15. newsletter and footer ---------- */
  newsletter: {
    heading: "Progress notes from the lab",
    body: "Monthly. New device results, preprints as they go up, course dates, and write-ups of the runs that did not work."
  }
};
