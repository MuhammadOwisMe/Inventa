import type { Metadata } from "next";
import Hero from "../components/hero";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactInfoCard from "../components/contact-info-card";
import ContactForm from "../components/contact-form";

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

            <section className="py-24 px-6 md:px-12 bg-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                            <p className="text-white/70 text-lg max-w-md">
                                We'd love to hear from you please fill out this form or shoot us an email directly.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <ContactInfoCard
                                icon={faEnvelope}
                                title="Email"
                                content="inventa.us.team@gmail.com"
                            />
                            <ContactInfoCard
                                icon={faPhone}
                                title="Phone"
                                content="+92 3455913846"
                            />
                            <ContactInfoCard
                                icon={faWhatsapp}
                                title="Whatsapp"
                                content="+92 3432950088"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
