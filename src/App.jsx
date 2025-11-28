import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";

const componentsLazy = {
  Navbar: lazy(() => import("./components/Navbar")),
  Content: lazy(() => import("./components/Content")),
  Projects: lazy(() => import("./components/Projects")),
  WebApp: lazy(() => import("./components/WebApp")),
  Footer: lazy(() => import("./components/Footer")),
};

const navLinks = [
  { label: "Home", icon: "Home", targetId: "home" },
  { label: "Projects", icon: "Folder", targetId: "projects" },
  { label: "Skills", icon: "Code", targetId: "skills" },
  { label: "Experience", icon: "Briefcase", targetId: "experience" },
  { label: "About Hanz", icon: "User", targetId: "about" },
  { label: "Contact", icon: "Mail", targetId: "contact" },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    Projects: false,
    WebApp: false,
    Footer: false,
  });

  const refs = {
    Projects: useRef(),
    WebApp: useRef(),
    Footer: useRef(),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = Object.keys(refs).find(key => refs[key].current === entry.target);
            if (section) {
              setVisibleSections(prev => ({ ...prev, [section]: true }));
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    Object.values(refs).forEach(ref => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const loadingFallback = (
    <div className="h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#ff914d] rounded-full animate-spin" />
    </div>
  );

  const components = [
    { id: "Navbar", node: <componentsLazy.Navbar openSidebar={() => setIsSidebarOpen(true)} /> },
    { id: "Content", node: <componentsLazy.Content /> },
    { id: "Projects", node: <componentsLazy.Projects />, ref: refs.Projects },
    { id: "WebApp", node: <componentsLazy.WebApp />, ref: refs.WebApp },
    { id: "Footer", node: <componentsLazy.Footer />, ref: refs.Footer },
  ];

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} navLinks={navLinks} closeSidebar={() => setIsSidebarOpen(false)} />

      {components.map(({ id, node, ref }) => {
        if (ref && !visibleSections[id]) {
          return <div key={id} ref={ref} className="min-h-[80vh]" />;
        }
        return (
          <div key={id} ref={ref}>
            <Suspense fallback={loadingFallback}>{node}</Suspense>
          </div>
        );
      })}
    </>
  );
};

export default App;
