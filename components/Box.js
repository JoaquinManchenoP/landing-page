import { motion, useAnimation } from "framer-motion";
import { FaBox } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Box() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        style={{
          padding: 40,
          background: "white",
          display: "inline-block",
          marginTop: 500,
          marginLeft: 40,
          marginBottom: 500,
          borderRadius: 5,
        }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 300 },
        }}
      />
    </div>
  );
}
