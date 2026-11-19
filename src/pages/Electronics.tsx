import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Product = {
  number: number;
  name: string;
  description: string;
  imageFile?: string;
  alt?: string;
  imageTitle?: string;
  price?: string;
  oldPrice?: string;
};

const categories: { name: string; products: Product[] }[] = [
  {
    name: "Camera Accessories",
    products: [
      {
        number: 1,
        name: "Compact Digital Camera",
        imageFile: "/48mp-2k-compact-digital-camera-tech-outlet-ltd-london.webp",
        alt: "Compact 48MP 2.7K digital camera with 16X zoom in stock at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "48MP 2.7K Ultra-HD Compact Digital Camera - TECH OUTLET LTD",
        description:
          "This 48MP compact digital camera features 2.7K video recording, 16X digital zoom, and anti-shake stabilization for crisp everyday photography. Ideal for vlogging and travel, it is available for in-store pickup at TECH OUTLET LTD on Tottenham Court Road, London.",
      },
      {
        number: 2,
        name: "SanDisk Extreme PRO 512GB microSDXC",
        imageFile: "/sandisk-extreme-pro-512gb-microsd-card.png",
        alt: "SanDisk Extreme PRO 512GB microSDXC card with adapter available at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "SanDisk Extreme PRO 512GB microSDXC Memory Card - TECH OUTLET LTD",
        description:
          "The SanDisk Extreme PRO 512GB microSD card delivers ultra-fast read speeds up to 200MB/s for smooth 4K UHD video recording and quick app performance. Complete with an included SD adapter, this high-performance storage is available for instant in-store pickup at TECH OUTLET LTD on Tottenham Court Road, London.",
      },
      {
        number: 3,
        name: "SanDisk Extreme PRO 256GB SDXC",
        imageFile: "/sandisk-extreme-pro-256gb-sdxc-card.png",
        alt: "SanDisk Extreme PRO 256GB SDXC memory card in stock at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "SanDisk Extreme PRO 256GB SDXC Memory Card - TECH OUTLET LTD",
        description:
          "The SanDisk Extreme PRO 256GB SDXC card offers speeds up to 200MB/s for smooth 4K UHD video capture and rapid continuous shooting. Find top-rated camera accessories Tottenham Court Road in stock today at TECH OUTLET LTD.",
      },
      {
        number: 4,
        name: "SanDisk Extreme PRO 256GB microSDXC",
        imageFile: "/sandisk-extreme-pro-256gb-microsdxc-card.png",
        alt: "SanDisk Extreme PRO 256GB microSDXC card with adapter in stock at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "SanDisk Extreme PRO 256GB microSDXC Memory Card - TECH OUTLET LTD",
        description:
          "The SanDisk Extreme PRO 256GB microSD card delivers high-speed performance with read rates up to 200MB/s and 140MB/s write speeds for seamless 4K UHD video capture. Complete with an included SD adapter, it is available for immediate local pickup at TECH OUTLET LTD on Tottenham Court Road, London.",
      },
      {
        number: 5,
        name: "SanDisk Ultra 128GB SDXC",
        imageFile: "/sandisk-ultra-128gb-sdxc-card.png",
        alt: "SanDisk Ultra 128GB SDXC memory card 140MB/s available at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "SanDisk Ultra 128GB SDXC Memory Card - TECH OUTLET LTD",
        description:
          "The SanDisk Ultra 128GB SD card provides read speeds up to 140MB/s, making it ideal for quick photo capture and smooth Full HD video recording. You can pick up the SanDisk Ultra 128GB SD card directly in-store at TECH OUTLET LTD on Tottenham Court Road, London.",
      },
      {
        number: 6,
        name: "SanDisk Extreme PRO 64GB UHS-II SDXC",
        imageFile: "/sandisk-extreme-pro-64gb-uhs-ii-sdxc-card.png",
        alt: "SanDisk Extreme PRO 64GB UHS-II SDXC memory card 300MB/s available at TECH OUTLET LTD Tottenham Court Road London",
        imageTitle: "SanDisk Extreme PRO 64GB UHS-II SDXC Card - TECH OUTLET LTD",
        description:
          "The SanDisk Extreme PRO 64GB UHS-II SDXC card delivers transfer speeds up to 300MB/s with V90 ratings for seamless 4K and 8K video capture. For professional high-speed media storage SD card Tottenham Court Road options, pick up the SanDisk Extreme PRO 64GB SDXC card directly in-store at TECH OUTLET LTD in London.",
      },
    ],
  },
  {
    name: "Computer Accessories",
    products: [
      {
        number: 7,
        name: "MacBook Air Core i5",
        imageFile: "/macbook-air-core-i5-tottenham-court-road-store.png",
        alt: "A pre-owned MacBook Air Core i5 displayed on a glass counter inside our Tottenham Court Road electronics shop",
        description:
          "Evaluating the 1.5GHz Intel Core i5 MacBook Air with 8GB RAM available for immediate in-store demonstration at TECH OUTLET LTD Tottenham Court Road.",
        price: "£349.99",
      },
      {
        number: 8,
        name: "Lenovo Chromebook",
        imageFile: "/lenovo-chromebook-tottenham-court-road-london.png",
        alt: "Lenovo Chromebook running Chrome OS displayed at TECH OUTLET LTD on Tottenham Court Road London",
        description:
          "This Lenovo Chromebook running Chrome OS features a ruggedized frame designed for daily productivity and learning. Available at TECH OUTLET LTD on Tottenham Court Road, London, it offers an affordable, reliable laptop solution for students and professionals.",
        price: "£169.99",
      },
      {
        number: 9,
        name: "HP EliteBook 830 G7",
        imageFile: "/hp-elitebook-830-g7-i5-laptop-tottenham-court-road.png",
        alt: "HP EliteBook 830 G7 Intel Core i5 laptop available at TECH OUTLET LTD on Tottenham Court Road London",
        description:
          "The HP EliteBook 830 G7 features a 10th Gen Intel Core i5 processor, 8GB RAM, and 256GB storage running Windows 10. Available at TECH OUTLET LTD on Tottenham Court Road in London, it offers enterprise-grade performance and portability for professionals.",
        price: "£349.99",
      },
      {
        number: 10,
        name: "Logitech K120 Keyboard",
        imageFile: "/logitech-k120-keyboard-tottenham-court-road-london.png",
        alt: "Logitech K120 USB wired keyboard in box on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Logitech K120 Keyboard - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Featuring a durable spill-resistant build, deep-profile keys rated for 10 million keystrokes, and plug-and-play USB connectivity, this full-size Logitech K120 keyboard includes a dedicated 10-key numeric pad and adjustable tilt legs. If you are looking for dependable keyboards Tottenham Court Road solutions or need a Logitech K120 keyboard Tottenham Court Road supplier, visit TECH OUTLET LTD in London for affordable desk accessories.",
      },
      {
        number: 11,
        name: "Logitech MK220 Wireless Combo",
        imageFile: "/logitech-mk220-wireless-keyboard-mouse-combo-tottenham-court-road-london.png",
        alt: "Logitech MK220 wireless compact keyboard and optical mouse set at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Logitech MK220 Wireless Combo - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Designed to save desk space, this Logitech MK220 wireless combo features a compact full-size keyboard with a number pad alongside an ambidextrous optical mouse powered by a secure 2.4 GHz USB receiver. Visit TECH OUTLET LTD in London for a long-battery-life, whisper-quiet typing setup.",
      },
      {
        number: 12,
        name: "ZAGG Pro Keyboard 12",
        imageFile: "/zagg-pro-keyboard-12-tottenham-court-road-london.png",
        alt: "ZAGG Pro Keyboard 12 wireless desk keyboard on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "ZAGG Pro Keyboard 12 - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Engineered for multi-device pairing via Bluetooth, this slim ZAGG Pro Keyboard 12 features tactile quiet-chiclet keys, integrated shortcut functions, and long-lasting rechargeable battery performance. Stop by TECH OUTLET LTD in London to pick up a ZAGG Pro Keyboard 12 Tottenham Court Road setup for a smooth, ergonomic desk upgrade.",
      },
      {
        number: 13,
        name: "Rapoo 9300M Wireless Combo",
        imageFile: "/rapoo-9300m-wireless-keyboard-mouse-combo-tottenham-court-road-london.png",
        alt: "Rapoo 9300M ultra-slim wireless keyboard and optical mouse set at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Rapoo 9300M Wireless Combo - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Featuring an ultra-slim 4.9mm anodized aluminum body, chiclet keycaps, and multi-mode connectivity switching seamlessly between Bluetooth 3.0, 4.0, and 2.4 GHz USB, this Rapoo 9300M wireless desktop set pairs high portability with precise optical tracking. Visit TECH OUTLET LTD on Tottenham Court Road in London to upgrade your workspace with a sleek, multi-device desk setup.",
      },
    ],
  },
  {
    name: "Headphones",
    products: [
      {
        number: 14,
        name: "JBL 510 BT (Blue)",
        imageFile: "/jbl-510-bt-headphones-tottenham-court-road-london.png",
        alt: "Blue JBL 510 BT headphones available in store at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "JBL 510 BT Headphones - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Engineered with JBL Pure Bass sound, multi-point connections, and up to 40 hours of battery life, these blue wireless on-ear headphones deliver lightweight everyday comfort. Stop by TECH OUTLET LTD to pick up your JBL 510 BT headphones for fast USB-C charging and clear hands-free calls in London.",
      },
      {
        number: 15,
        name: "JBL 720 BT (Black)",
        imageFile: "/jbl-720-bt-headphones-tottenham-court-road-london.png",
        alt: "Black JBL 720 BT wireless headphones on display at TECH OUTLET on Tottenham Court Road London",
        imageTitle: "JBL 720 BT Headphones - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Boasting up to 76 hours of battery life and signature JBL Pure Bass sound, these lightweight over-ear wireless headphones offer customizable EQ settings and multi-point Bluetooth 5.3 connectivity. If you are searching for premium JBL headphones Tottenham Court Road, visit TECH OUTLET LTD in London for all-day comfort and hands-free calls.",
      },
      {
        number: 16,
        name: "JBL 770 NC",
        imageFile: "/jbl-770-nc-noise-cancelling-headphones-tottenham-court-road-london.png",
        alt: "Black JBL 770 NC noise cancelling headphones on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "JBL 770 NC Noise Cancelling Headphones - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Featuring Adaptive Noise Cancelling with Smart Ambient technology, these JBL Tune 770NC wireless over-ear headphones deliver up to 70 hours of battery life alongside Bluetooth 5.3 multi-point connectivity. Visit TECH OUTLET LTD in London to try the JBL 770 NC for immersive sound control and crystal-clear calls on the go.",
      },
      {
        number: 17,
        name: "JBL 760 NC",
        imageFile: "/jbl-760-nc-headphones-tottenham-court-road-london.png",
        alt: "Black JBL 760 NC active noise cancelling headphones on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "JBL 760 NC Headphones - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Designed with Active Noise Cancelling and JBL Pure Bass sound, these lightweight over-ear headphones deliver up to 35 hours of wireless playtime with ANC enabled. Drop by TECH OUTLET LTD in London to pick up your JBL 760 NC Tottenham Court Road pair for seamless hands-free calls and quick USB-C charging.",
      },
    ],
  },
  {
    name: "Tripods and Stands",
    products: [
      {
        number: 18,
        name: "Camera Monopod Tripod",
        imageFile: "/camera-monopod-tripod-tottenham-court-road-london.png",
        alt: "Adjustable camera monopod tripod with fluid head on sale at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Camera Monopod Tripod - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Designed for smooth video panning and quick height adjustments, this heavy-duty monopod tripod features a fluid head with a quick-release plate, a control arm, and a foldable three-foot stabilizer base.",
        oldPrice: "£149.99",
        price: "£109.99",
      },
      {
        number: 19,
        name: "Truemi Bluetooth Selfie Stick Tripod",
        imageFile: "/truemi-bluetooth-selfie-stick-tripod-tottenham-court-road-london.png",
        alt: "Truemi Bluetooth selfie stick tripod with phone mount on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Truemi Selfie Stick Tripod - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Featuring an extendable lightweight rod, integrated fold-out tripod legs, and a detachable wireless shutter remote, this Truemi 2-in-1 accessory offers stable hands-free video recording for smartphones. Visit TECH OUTLET LTD in London for mobile content creation and travel vlogging.",
      },
      {
        number: 20,
        name: "Green Lion Phone Tripod Stand",
        imageFile: "/green-lion-phone-tripod-stand-tottenham-court-road-london.png",
        alt: "Green Lion Bluetooth phone tripod stand on display at TECH OUTLET LTD on Tottenham Court Road London",
        imageTitle: "Green Lion Phone Tripod Stand - TECH OUTLET LTD Tottenham Court Road",
        description:
          "Featuring multi-section telescopic height adjustment, a 360-degree rotating smartphone clamp, and a detachable Bluetooth remote shutter, this Green Lion floor-standing tripod delivers rock-solid stability for live streaming and hands-free recording. Visit TECH OUTLET LTD in London for professional mobile video setup and crisp group photography.",
      },
    ],
  },
];

export default function Electronics() {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Dialog
      open={previewImage !== null}
      onOpenChange={(open) => {
        if (!open) setPreviewImage(null);
      }}
    >
      <div className="min-h-screen overflow-hidden bg-background">
        <Navbar />

        <main className="pt-20">
          <section className="relative pb-10 pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
            <div className="container relative mx-auto px-4 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">
                    Certified &amp; Trusted electronic shop tottenham court road london
                  </span>
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Tired of overpaying at Tottenham Court Road electronic shops?
                  TECH OUTLET LTD delivers honest prices on quality laptops, mobiles, accessories
                  &amp; quick fixes.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 pb-20 lg:px-8">
            {categories.map((category) => (
              <div key={category.name} className="mb-16">
                <div className="mb-6 border-b border-border pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                    TECH OUTLET LTD
                  </span>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground md:text-3xl">
                    {category.name}
                  </h2>
                </div>

                <div className="divide-y divide-border">
                  {category.products.map((product) => (
                    <article
                      key={product.number}
                      className="grid gap-5 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white">
                        {product.imageFile ? (
                          <button
                            type="button"
                            aria-label={`Enlarge ${product.name} image`}
                            onClick={() => {
                              if (product.imageFile) {
                                setPreviewImage({
                                  src: product.imageFile,
                                  alt: product.alt ?? product.name,
                                });
                              }
                            }}
                            className="block h-full w-full cursor-zoom-in"
                          >
                            <img
                              src={product.imageFile}
                              alt={product.alt}
                              title={product.imageTitle}
                              className="h-full w-full object-contain"
                            />
                          </button>
                        ) : (
                          <div className="flex h-full items-center justify-center px-6 text-center">
                            <div>
                              <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-dashed border-border" />
                              <p className="text-xs font-medium text-muted-foreground">
                                Product image
                              </p>
                              {product.imageTitle && (
                                <p className="mt-1 text-[11px] leading-snug text-muted-foreground/70">
                                  {product.imageTitle}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-xl font-bold text-foreground md:text-2xl">
                            <span className="mr-2 text-red-600">{product.number}.</span>
                            {product.name}
                          </h3>
                          {(product.price || product.oldPrice) && (
                            <div className="flex items-baseline gap-2">
                              {product.oldPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  {product.oldPrice}
                                </span>
                              )}
                              {product.price && (
                                <span className="text-xl font-bold text-red-600">
                                  {product.price}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground md:text-[15px]">
                          {product.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </main>

        <Footer />
        <DialogContent className="max-h-[95vh] w-[95vw] max-w-6xl gap-0 border-0 bg-transparent p-0 shadow-none [&>button]:right-0 [&>button]:top-0 [&>button]:text-white">
          <DialogTitle className="sr-only">Enlarged product image</DialogTitle>
          {previewImage && (
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="mx-auto max-h-[90vh] max-w-full object-contain"
            />
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
}
