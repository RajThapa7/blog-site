import Image from "next/image";
import logo from "public/rajlogo.png";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
      <motion.div
        animate={{ rotate: [0, -360, -360, 0], scale: [1, 1.5, 1.5, 1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Image src={logo} alt="logo" width={150} height={150} />
      </motion.div>
    </div>
  );
}
