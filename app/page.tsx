export default function Home() {
  return (
    <main>
      <header className="masthead"><a href="#" aria-label="BeijingSauce home" className="wordmark">BeijingSauce<span>✳</span></a><span className="edition">THE BEIJING EDIT<br/><small>AN INDEPENDENT CITY GUIDE</small></span><span className="status"><i/>SIMMERING · COMING SOON</span></header>
      <section className="hero" aria-labelledby="headline">
        <div className="left-note"><span>GOOD FOOD. GREAT DRINKS.<br/>LATE NIGHTS WORTH KEEPING.</span><span className="coordinates">39°54′ N<br/>116°24′ E</span></div>
        <div className="title"><p className="eyebrow">A LITTLE HEAT. A LOT OF BEIJING.</p><h1 id="headline">Beijing,<br/><span>after dark.</span></h1><p className="intro">From a steaming plate down a hutong<br/>to one last drink around the corner.<br/>A taste of the city that stays with you.</p><a className="discover" href="#about">A first taste <span aria-hidden="true">↘</span></a></div>
        <figure className="photo"><img src="/sauce.jpg" alt="Chili oil, dumplings and a glass of beer on a late-night table" width="1122" height="1402" fetchPriority="high"/><div className="photo-tag">STAY<br/>SAUCY</div><figcaption><span>THE CITY IS STILL SIMMERING.</span><span>BEIJING · AFTER HOURS</span></figcaption></figure>
        <div className="big-type" aria-hidden="true">Extra sauce,<em> please.</em></div>
      </section>
      <section className="about" id="about"><div className="section-label"><span>001 / COMING TO THE TABLE</span><span>GOOD THINGS TAKE A LITTLE TIME.</span></div><div className="about-copy"><h2>There’s more to a city<br/>than what’s on the menu.</h2><div><p>A little table. A tucked-away bar. An unexpected turn.<br/>BeijingSauce follows the flavors of Beijing,<br/>and the nights that make you want to come back.</p><p className="coming">Our first city guide is simmering.<br/><span>Good food. Great drinks. Stories in between.</span></p></div></div><div className="topics"><span>Good eats <small>WORTH THE DETOUR</small></span><b>✳</b><span>After hours <small>JUST ONE MORE</small></span><b>✳</b><span>Hidden corners <small>TAKE THE LONG WAY</small></span></div></section>
      <footer><a className="wordmark" href="#">BeijingSauce<span>✳</span></a><span>Beijing. Best savored slowly.<br/><small>© {new Date().getFullYear()} BeijingSauce</small></span><a className="back-top" href="#">Back to the top ↑</a></footer>
    </main>
  );
}
