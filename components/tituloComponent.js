import Image from "next/image";
import { motion } from "framer-motion";

export default function TituloComponent() {
  return (
    <div className="titulo__secotion ">
      <div className="catchphrase ml-24">
        <motion.p
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 1.2,
            stiffness: 40,
          }}
          className="font-sans	font-family: BlinkMacSystemFont text-3xl font-extralight"
        >
          Necesitas Almacenamiento ?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cartoon__image"
      >
        <Image src="/images/cartoon.jpeg" height={500} width={500} />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2, type: "spring" }}
        className="propaganda ml-20"
      >
        <p className="font-sans	font-family: BlinkMacSystemFont text-2xl font-extralight">
          La mejor solucion para almacenamiento industrial
        </p>
        <p className="font-sans	font-family: BlinkMacSystemFont text-2xl font-extralight">
          y espacio de oficina
        </p>
      </motion.div>
    </div>
  );
}
