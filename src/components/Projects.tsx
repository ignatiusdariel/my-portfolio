import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "NightWatch",
      tags: ["React", "Node.js", "MongoDB"],
      num: "001",
      code: `const watch = createServer({
  port: 3000,
  middleware: [auth, cors],
  routes: loadRoutes('./api')
});
watch.listen();`,
    },
    {
      title: "Cipher API",
      tags: ["Python", "FastAPI", "Redis"],
      num: "002",
      code: `@app.post("/encrypt")
async def encrypt(data):
  key = derive_key(SECRET)
  return {"cipher": aes_enc(data, key)}`,
    },
    {
      title: "ShadowDB",
      tags: ["PostgreSQL", "TypeScript", "ORM"],
      num: "003",
      code: `const q = db
  .select('*')
  .from('missions')
  .where('status','active')
  .orderBy('priority','desc')
  .limit(20);`,
    },
    {
      title: "Dossier App",
      tags: ["Next.js", "Tailwind", "Supabase"],
      num: "004",
      code: `export default function Page() {
  const [data] = useDossier(id);
  return (
    <Layout>
      <FileView data={data} />
    </Layout>
  );
}`,
    },
    {
      title: "ReconBot",
      tags: ["Python", "Selenium", "Lambda"],
      num: "005",
      code: `def run_mission(target):
  driver = init_headless()
  data = extract(driver, target)
  store_s3(data)
  return {"status": "ok"}`,
    },
    {
      title: "GridLine",
      tags: ["React", "D3.js", "WebSockets"],
      num: "006",
      code: `const ws = new WebSocket(WS_URL);
ws.onmessage = (e) => {
  const {x,y,v} = parse(e.data);
  chart.update({x,y,v});
};`,
    },
  ];

  const doubled = [...projects, ...projects]; // infinite reel illusion

  return (
    <>
      <div className="divider">— Frame 003 · Reel of Work —</div>

      <section id="work">
        <div className="work-head reveal">
          <h2>The Reel</h2>
          <p>// Projects developed, shipped, survived — hover to inspect</p>
        </div>

        <div className="reel-wrap">
          <div className="reel-track">
            {doubled.map((p, i) => (
              <React.Fragment key={i}>
                <div className="frame-unit">
                  <div className="spr-row">
                    {Array.from({ length: 17 }).map((_, i) => (
                      <div key={i} className="spr-h" />
                    ))}
                  </div>

                  <div className="film-cell">
                    <span className="cell-num">{p.num} ▲</span>
                    <span className="cell-exp">ISO 400</span>

                    <div className="cell-bg">
                      <span className="pi">⬡</span>
                    </div>

                    <div className="code-preview">
                      <pre>{p.code}</pre>
                    </div>

                    <div className="cell-overlay">
                      <span className="cell-title">{p.title}</span>
                      <div className="cell-tags">
                        {p.tags.map((t, idx) => (
                          <span key={idx} className="cell-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="spr-row">
                    {Array.from({ length: 17 }).map((_, i) => (
                      <div key={i} className="spr-h" />
                    ))}
                  </div>
                </div>

                <div className="frame-sep" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;