import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TitleConfig {
  offset: [string, string];
  scale: [number, number];
  opacity: [number, number];
  blur: [string, string, string];
  translate: [string, string];
  rotate: [string, string, string];
}

interface TitleConfigMap {
  [key: string]: TitleConfig;
}

const TITLE_CONFIG: TitleConfigMap = {
  "Compliance": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0, 1],
    blur: ["blur(15px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 350px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Trade Strategy": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    blur: ["blur(15px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "+": {
    offset: ["0 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.2, 1],
    blur: ["blur(10px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["180deg", "180deg", "0deg"],
  },
  "Recovery": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    blur: ["blur(15px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Customs Defense": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    blur: ["blur(15px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
  "Global Solutions": {
    offset: ["0.7 0", "1 1"],
    scale: [0.8, 1],
    opacity: [0.1, 1],
    blur: ["blur(15px)", "blur(0px)", "blur(0px)"],
    translate: ["0px 150px", "0px 0px"],
    rotate: ["0deg", "0deg", "0deg"],
  },
};

interface AboutTitleProps {
  name: string;
}

function AboutTitle({ name }: AboutTitleProps) {
  const config = TITLE_CONFIG[name] || TITLE_CONFIG["Compliance"];

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: config.offset as any,
  });

  const scale = useTransform(scrollYProgress, [0, 1], config.scale);
  const opacity = useTransform(scrollYProgress, [0, 1], config.opacity);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], config.blur);
  const translate = useTransform(scrollYProgress, [0, 1], config.translate);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], config.rotate);

  return (
    <motion.div
      ref={ref}
      className="about-title"
      style={{
        scale,
        filter: blur,
        opacity,
        translate,
        rotate,
      }}
    >
      {name}
    </motion.div>
  );
}

export default AboutTitle;
