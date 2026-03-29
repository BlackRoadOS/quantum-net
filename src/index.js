
// index.js
var HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>BlackRoad Quantum — Network</title><meta name="description" content="Quantum network and mesh infrastructure."><link rel="icon" href="brand-assets/favicon.ico"><style>*{margin:0;padding:0;box-sizing:border-box}:root{--p:#FF1D6C;--d:#0a0a0a;--g:#1a1a1a;--l:#e0e0e0}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:var(--d);color:var(--l);line-height:1.6}a{color:var(--p);text-decoration:none}.c{max-width:1100px;margin:0 auto;padding:0 24px}section{padding:80px 24px}h1{font-size:clamp(2.5rem,5vw,4rem);font-weight:800;letter-spacing:-2px}h1 span{color:var(--p)}h2{font-size:2rem;font-weight:800;margin-bottom:16px}h2 span{color:var(--p)}.hero{min-height:90vh;display:flex;flex-direction:column;justify-content:center}.hero p{color:#999;font-size:1.2rem;max-width:650px;margin:16px 0 40px}.btn{padding:14px 32px;border-radius:8px;font-weight:700;background:var(--p);color:#fff;display:inline-block;margin-right:12px}.btn-s{background:transparent;border:2px solid #333;color:var(--l)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}.card{background:var(--g);border-radius:12px;padding:28px;border:1px solid #222}.card h3{color:var(--p);margin-bottom:8px}.card p{color:#999;font-size:.9rem}footer{padding:60px 24px;border-top:1px solid #222;text-align:center}footer p{color:#666;font-size:.85rem}</style></head><body>
<section class="hero"><div class="c"><h1>BlackRoad Quantum</h1><p>Distributed quantum-inspired mesh computing.</p><a href="https://buy.stripe.com/aFadR27Je7tP0m78Mk4Vy0p" class="btn">Get Started</a><a href="https://blackroad.io" class="btn btn-s">All Products</a></div></section>
<section style="background:#111"><div class="c"><h2><span>Features</span></h2><div class="grid"><div class="card"><h3>BlackBox Protocol</h3><p>Built for sovereignty. No vendor lock-in.</p></div><div class="card"><h3>Ternary routing</h3><p>Performance optimized for real-world use.</p></div><div class="card"><h3>Multi-network mesh</h3><p>Privacy by design. Your data, your rules.</p></div><div class="card"><h3>Tor + IPFS + WebRTC</h3><p>Open standards. Interoperable.</p></div><div class="card"><h3>1/(2e) latency floor</h3><p>Part of BlackRoad OS — 107 products.</p></div><div class="card"><h3>7-node tested</h3><p>Unified platform. Everything connected.</p></div></div></div></section>
<section><div class="c"><h2>Part of <span>BlackRoad OS</span></h2><p style="color:#999;max-width:600px;margin-bottom:32px">blackroadquantum.net is one of 19 domains in the BlackRoad ecosystem.</p><div style="display:flex;gap:40px;flex-wrap:wrap"><div><div style="font-size:2.5rem;font-weight:800;color:var(--p)"><span data-live="products">107</span></div><div style="color:#666;font-size:.8rem;text-transform:uppercase">Products</div></div><div><div style="font-size:2.5rem;font-weight:800;color:var(--p)"><span data-live="nodes">7</span></div><div style="color:#666;font-size:.8rem;text-transform:uppercase">Nodes</div></div><div><div style="font-size:2.5rem;font-weight:800;color:var(--p)"><span data-live="domains">19</span></div><div style="color:#666;font-size:.8rem;text-transform:uppercase">Domains</div></div><div><div style="font-size:2.5rem;font-weight:800;color:var(--p)"><span data-live="cost">$12</span></div><div style="color:#666;font-size:.8rem;text-transform:uppercase">/mo Cost</div></div></div></div></section>
<footer><div class="c"><p style="color:var(--p);font-weight:700;margin-bottom:8px">Pave Tomorrow.</p><p>blackroadquantum.net — BlackRoad OS, Inc. | <a href="https://blackroad.io">blackroad.io</a></p></div></footer>
<script>(function(){fetch("https://blackroad-live-stats.amundsonalexa.workers.dev/api/stats").then(r=>r.json()).then(s=>{document.querySelectorAll("[data-live]").forEach(el=>{const k=el.dataset.live;const m={nodes:s.fleet.nodes_online,products:s.products.total,repos:s.products.repos,domains:s.products.domains,agents:s.infra.agents,websites:s.infra.websites,models:s.infra.ollama_models,memory:s.infra.memory,tops:s.infra.tops,cost:"$"+s.company.cost_per_month,codex:s.infra.codex};if(m[k]!==undefined)el.textContent=m[k]})}).catch(()=>{})})();<\/script>
</body></html>`;
var ROBOTS = `User-agent: *
Allow: /
Sitemap: https://blackroadquantum.net/sitemap.xml

# BlackRoad OS, Inc.
`;
var SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://blackroadquantum.net/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`;
var JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BlackRoad OS, Inc.",
  "url": "https://blackroad.io",
  "logo": "https://blackroad.io/og.png",
  "description": "Quantum network",
  "founder": { "@type": "Person", "name": "Alexa Louise Amundson" },
  "foundingDate": "2025-11-17",
  "sameAs": ["https://github.com/BlackRoad-OS-Inc"]
});
var index_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const headers = {
      "X-BR-Router": "2.0",
      "X-BR-Domain": "blackroadquantum.net",
      "X-BR-Brand": "Ember→Flare→Magenta→Orchid→Arc→Cyan",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };
    if (url.pathname === "/robots.txt") {
      return new Response(ROBOTS, { headers: { ...headers, "Content-Type": "text/plain", "Cache-Control": "public, max-age=86400" } });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(SITEMAP, { headers: { ...headers, "Content-Type": "application/xml", "Cache-Control": "public, max-age=86400" } });
    }
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", domain: "blackroadquantum.net", timestamp: (/* @__PURE__ */ new Date()).toISOString() }), {
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }
    let html = HTML;
    if (html && !html.includes('rel="canonical"')) {
      html = html.replace(
        "</head>",
        `<link rel="canonical" href="https://blackroadquantum.net"><meta property="og:url" content="https://blackroadquantum.net"><meta property="og:image" content="https://blackroad.io/og.png"><link rel="icon" type="image/x-icon" href="https://blackroad.io/favicon.ico"><link rel="apple-touch-icon" href="https://blackroad.io/apple-touch-icon.png"><script type="application/ld+json">${JSONLD}<\/script></head>`
      );
    }
    return new Response(html || "<h1>blackroadquantum.net</h1>", {
      headers: { ...headers, "Content-Type": "text/html;charset=UTF-8", "Cache-Control": "public, max-age=300, stale-while-revalidate=3600" }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map

