export default function Home() {
  return (
    <main className="cover">
      <div className="scene" aria-hidden="true"><img src="/sauce.jpg" alt="" width="1122" height="1402" fetchPriority="high" /></div>
      <header className="masthead"><span className="location">BEIJING, CHINA</span><span className="edition">AN INDEPENDENT CITY GUIDE</span></header>
      <section className="composition" aria-labelledby="headline">
        <h1 id="headline" aria-label="BeijingSauce"><span>Beijing</span><em>Sauce<span className="period">.</span></em></h1>
        <p className="tagline">The city.<br/><em>Well tasted.</em></p>
      </section>
      <footer><span className="descriptor">FOOD. DRINK. AFTER DARK.</span><span className="launch"><i aria-hidden="true"/>COMING SOON</span></footer>
    </main>
  );
}
