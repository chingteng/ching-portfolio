export default function ProductOperations() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <a href="/" className="text-sm text-gray-500">← Back to home</a>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight">
        Building product clarity across software, hardware, and operations
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        A product case study about working across product strategy, UX, hardware
        constraints, supplier coordination, and manufacturing execution in a
        medical device company.
      </p>

      <section className="mt-12 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold">Context</h2>
          <p className="mt-4 leading-7 text-gray-600">
            Explain the product, the business situation, your role, and the
            cross-functional environment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-4 leading-7 text-gray-600">
            What was unclear, blocked, inefficient, or risky before you stepped
            in?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Product Decisions</h2>
          <p className="mt-4 leading-7 text-gray-600">
            What tradeoffs did you make across user needs, technical feasibility,
            business constraints, and manufacturing realities?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="mt-4 leading-7 text-gray-600">
            What improved? What did the team learn? What would you do next?
          </p>
        </div>
      </section>
    </main>
  );
}