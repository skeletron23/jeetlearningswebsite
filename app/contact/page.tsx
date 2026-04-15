import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Career Guidance",
  description: "Get in touch with our career counselors and expert team",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactClient />
      <Footer />
    </div>
  );
}
