import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import StrapiContext from "./context/StrapiContext";
import "./style/strapi.css";
export default function StrapiSubmenu() {
  return (
    <StrapiContext>
      <main className="main-strapi">
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </main>
    </StrapiContext>
  );
}
