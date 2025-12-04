import { NavLink } from "react-router";

const Landing = () => {
    return (<>
  <section className="relative overflow-hidden">
    <div className="gradientBackground rounded-xl absolute inset-0 opacity-80"></div>

    <div className="relative max-w-6xl mx-auto px-6 py-32 text-center text-white">
      <h1 className="mainTitle">
        Get Your Website Budget Instantly
      </h1>
      <p className="mt-6 text-lg md:text-xl opacity-90">
        Professional, fast, and transparent quotes for modern websites and digital projects.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <NavLink to="/budgets" className="button"> Get My Quote Now </NavLink>
    </div>
    </div>
  </section>

  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Fast and Personalized Quotes</h3>
          <p className="text-gray-600">
            Get an estimate tailored to your needs in just minutes. No waiting, no complications.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Transparent and No Surprises</h3>
          <p className="text-gray-600">
            We break down costs clearly so you understand exactly what you're paying for.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">🛠️</div>
          <h3 className="text-xl font-semibold mb-2">Created by Digital Professionals</h3>
          <p className="text-gray-600">
            Our experience ensures realistic budgets and high-quality project planning.
          </p>
        </div>
      </div>
    </div>
  </section>
  </>);
}

export default Landing;