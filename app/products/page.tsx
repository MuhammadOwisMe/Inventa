import Hero from "../components/hero";
import ProductCard from "../components/product-card";
import { faBullhorn, faGear, faCircleCheck, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
    return (
        <main className="min-h-screen bg-black">
            <Hero
                image="/products.png"
                heading="Innovative Solutions for Modern Business"
                description="Discover our suite of powerful tools designed for growth and efficiency"
            />

            {/* Our Products Section */}
            <section className="py-24 px-6 md:px-12 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>

                    {/* Page Booster Card */}
                    <ProductCard
                        title="Page Booster"
                        description="Supercharge your business's social presence. Page booster automates Facebook marketing and targets prospective customers with precision AI Algorithms, turning likes into enrollment"
                        image="/fb.svg"
                        imageBgColor="from-[#212459] to-[#121212]"
                        features={[
                            { icon: faBullhorn, text: "Ad automation" },
                            { icon: faGear, text: "AI Targeting" }
                        ]}
                    />

                    {/* FeeFlow Card */}
                    <ProductCard
                        title="FeeFlow"
                        description="Streamline institute management with our intuitive platform. Simplify billing, track payments automatically, and enhance financial transparency for both parents and administrations."
                        image="/screen.svg"
                        reverse={true}
                        imageBgColor="from-[#141414] to-[#0A0A0A]"
                        features={[
                            { icon: faCircleCheck, text: "Auto-Billing" },
                            { icon: faChartLine, text: "Analytics" }
                        ]}
                    />
                </div>
            </section>
        </main>
    );
}
