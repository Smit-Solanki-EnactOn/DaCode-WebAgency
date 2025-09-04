// import styles from "./page.module.css";
import Header from "@/components/Generic/Header/Header";
import HeroSection from "@/components/Generic/Section/HeroSection";
import ServiceSection from "@/components/Generic/Section/ServiceSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServiceSection />
    </main>
  );
}
