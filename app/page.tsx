export default function Home() {
  return (
    <main>
      <header className="masthead"><a href="#" aria-label="BeijingSauce 首页" className="wordmark">BeijingSauce<span>✳</span></a><span className="edition">北京风味观察室<br/><small>AN INDEPENDENT CITY GUIDE</small></span><span className="status"><i/>正在酝酿 · COMING SOON</span></header>
      <section className="hero" aria-labelledby="headline">
        <div className="left-note"><span>好吃的，好喝的。<br/>还有，不想回家的。</span><span className="coordinates">39°54′ N<br/>116°24′ E</span></div>
        <div className="title"><p className="eyebrow">A LITTLE HEAT. A LOT OF BEIJING.</p><h1 id="headline">北京，<br/><span>越夜越有味。</span></h1><p className="intro">从胡同里的一口热乎，<br/>到藏在街角的最后一杯。<br/>我们在找，这座城值得回味的地方。</p><a className="discover" href="#about">先尝一点 <span aria-hidden="true">↘</span></a></div>
        <figure className="photo"><img src="/sauce.jpg" alt="深夜餐桌上的红油、饺子与一杯啤酒" width="1122" height="1402" fetchPriority="high"/><div className="photo-tag">有<br/>味</div><figcaption><span>THE CITY IS STILL SIMMERING.</span><span>北京 · 夜未央</span></figcaption></figure>
        <div className="big-type" aria-hidden="true">Extra sauce,<em> please.</em></div>
      </section>
      <section className="about" id="about"><div className="section-label"><span>001 / 即将上桌</span><span>GOOD THINGS TAKE A LITTLE TIME.</span></div><div className="about-copy"><h2>一座城的滋味，<br/>不止在菜单上。</h2><div><p>一张小桌，一间小店，一个转角。<br/>BeijingSauce 记录北京的好味道，<br/>也记录那些让人想再来一次的夜晚。</p><p className="coming">第一份城市指南，正在酝酿。<br/><span>Good food. Great drinks. Stories in between.</span></p></div></div><div className="topics"><span>吃点好的 <small>GOOD EATS</small></span><b>✳</b><span>喝一杯吧 <small>AFTER HOURS</small></span><b>✳</b><span>转个街角 <small>HIDDEN CORNERS</small></span></div></section>
      <footer><a className="wordmark" href="#">BeijingSauce<span>✳</span></a><span>在北京，慢慢找味道。<br/><small>© {new Date().getFullYear()} BeijingSauce</small></span><a className="back-top" href="#">回到开场 ↑</a></footer>
    </main>
  );
}
