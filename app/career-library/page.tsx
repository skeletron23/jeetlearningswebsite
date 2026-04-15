import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CareerLibraryClient from "./CareerLibraryClient";

export const metadata = {
  title: "Career Library | Career Guidance",
  description: "Access guides, eBooks, videos, templates, and tools for career development",
};

export default function CareerLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareerLibraryClient />
      <Footer />
    </div>
  );
}
