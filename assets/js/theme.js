/* Tailwind theme tokens. Palette sampled from the official B-CIRC one-pager.
   Change a colour here and every page follows. */
tailwind.config = {
  theme: { extend: {
    colors: {
      forest: { 900:'#12301f', 800:'#1c4332', 700:'#255741', 600:'#2e6a4f', 500:'#40916c', 300:'#95d5b2' },
      ochre:  { 700:'#8f5a08', 600:'#c07c0d', 400:'#dfbd84', 100:'#fdf3e3' },
      cyan2:  { 600:'#0d96b7', 400:'#44bcce' },
      mint:   { 50:'#f3faf4', 100:'#e8f5e9', 200:'#c8e6c9' }
    },
    fontFamily: {
      sans:  ['ui-sans-serif','-apple-system','Segoe UI','Helvetica Neue','Arial','sans-serif'],
      serif: ['ui-serif','Georgia','Cambria','Times New Roman','serif'],
      mono:  ['ui-monospace','SFMono-Regular','Menlo','monospace']
    }
  } }
};
