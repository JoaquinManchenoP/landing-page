import { motion } from "framer-motion";
import TituloComponent from "../components/tituloComponent";
import ServiciosComponent from "../components/serviciosComponent";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl min-h-screen pt-8 ">
      <TituloComponent />
      <ServiciosComponent />
    </div>
  );
}
