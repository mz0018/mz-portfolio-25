import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Content = lazy(() => import("./components/Content"));
const Projects = lazy(() => import("./components/Projects"));
const WebApp = lazy(() => import("./components/WebApp"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const loadingFallback = (
    <div className="h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#ff914d] rounded-full animate-spin"></div>
    </div>
  );

  const [showProjects, setShowProjects] = useState(false);
  const [showWebApp, setShowWebApp] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const projectsRef = useRef();
  const webAppRef = useRef();
  const footerRef = useRef();

  const components = [
  { id: "Navbar", node: <Navbar /> },
  { id: "Content", node: <Content /> },
  { id: "Projects", node: <Projects />, ref: projectsRef },
  { id: "WebApp", node: <WebApp />, ref: webAppRef },
  { id: "Footer", node: <Footer />, ref: footerRef }
];

  useEffect(() => {
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (entry.target === projectsRef.current) setShowProjects(true);
      if (entry.target === webAppRef.current)  setShowWebApp(true);
      if (entry.target === footerRef.current)  setShowFooter(true);
      obs.unobserve(entry.target);
    }
  }, { rootMargin: "100px" });

  [projectsRef, webAppRef, footerRef].forEach(ref => {
    if (ref.current) obs.observe(ref.current);
  });

  const checkInView = (ref, setter) => {
    if (!ref.current) return;
    const { top, bottom } = ref.current.getBoundingClientRect();
    
    if (top < window.innerHeight + 100 && bottom > -100) {
      setter(true);
      obs.unobserve(ref.current);
    }
  };
  checkInView(projectsRef, setShowProjects);
  checkInView(webAppRef,  setShowWebApp);
  checkInView(footerRef,  setShowFooter);

  return () => obs.disconnect();
}, []);


  return (
    <>
      {components.map((comp, i) => {
        if (comp.id === "Projects" && !showProjects) {
          return <div ref={projectsRef} key={i} className="min-h-[80vh]" />
        }

        if (comp.id === "WebApp" && !showWebApp) {
          return <div ref={webAppRef} key={i} className="min-h-[80vh]" />;
        }

        if (comp.id === "Footer" && !showFooter) {
          return <div ref={footerRef} key={i} className="min-h-[80vh]" />
        }

        return (
          <div ref={comp.ref} key={i}>
            <Suspense fallback={loadingFallback}>
              {comp.node}
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default App;
