export const metadata = {
  title: 'About Us',
  description: 'The idea behind BeijingSauce, an independent guide to Beijing.',
  alternates: { canonical: '/about' },
};
export default function About() {
  return (
    <main id="main" className="page about">
      <div className="page-intro">
        <p className="eyebrow">About us</p>
        <h1>
          A little more
          <br />
          <em>Beijing.</em>
        </h1>
      </div>
      <div className="about-grid">
        <p className="about-lead">
          For the places you remember.
          <br />
          And the stories you bring home.
        </p>
        <div className="prose">
          <h2>Why Sauce?</h2>
          <p>
            A nod to the sauce in jing jiang rou si, and to the little extra
            that makes something your own.
          </p>
          <h2>Our point of view</h2>
          <p>
            BeijingSauce is taking shape as an independent guide to the city:
            original writing, individual places and personal observations.
          </p>
          <aside className="sample-note">
            Team biographies and the full editorial policy will be added before
            the content launch.
          </aside>
        </div>
      </div>
    </main>
  );
}
