export default function Home() {
  return (
    <main className="cover">
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="BeijingSauce home">BEIJINGSAUCE</a>
        <span className="edition">AN INDEPENDENT CITY GUIDE</span>
      </header>
      <section className="composition" aria-labelledby="headline">
        <div className="title">
          <span className="issue">FOOD & THE HOURS AFTER</span>
          <h1 id="headline">Beijing.<em>Savor slowly.</em></h1>
          <div className="signature" aria-hidden="true">Bs.</div>
        </div>
        <figure className="photo">
          <div className="image-window"><img src="/sauce.jpg" alt="Dumplings, chili oil and a cold beer on a late-night Beijing table" width="1122" height="1402" fetchPriority="high" /></div>
          <figcaption>A CITY, BEST SAVORED.</figcaption>
        </figure>
      </section>
      <footer><span className="copyright">© {new Date().getFullYear()} BEIJINGSAUCE</span><span className="launch">COMING SOON</span><span className="location">BEIJING, CHINA</span></footer>
    </main>
  );
}
