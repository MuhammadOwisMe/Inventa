import type { Metadata } from "next";
import Hero from "../components/hero";

export const metadata: Metadata = {
    title: "Contact Us | Inventa",
    description: "Get in touch with our team to discuss your digital transformation needs.",
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-black">
            <Hero
                image="/map.svg"
                heading={
                    <>
                        Let's Build the <span className="text-[#1AE5D6]">Future</span> Together
                    </>
                }
                description="Ready to transform your digital infrastructure? Whether you have a question about features, pricing or need a demo our team is ready to answer all of your questions"
            />
        </main>
    );
}
