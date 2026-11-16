import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS } from "@/seo/site";

const Terms = () => (
  <LegalLayout
    title="Repair Terms & Conditions"
    intro={`These terms apply when you book a repair or buy accessories from ${BUSINESS.legalName} at ${BUSINESS.address.streetAddress}, London ${BUSINESS.address.postalCode}, in store or through this website. They do not affect your statutory rights under the Consumer Rights Act 2015.`}
  >
    <section>
      <h2>Diagnosis and quotes</h2>
      <p>
        Diagnosis is free. After testing your device we explain the fault and give you a quote. We only start work once
        you have agreed to the price. If we find a further fault during the repair, we contact you before doing any
        extra work.
      </p>
    </section>

    <section>
      <h2>Repair times</h2>
      <p>
        Most phone screen, battery and charging port repairs take 30 to 60 minutes, and most laptop repairs are
        completed the same day when parts are in stock. Repairs that need specialist parts or board-level work take
        longer, and we give you an estimated timeline before you commit.
      </p>
    </section>

    <section>
      <h2>Parts and warranty</h2>
      <ul>
        <li>We use genuine or OEM-equivalent parts for screens and batteries.</li>
        <li>Every repair carries a warranty covering the parts we fit and our workmanship. We confirm the warranty period when you collect your device.</li>
        <li>The warranty does not cover new accidental damage, liquid damage or faults unrelated to the original repair.</li>
      </ul>
    </section>

    <section>
      <h2>Your data</h2>
      <p>
        Please back up your device before handing it in. We take care to protect your data, but some repairs can
        require a reset. See our <Link to="/privacy-policy">Privacy Policy</Link> for how we handle personal data.
      </p>
    </section>

    <section>
      <h2>Collection</h2>
      <p>
        We let you know as soon as your repair is ready. Please collect your device during opening hours (
        {BUSINESS.openingHours.days}, {BUSINESS.openingHours.opens}–{BUSINESS.openingHours.closes}) and bring your
        booking details.
      </p>
    </section>

    <section>
      <h2>Accessories</h2>
      <p>
        Accessories are covered by the warranty period shown on the product listing, where one is stated. Faulty items
        are handled in line with your statutory rights.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call{" "}
        <a href={BUSINESS.telephoneHref}>{BUSINESS.telephoneDisplay}</a>.
      </p>
    </section>
  </LegalLayout>
);

export default Terms;
