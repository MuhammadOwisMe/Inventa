'use client';

import type { Metadata } from "next";
import Hero from "../components/hero";
import TeamCard from "../components/team-card";
import CoreValueCard from "../components/core-value-card";
import { faLightbulb, faGaugeHigh, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button";


export default function About() {
    return (
        <main className="min-h-screen bg-black">
            <Hero
                image="/about.svg"
                heading="The Vision Behind Inventa"
                description="We are architects of the digital future, empowering businesses with next-generation scalable architecture"
            />

            <section className="py-24 px-6 md:px-12 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12">Our Leadership</h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <TeamCard
                            name="Muhammad Owis"
                            role="Founder & CEO"
                            description="Driving the vision of digital innovation with over 4 years of experience in Tech and enterprise solution"
                            image="/founder_one.png"
                        />
                        <TeamCard
                            name="Abdul Rehman"
                            role="Co-Founder & CTO"
                            description="Architecting scalable solutions and overseeing the engineering teams to build robust, secure platforms."
                            image="/founder_two.png"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 px-6 md:px-12 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Core Values</h2>
                        <p className="text-white/70 text-lg">
                            Our principles define how we innovate, collaborate along with our partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <CoreValueCard
                            icon={faLightbulb}
                            description="we constantly challenge the status quo, pioneering new technologies to solve complex problems"
                        />
                        <CoreValueCard
                            icon={faGaugeHigh}
                            description="Streamlining processes for speed and accuracy, ensuring resources are utilized effectively."
                        />
                        <CoreValueCard
                            icon={faArrowTrendUp}
                            description="Committed to sustainable scaling, helping businesses and institutions to expand their reach"
                        />
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-32 px-6 text-center bg-[#1C2527]">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Join the Revolution
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl">
                        Ready to transform your digital infrastructure? Let's build something extraordinary together
                    </p>
                    <div className="pt-4">
                        <Button text="Get Started" onClick={() => { }} />
                    </div>
                </div>
            </section>
        </main>
    );
}
