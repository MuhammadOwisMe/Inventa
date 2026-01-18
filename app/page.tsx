'use client';

import Hero from "./components/hero";
import Card from "./components/card";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero
        image="/idea.png"
        heading="Empowering Business with Innovative Tools"
        description="Inventa provides cutting-edge solutions designed to enhance operational efficiency and growth for every business"
        buttonText="Explore Business Solutions"
      />

      {/* Features Grid Section */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 justify-items-center">
            <Card
              image="/think.svg"
              title="Interactive Business Platforms"
              description="Engaging clients and teams with dynamic platforms that adapt to your unique workflow."
            />
            <Card
              image="/analysis.svg"
              title="Scalable Architecture"
              description="Building foundations that grow alongside your vision, ensuring long-term success and stability."
            />
            <Card
              image="/plant.svg"
              title="Real-time Analytics"
              description="Gain deep insights into your business performance with our powerful data visualization tools."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <Button text="Get Started" onClick={() => { }} />
        </div>
      </section>
    </main>
  );
}
