import { FaBox, FaBuilding, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServiciosComponent() {
  return (
    <div className="servicios pt-32">
      <div className="title_servicios">
        <p className="text-3xl font-sansfont-family: BlinkMacSystemFont ">
          Nuestros Servicios
        </p>
      </div>

      <div className="servicios__cards flex flex-row pt-32 justify-between mx-24">
        <div className="servicio__1 ">
          <motion.div
            className="servicio__image h-16 w-16 bg-green-500 rounded-xl"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
          >
            <FaBox size={30} color={"white"} className="mx-auto h-auto pt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="servicio__title pt-8"
          >
            <p className="text-2xl ">Almacenamiento</p>
          </motion.div>
          <div className="servicio__description">
            <p>La descipcion del servicio</p>
          </div>
        </div>

        <div className="servicio__2 ">
          <motion.div
            className="servicio__image h-16 w-16 bg-blue-500 rounded-xl "
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
          >
            <FaBuilding
              size={30}
              color={"white"}
              className="mx-auto h-auto pt-4"
            />
          </motion.div>
          <div className="servicio__title pt-8">
            <p className="text-2xl">Oficinas</p>
          </div>

          <div className="servicio__description">
            <p>La descipcion del servicio</p>
          </div>
        </div>

        <div className="servicio__3 ">
          <motion.div
            className="servicio__image h-16 w-16 bg-red-500 rounded-xl"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
          >
            <FaTruck
              size={30}
              color={"white"}
              className="mx-auto h-auto pt-4"
            />
          </motion.div>
          <div className="servicio__title pt-8">
            <p className="text-2xl">Transporte</p>
          </div>

          <div className="servicio__description">
            <p>La descipcion del servicio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
