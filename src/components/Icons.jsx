import React, { Suspense, lazy } from "react";

const iconsMap = {
  facebook: () => import("react-icons/fa").then(m => ({ default: m.FaFacebook })),
  github: () => import("react-icons/fa").then(m => ({ default: m.FaGithub })),
  linkedin: () => import("react-icons/fa").then(m => ({ default: m.FaLinkedin })),
  phone: () => import("react-icons/fa").then(m => ({ default: m.FaPhone })),
  bars: () => import("react-icons/fa").then(m => ({ default: m.FaBars })),
  summary: () => import("react-icons/fa").then(m => ({ default: m.FaRegFileAlt })),
  location: () => import("react-icons/fa").then(m => ({ default: m.FaMapMarkerAlt })),
  openmail: () => import("react-icons/fa").then(m => ({ default: m.FaEnvelopeOpen })),

  mail: () => import("react-icons/fi").then(m => ({ default: m.FiMail })),
  projects: () => import("react-icons/fi").then(m => ({ default: m.FiCode })),
  link: () => import("react-icons/fi").then(m => ({ default: m.FiLink })),

  mongodb: () => import("react-icons/si").then(m => ({ default: m.SiMongodb })),
  express: () => import("react-icons/si").then(m => ({ default: m.SiExpress })),
  react: () => import("react-icons/si").then(m => ({ default: m.SiReact })),
  node: () => import("react-icons/si").then(m => ({ default: m.SiNodedotjs })),
  javascript: () => import("react-icons/si").then(m => ({ default: m.SiJavascript })),
  html: () => import("react-icons/si").then(m => ({ default: m.SiHtml5 })),
  css: () => import("react-icons/si").then(m => ({ default: m.SiCss3 })),
  php: () => import("react-icons/si").then(m => ({ default: m.SiPhp })),
  tailwind: () => import("react-icons/si").then(m => ({ default: m.SiTailwindcss })),
  bootstrap: () => import("react-icons/si").then(m => ({ default: m.SiBootstrap })),
  restful: () => import("react-icons/si").then(m => ({ default: m.SiPostman })),
  graphql: () => import("react-icons/si").then(m => ({ default: m.SiApollographql })),
};

export default function Icons({ name, className }) {
  const loader = iconsMap[name];
  if (!loader) return null;

  const LazyIcon = lazy(loader);

  return (
    <Suspense fallback={<span className={className}></span>}>
      <LazyIcon className={className} />
    </Suspense>
  );
}
