import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
  AiFillInstagram,
  AiOutlineDribbble,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
        title="Linkedin"
      >
        <Link href="https://www.linkedin.com/in/robiul-hasan-45766228b/" target="_blank" rel="nofollow"> 
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        title="Github"
      >
        <Link href="https://github.com/RoBiul-Hasan-Jisan" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        title="Twitter"
      >
        <Link href="https://www.twitter.com" target="_blank" rel="nofollow">
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        title="Facebook"
      >
        <Link href="https://www.facebook.com/robiulhasa88/" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span>

      
    </div>
  );
};
