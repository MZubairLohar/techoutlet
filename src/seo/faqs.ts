// FAQ content shared by the visible page sections and the FAQPage JSON-LD,
// so structured data always matches what visitors can read on the page.

export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "Do you offer laptop repair on Tottenham Court Road?",
    answer:
      "Yes. We repair Windows laptops, MacBooks, Chromebooks, gaming laptops and business devices at our shop at 260 Tottenham Court Road. Walk in any day between 10:00 and 19:00.",
  },
  {
    question: "Is it safe to give my laptop in for repair?",
    answer:
      "Yes, your data privacy is our top priority at Tech Outlet Ltd, and we only access what is necessary to complete the fix. For peace of mind, we simply recommend backing up your files before dropping it off if the machine still powers on.",
  },
  {
    question: "Is it worth fixing a broken laptop?",
    answer:
      "It is usually worth it if the repair costs less than half the price of a new machine, especially for laptops under four years old. A quick component swap or SSD upgrade at Tech Outlet Ltd can easily make your current device feel brand new again.",
  },
  {
    question: "How long does a laptop repair typically take?",
    answer:
      "At Tech Outlet Ltd, we specialise in same-day laptop repairs, meaning if you drop it off in the morning, it's usually ready by the afternoon. If a complex issue requires us to order a rare specialty part, we will let you know and provide an exact timeline upfront.",
  },
  {
    question: "How much does it normally cost to repair a laptop?",
    answer:
      "It depends entirely on the issue. Basic fixes like battery replacements or software cleanups usually run between £40 and £90. Major repairs, like fixing a cracked screen or motherboard issue, typically range from £150 to £300+. We always give you a clear, upfront quote before starting any work.",
  },
];

export const phoneFaqs: Faq[] = [
  {
    question: "Is there an affordable phone repair shop on Tottenham Court Road?",
    answer:
      "Yes. TECH OUTLET LTD is an affordable phone repair shop at 260 Tottenham Court Road, London. We price repairs fairly, with no hidden charges and an upfront quote on everything. We're not the cheapest on the market, but we're competitive and transparent.",
  },
  {
    question: "How quick is your phone repair service really?",
    answer:
      "Most repairs take 30 to 60 minutes. Screen replacements, battery swaps and charging port fixes are typically done while you wait. Some jobs take longer, like water damage recovery or logic board repairs. We'll tell you the timeline upfront before you commit.",
  },
  {
    question: "Do you repair Samsung and Google Pixel phones as well as iPhones?",
    answer:
      "Absolutely. At TECH OUTLET LTD we repair Samsung Galaxy phones, Google Pixel devices and pretty much any major brand. iPhone is common, but we're experienced across the board. Whatever phone you've got, we can usually help.",
  },
  {
    question: "Do you fix Chinese phone brands?",
    answer:
      "Yes. OnePlus, Xiaomi, Oppo and Huawei: we've worked on them all. We might need to source parts for less common models, but we don't turn people away based on brand.",
  },
  {
    question: "Are your replacement parts actually genuine?",
    answer:
      "For screens and batteries, we use genuine or OEM-equivalent components. That means proper quality and proper longevity. Not counterfeit and not knock-offs.",
  },
  {
    question: "Can you recover my data if my phone is water-damaged?",
    answer:
      "Possibly. Water damage recovery is complex. Sometimes we can dry out the device and it works fine. Sometimes the data survives but the phone doesn't. It depends on how quickly you bring it in and what actually got damaged, so bring it in immediately if it gets wet.",
  },
  {
    question: "What warranty do you offer on repairs?",
    answer:
      "We provide a warranty on every repair we complete. It covers the work and the parts we install. If something goes wrong within the warranty period, we fix it. The specific length depends on the repair, and we explain it when you pick up your phone.",
  },
  {
    question: "Do you handle software issues or just hardware?",
    answer:
      "We handle both. If your phone is slow or frozen, or needs software repairs, data recovery from corrupted files or extensive debugging, we'll look at it alongside any hardware fault.",
  },
];

export const laptopFaqs: Faq[] = [
  {
    question: "How much does a laptop screen replacement cost?",
    answer:
      "Most laptop screens cost £80–£200 fitted at our Tottenham Court Road shop. MacBook screens cost more because the display assembly is bonded. We confirm the exact price for your model before any work starts.",
  },
  {
    question: "How much is a laptop battery replacement?",
    answer:
      "A laptop battery replacement is typically £60–£150 depending on the make and model. A battery that drains in minutes, only works plugged in or has swollen should be replaced quickly.",
  },
  {
    question: "Can you repair my laptop on the same day?",
    answer:
      "Yes, in most cases. Screen, battery, keyboard and storage jobs are usually same-day when the part is in stock. If a specialist part has to be ordered, we tell you the timeline upfront.",
  },
  {
    question: "Do you repair MacBooks as well as Windows laptops?",
    answer:
      "Yes. We repair Apple MacBook Air and MacBook Pro models as well as HP, Dell, Lenovo, ASUS, Acer and other Windows laptops and Chromebooks.",
  },
  {
    question: "Is diagnosis free?",
    answer:
      "Yes. Diagnosis is free: we test the laptop, explain the fault in plain English and give you a quote. You decide whether to go ahead.",
  },
];

export const contactFaqs: Faq[] = [
  {
    question: "Do I need an appointment to visit TechOutlet?",
    answer:
      "No. Walk-ins are welcome every day from 10:00 to 19:00. If you prefer, you can book online first to reserve a time for your repair.",
  },
  {
    question: "Where is the TechOutlet shop?",
    answer:
      "TechOutlet is at 260 Tottenham Court Road, London W1T 7RF, in Fitzrovia, within easy reach of the Elizabeth line and Northern line and a short walk from Soho and Bloomsbury.",
  },
  {
    question: "Can I get a repair estimate over the phone?",
    answer:
      "Yes. Call 020 8062 0553 for a free estimate. We confirm the final price after a free diagnosis, before any work starts.",
  },
  {
    question: "Can I send my device by post?",
    answer:
      "Yes. You can send your phone, tablet or laptop from anywhere in the UK, and we post it back once it's repaired, with free return delivery.",
  },
];

export const bookFaqs: Faq[] = [
  {
    question: "Is booking a repair online free?",
    answer:
      "Yes. Booking online is free and there's no obligation: diagnosis is free and we only start work once you've approved the quote.",
  },
  {
    question: "What should I do before my repair appointment?",
    answer:
      "Back up your data if the device still powers on, and keep your booking confirmation email handy when you arrive at the shop.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "Most phone screen, battery and charging port repairs take 30 to 60 minutes. Most laptop repairs are finished the same day when the part is in stock.",
  },
];

export const serviceFaqs: Faq[] = [
  {
    question: "How long do repairs take at TechOutlet?",
    answer:
      "Most phone repairs take 30 to 60 minutes while you wait, and most laptop repairs are completed the same day. Complex jobs such as water damage or board-level repairs take longer, and we tell you the timeline upfront.",
  },
  {
    question: "Is there a charge for diagnosis?",
    answer: "No. Diagnosis is free. We test your device, explain the fault and give you a quote before any work starts.",
  },
  {
    question: "Are repairs covered by a warranty?",
    answer:
      "Yes. Every repair carries a warranty covering the parts we fit and our workmanship. We explain the warranty period when you collect your device.",
  },
];

export const brandFaqs: Faq[] = [
  {
    question: "Do you repair brands that aren't listed here?",
    answer:
      "Usually, yes. We might need to source parts for less common models, but we don't turn people away based on brand. Call us with your model and we'll tell you what's possible.",
  },
  {
    question: "Do you repair the latest iPhone models?",
    answer: "Yes. We fix all iPhones, from older models to the newest iPhone 17 Pro Max: screens, batteries, charging ports, cameras and water damage.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "For screens and batteries we use genuine or OEM-equivalent components, never counterfeit parts, and every repair comes with a warranty.",
  },
];

export const accessoryFaqs: Faq[] = [
  {
    question: "Can I buy accessories in the shop?",
    answer:
      "Yes. Our electronics store at 260 Tottenham Court Road stocks chargers, cables, adapters, earphones, cases and screen protectors, and is open every day from 10:00 to 19:00.",
  },
  {
    question: "Do accessories come with a warranty?",
    answer: "Where a warranty applies, the warranty period is shown on the product listing. Faulty items are handled in line with your statutory rights.",
  },
  {
    question: "Why won't my phone charge with a new cable?",
    answer:
      "If a new cable doesn't help, the fault is often a worn or dirty charging port rather than the cable. We can check it with a free diagnosis, and most charging port repairs are done while you wait.",
  },
];

export const aboutUsFaqs: Faq[] = [
  {
    question: "Which devices does TechOutlet repair?",
    answer:
      "We repair iPhones and all smartphone models, all iPad generations, Samsung tablets, MacBooks and HP and Dell laptops: screens, batteries, back glass, charging ports and software issues.",
  },
  {
    question: "Can I send my device to you from outside London?",
    answer:
      "Yes. Send your phone, tablet or laptop from anywhere in the UK and we'll repair it and post it back, with free return delivery across London, Essex and the rest of the UK.",
  },
  {
    question: "Do you sell refurbished devices?",
    answer: "Yes. Alongside repairs we sell refurbished devices and premium accessories at our shop on Tottenham Court Road.",
  },
];
