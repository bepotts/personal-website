import Header from "@/components/layout/header/Header";
import MainSection from "@/components/layout/main/Main";
import FooterSection from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="app-container">
      <Header /> 
      <MainSection />
      <FooterSection />
    </div>
  );
}
