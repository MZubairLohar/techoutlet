import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                We Fix, Any Device
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-foreground">
                Expert Mobile Phone <span className="text-red-600">&</span> IPad
                Repair Services in London{" "}
                <span className="text-red-600">&</span> UK
              </h2>
              <div className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mt-1">
                      At Tech Outlet Repairs, we specialise in fast and reliable
                      phone repair for all smartphone models, including iPhone
                      screen replacements (all models), battery replacements,
                      back glass repairs, software updates, and more. We also
                      provide expert repairs for MacBooks, HP and Dell laptops,
                      samsung tablet repairs, and all iPad models across
                      generations.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Explore our website for affordable, high-quality repairs,
                      sales of refurbished devices, and premium accessories.
                      Trust us for all your device needs, keeping your tech in
                      top shape in one convenient location!
                    </p>
                  </div>
                </motion.div>
              </div>
              <Link to="/book">
                <Button className="border-[2px] border-red-600 bg-transparent hover:bg-red-600 hover:text-white text-red-600 mt-8 rounded-full px-8 shadow-soft">
                  Book Now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/outlet-pic.jpeg"
                  alt="Repair process"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 mt-20 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/repair-process.jpg"
                  alt="Repair process"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl lg:text-3xl font-bold mt-3 text-foreground">
                Why Choose Tech <span className="text-red-600">-</span> Outlet
                Repairs <span className="text-red-600">?</span>
              </h2>
              <div className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Phones, tablets, or laptops giving you trouble? We'll
                      repair it. Send us your phone from anywhere in the UK or
                      visit us our shop, and we'll fix it fast. Book online for
                      free, whether you've got a broken iPad, laptop, or mobile
                      phone, our expert team fixes it all and post it back to
                      you on the same day. Free send-back delivery across
                      London, Essex, and the entire UK! We don't just repair –
                      we rescue your tech, providing lightning-fast service with
                      a smile. From screen repair, battery replacements to
                      software issues we've got you covered with guaranteed
                      quality and friendly support.
                    </p>
                    {/* <p className="text-sm text-muted-foreground mt-1">
                      Explore our website for affordable, high-quality repairs,
                      sales of refurbished devices, and premium accessories.
                      Trust us for all your device needs, keeping your tech in
                      top shape in one convenient location!
                    </p> */}
                  </div>
                </motion.div>
              </div>
              <Link to="/book">
                <Button className="border-[2px] border-red-600 bg-transparent hover:bg-red-600 hover:text-white text-red-600 mt-8 rounded-full px-8 shadow-soft">
                  Book Now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

         <section className="w-full mt-10 bg-[#F8FAFC] py-16">
      <div className="max-w-[92%] mx-auto px-4 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Image */}
          <div className="w-full h-full">
            <img
              src="/happy-customer.jpg" // replace with your image path
              alt="Store Interior"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <img
              src="hero-repair.jpg" // replace with your image path
              alt="Store Front"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

        </div>

      </div>
    </section>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;