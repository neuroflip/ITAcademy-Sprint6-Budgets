import { NavLink } from "react-router";

import "./sytyles/landing.css";

const Landing = () => {
    return (<>
  <header className="gradientBackground rounded-xl shadow-xl">
    <div className="relative max-w-6xl mx-auto px-6 py-32 text-center text-white">
      <h1 className="mainTitle">
        Get Your Website Budget Instantly
      </h1>
      <h2 className="mt-6 text-2lg md:text-xl font-bold text-white">
        Professional, fast, and transparent quotes for modern websites and digital projects.
      </h2>

      <div className="mt-10 flex justify-center gap-4">
        <NavLink to="/budgets" className="button"> Get My Quote Now </NavLink>
    </div>
    </div>
  </header>

  <main>
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <article className="landingCard">
            <div className="landing__icon">⚡</div>
            <h3 className="landing__title">Fast and Personalized Quotes</h3>
            <p className="landing__text">
              Get an estimate tailored to your needs in just minutes. No waiting, no complications.
            </p>
          </article>

          <article className="landingCard">
            <div className="landing__icon">📊</div>
            <h3 className="landing__title">Transparent and No Surprises</h3>
            <p className="landing__text">
              We break down costs clearly so you understand exactly what you're paying for.
            </p>
          </article>

          <article className="landingCard">
            <div className="landing__icon">🛠️</div>
            <h3 className="landing__title">Created by Digital Professionals</h3>
            <p className="landing__text">
              Our experience ensures realistic budgets and high-quality project planning.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
  </>);
}

export default Landing;