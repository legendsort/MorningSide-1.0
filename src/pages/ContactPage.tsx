//import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-xl mx-auto w-full items-center overflow-hidden pt-32">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
