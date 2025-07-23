import { lazy, Suspense } from "react";
import { Link } from "react-scroll";

const Icons = lazy(() => import("./Icons"));

const accountLinks = [
  { icon: "github", url: "https://github.com/" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/martinez-hanz-menzi-64bba7306/" },
  { icon: "facebook", url: "https://web.facebook.com/HnzMnzMrtnz" },
];

const usefulLinks = [
  { name: "Home", targetId: "home" },
  { name: "Projects", targetId: "projects" },
  { name: "Professional Summary", targetId: "summary" }
];

const contactInfo = [
  ["Address", "location", "Aritao Nueva Vizcaya", "text-red-500 hover:text-red-700"],
  ["Contact", "phone", "+63938 736 4065", "text-green-500 rotate-90 hover:text-green-700"],
  ["Mail", "openmail", "martinezhanzmenzi@gmail.com", "text-blue-500 hover:text-blue-700"],
];

export default function Footer() {
  return (
    <div id="contact" className="relative bg-[#212224] text-white overflow-hidden">
      <img
        loading="lazy"
        src="/layered-waves-haikei.svg"
        alt="Wave SVG"
        className="absolute bottom-0 left-0 w-full z-0"
      />

      <Suspense fallback={null}>
        <div className="relative z-10 p-5 mb-[250px] space-y-6">
          <div className="grid sm:grid-cols-3 gap-6 border-b border-gray-400 pb-8">
            {contactInfo.map(([label, icon, content, color], i) => (
              <div key={i} className="flex items-start gap-2">
                <Icons name={icon} className={`${color} text-xl`} />
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold">{label}</span>
                  <span className="text-xs text-gray-400 line-clamp-2">{content}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <h1 className="text-5xl font-semibold">
                <span className="text-gray-600">改</span>
                <span className="text-[#ff914d]">善</span>
              </h1>
              <p className="text-xs text-gray-400 line-clamp-2 mt-2">
                Always learning. Always building. Always improving.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {accountLinks.map(({ icon, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#ff914d] transition-all">
                    <Icons name={icon} className="w-9 h-9" />
                  </a>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 relative inline-block font-semibold after:content-[''] after:block after:h-[2px] after:w-1/2 after:bg-[#ff914d] after:mt-1">
                <div className="flex items-center gap-1">
                  <Icons name="link" />
                  Useful Links
                </div>
              </h2>

              <ul className="space-y-1 text-xs">
                {usefulLinks.map(({ name, targetId}, i) => (
                  <Link key={i} to={targetId} className="text-gray-400 hover:text-[#ff914d] transition-all line-clamp-1 cursor-pointer">
                    {name}
                  </Link>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 relative inline-block font-semibold after:content-[''] after:block after:h-[2px] after:w-1/2 after:bg-[#ff914d] after:mt-1">
                Subscribe
              </h2>
              <p className="mb-2 text-xs text-gray-400">Get updates and news in your inbox.</p>
              <input type="email" placeholder="Email Address" className="w-full rounded bg-gray-800 px-3 py-2 placeholder-gray-400 text-sm cursor-not-allowed" disabled />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
