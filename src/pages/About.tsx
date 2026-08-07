// meta data for about page
export const metadata = {
    title: "Mobile Phone Repair Tottenham Court Road | Fast Same-Day Fixes",
    description: "Need mobile phone repair on Tottenham Court Road? Visit our phone shop Tottenham Court Road for fast, affordable screen & battery repairs today",
};


import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <title>Best Electronic Shop | Laptop & Mobile Repair Experts | TECH OUTLET LTD</title>
            <meta name="description" content="Tottenham Court Road-based laptop repair experts offering quick mobile fixes and premium tech accessories. Book your repair or visit our shop today!
" />
            <link rel="canonical" href="https://www.techoutlet.uk/about" />
            <Navbar />

            {/* 1. About Hero Section */}
            <section className="relative pt-32 pb-20 flex items-center justify-center text-center ">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight"
                        >
                            About TECH OUTLET LTD
                        </motion.h1>

                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl md:text-5xl font-extrabold text-red-600 mb-10 leading-tight max-w-4xl mx-auto tracking-tight"
                        >
                            Smart Tech Repairs & Premium Accessories, Instantly
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-8 text-lg text-muted-foreground leading-relaxed"
                        >
                            Whether your laptop crashes on the morning of a big pitch, your phone
                            screen shatters, or you just need a reliable charger today—tech
                            emergencies can’t wait for shipping. We get you back online without the delay.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-lg text-muted-foreground leading-relaxed"
                        >
                            Either way, there is one door to walk through. <strong>TECH OUTLET LTD</strong> is a
                            fully licensed and insured electronics shop and repair centre on
                            Tottenham Court Road, in the heart of London's original tech district.
                            We are known first for expert laptop & mobile repair, done fast and done
                            properly. But step inside and you will find something more. A massive
                            range of premium tech accessories and electronics, all under the same roof.
                            If you live, work, or study anywhere between Soho and Bloomsbury, we are
                            probably a short walk away.
                        </motion.p>
                    </motion.div>
                </div>
            </section>



            {/* Our Story Section - Expanded */}
            <section className="py-24 bg-background relative">
                {/* container ke sath px-6 ya px-8 use karo taake edges cover hon */}
                <div className="container mx-auto px-6 lg:px-12">
                    {/* max-w-4xl ko max-w-6xl kar diya taake text fail jaye */}
                    <div className="max-w-6xl mx-auto">

                        {/* Heading */}
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center"
                        >
                            Our Story
                        </motion.h2>

                        {/* Content Container */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid gap-12"
                        >
                            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed border-l-4 border-red-600 pl-8">
                                Tottenham Court Road has been London's home of electronics for decades. We set up shop here for a simple reason. This street sits at the crossroads of some of the busiest neighbourhoods in the city, and the people in them never stop needing working tech.
                            </motion.p>

                            <motion.p variants={fadeUp} className="text-xl text-foreground font-medium leading-relaxed bg-primary/5 p-10 rounded-2xl">
                                Over the years, we noticed something. The shops that repair laptops & mobile phones rarely stock anything worth buying. The shops with great accessories cannot fix a thing. Customers were bouncing between both. So we built <strong>TECH OUTLET LTD</strong> to close that gap. Certified laptop repair and mobile repair on one side. An extensive, carefully chosen retail range on the other. One visit, and both jobs are done.
                            </motion.p>

                            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed border-l-4 border-red-600 pl-8">
                                Today, our regulars come from all directions. Creative agencies in Soho. Law firms and offices around Holborn. Shop and restaurant teams in Covent Garden. Students and academics from Bloomsbury. Media and tech companies across Fitzrovia. Some arrive with a broken machine. Some arrive with a shopping list. Plenty arrive with both.
                            </motion.p>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* What We Do Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-bold text-foreground"
                        >
                            What We Do
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Service 1 */}
                        <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Laptop Repair</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our signature service. Screens, keyboards, batteries, charging ports,
                                and the mysterious slowdowns that make you want to throw the thing out the window.
                                Our certified technicians diagnose the actual fault before quoting.
                            </p>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Mobile Repair</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Cracked screens are our bread and butter, but we also handle batteries,
                                cameras, charging issues, and water damage across all major brands.
                                Most common repairs are done the same day, many while you wait.
                            </p>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Tech Accessories</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Chargers, cables, adapters, laptop bags, hubs, and docking gear.
                                Headphones, speakers, mice, and more. If it connects to, protects,
                                powers, or upgrades your tech, we probably stock it.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Summary */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 p-8 md:p-12 rounded-3xl bg-red-600/5 border border-red-600/10 text-center"
                    >
                        <p className="text-lg text-foreground font-medium max-w-3xl mx-auto italic">
                            "Bring a laptop in for repair, and while our technicians work, you can pick up the gear you need.
                            Come in for an accessory, and there is a repair bench right there.
                            That is the whole point of a genuine one-stop tech hub."
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
                        >
                            Why Choose Us
                        </motion.h2>

                        <div className="grid gap-6">
                            {[
                                {
                                    title: "Fully Licensed & Insured",
                                    desc: "We are a registered business with certified technicians. Your device is protected from the moment it crosses our counter, giving you complete peace of mind."
                                },
                                {
                                    title: "Repair Authority & Real Stock",
                                    desc: "Stop bouncing between shops. We combine expert repairs and a massive retail range, so you get everything done in one visit."
                                },
                                {
                                    title: "Speed for Central London Life",
                                    desc: "We respect your time. Whether you have a dissertation due or a client deadline, we work to honest, fast turnarounds."
                                },
                                {
                                    title: "Expert Technicians",
                                    desc: "Years of experience with every make and generation. We specialize in the awkward jobs that other shops turn away."
                                },
                                {
                                    title: "Honest Advice",
                                    desc: "If a device isn't worth repairing, we'll tell you. We value long-term trust over a quick sale."
                                },
                                {
                                    title: "Easy Location",
                                    desc: "Located steps from Tottenham Court Road station. Drop off on your commute, browse our gear, and collect on your way home."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="p-6 rounded-xl border border-primary/10 bg-background hover:border-red-600/30 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* The Areas We Serve Section */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            The Areas We Serve
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-12">
                            Our doorstep is Tottenham Court Road, but our customers come from the neighbourhoods around it:
                        </motion.p>

                        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-left">
                            {[
                                { area: "Soho", desc: "Creative studios needing dead machines revived and cables yesterday." },
                                { area: "Holborn", desc: "Professionals needing discreet laptop repair and reliable business accessories." },
                                { area: "Covent Garden", desc: "Retail and hospitality teams running on phones, tablets, and chargers." },
                                { area: "Bloomsbury", desc: "Students and university staff needing affordable repair and study gear." },
                                { area: "Fitzrovia", desc: "Startups and agencies kitting out desks on a lunch break." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-lg bg-background border border-primary/10">
                                    <span className="font-bold text-red-600">{item.area}:</span>
                                    <span className="text-muted-foreground ml-2">{item.desc}</span>
                                </div>
                            ))}
                        </motion.div>
                        <motion.p variants={fadeUp} className="mt-10 text-lg font-medium text-foreground">
                            If you are anywhere in this patch of central London, you are within a 10-15 minute walk of our door.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            Our Mission
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Central London runs on technology. Every essay written in Bloomsbury, every deal closed in Holborn,
                            every design shipped from Soho depends on a device doing its job, and on the small accessories
                            that keep it going.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-xl font-semibold text-foreground mb-10">
                            Our mission is simple. Be the one tech destination our neighbours ever need.
                            Expert laptop & mobile repair when things break. A complete accessory hub for
                            everything in between. One shop, one visit, sorted.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex gap-4 justify-center">
                            <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                                Book a Repair
                            </button>
                            <button className="px-8 py-3 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}