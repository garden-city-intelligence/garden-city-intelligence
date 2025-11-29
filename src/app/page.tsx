export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold mb-6">
          Garden City Intelligence
        </h1>
        <p className="text-2xl mb-12 text-gray-300">
          Elite freelance AI · Cloud · DevOps engineers<br />
          Missoula-based · Remote worldwide
        </p>

        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-semibold mb-6">We ship</h2>
          <ul className="text-xl space-y-4 text-gray-200">
            <li>• Custom AI agents & LLM integrations</li>
            <li>• Cloud architecture & cost optimization (AWS, GCP, Azure)</li>
            <li>• Full-stack DevOps – Terraform, Kubernetes, GitHub Actions</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <a href="https://calendly.com/gci" className="inline-block bg-white text-black px-10 py-5 text-xl font-bold rounded hover:bg-gray-200 transition">
            Book a free 30-min tech audit
          </a>
          <a href="https://github.com/garden-city-intelligence" className="inline-block border border-white px-10 py-5 text-xl rounded hover:bg-white hover:text-black transition">
            See live projects on GitHub →
          </a>
        </div>

        <p className="mt-20 text-gray-500">
          © 2025 Garden City Intelligence · hello@gardencityintelligence.com
        </p>
      </div>
    </main>
  );
}
