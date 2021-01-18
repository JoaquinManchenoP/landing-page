import { FaBox, FaBuilding, FaTruck } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ServiciosComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, 900);
    }
  });
  return (
    <div className="servicios flex  xs:flex-col justify-center items-center pt-16 ">
      <div className="title_servicios ">
        <p className="text-3xl font-sansfont-family: BlinkMacSystemFont ">
          Nuestros Servicios
        </p>
      </div>

      <div className="servicios__cards pt-16 sm:flex sm:justify-between">
        <div className="servicio__1 mx-12">
          <motion.div
            className="servicio__image h-16 w-16 bg-green-500 rounded-xl  "
            ref={ref}
            initial={"hidden"}
            animate={controls}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <FaBox size={30} color={"white"} className="mx-auto h-auto pt-4" />
          </motion.div>

          <motion.div className="servicio__title pt-8">
            <p className="text-2xl ">Almacenamiento</p>
          </motion.div>
          <div className="servicio__description xs:pb-16">
            <p>La descipcion del servicio</p>
          </div>
        </div>

        <div className="servicio__2 mx-12 ">
          <motion.div
            className="servicio__image h-16 w-16 bg-blue-500 rounded-xl "
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            initial={"hidden"}
            animate={controls}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
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

          <div className="servicio__description xs:pb-16">
            <p>La descipcion del servicio</p>
          </div>
        </div>

        <div className="servicio__3 mx-12 ">
          <motion.div
            className="servicio__image h-16 w-16 bg-red-500 rounded-xl"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            initial={"hidden"}
            animate={controls}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <FaTruck
              size={30}
              color={"white"}
              className="mx-auto h-auto pt-4"
            />
          </motion.div>
          <div className="servicio__title pt-8 ">
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
