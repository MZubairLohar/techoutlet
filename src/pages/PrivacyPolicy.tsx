import LegalLayout from "@/components/LegalLayout";
import { BUSINESS } from "@/seo/site";

const PrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    intro={`This policy explains what personal data ${BUSINESS.legalName} collects when you book a repair, contact us or buy accessories, why we use it, and the rights you have under UK data protection law (UK GDPR and the Data Protection Act 2018).`}
  >
    <section>
      <h2>Who we are</h2>
      <p>
        {BUSINESS.legalName} ("{BUSINESS.name}", "we") runs the repair shop and electronics store at{" "}
        {BUSINESS.address.streetAddress}, London {BUSINESS.address.postalCode}. We are the data controller for the
        personal data described here. You can reach us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or
        on <a href={BUSINESS.telephoneHref}>{BUSINESS.telephoneDisplay}</a>.
      </p>
    </section>

    <section>
      <h2>What we collect</h2>
      <ul>
        <li>Repair bookings: your name, email address, phone number, device brand and model, the fault and your chosen appointment date.</li>
        <li>Contact form messages: your name, email address, phone number and the content of your message.</li>
        <li>Accessory orders: the items you order and the contact and delivery details needed to complete the order.</li>
        <li>Blog reactions: the email address you enter when you like or dislike a post.</li>
        <li>Basic technical data your browser sends when you visit the website, such as IP address and browser type.</li>
      </ul>
    </section>

    <section>
      <h2>How we use it</h2>
      <p>
        We use your details to carry out the repair or order you asked for, to contact you about it, to provide warranty
        support and to answer your enquiries. The legal basis is the performance of a contract with you, or our
        legitimate interest in running and improving our service. We do not sell your personal data.
      </p>
    </section>

    <section>
      <h2>Data on your device</h2>
      <p>
        We only access data on a device you hand in where that is necessary to diagnose, repair or test it. We recommend
        backing up your files before any repair. Data recovery work is only carried out when you ask for it.
      </p>
    </section>

    <section>
      <h2>Who we share it with</h2>
      <p>
        We use trusted service providers to host this website and our booking system and to send emails. They process
        data only on our instructions. We may also disclose data where the law requires it.
      </p>
    </section>

    <section>
      <h2>How long we keep it</h2>
      <p>
        We keep booking and repair records for as long as needed to provide the repair, honour the warranty and meet our
        legal and accounting obligations, then delete them.
      </p>
    </section>

    <section>
      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your personal data, to restrict or object to how we use it, and to
        receive a copy of it. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> to make a request. If you
        are unhappy with how we handle your data, you can complain to the Information Commissioner's Office at{" "}
        <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>.
      </p>
    </section>
  </LegalLayout>
);

export default PrivacyPolicy;
