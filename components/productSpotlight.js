import Image from "next/image";
import Container from "./container";

const ProductSpotlight = () => {
  return (
    <Container id="propkeeper">
      <div className="relative px-8 py-20 bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 backdrop-blur-sm group">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-probos-green/10 rounded-full blur-3xl group-hover:bg-probos-green/20 transition-colors duration-700"></div>
        
        <div className="relative grid gap-10 lg:grid-cols-2 items-center">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-probos-green uppercase mb-4">
              Featured Product
            </h2>
            <h3 className="text-3xl font-bold text-white lg:text-5xl mb-6">
              Our Flagship: PropKeeper
            </h3>
            <p className="text-xl leading-relaxed text-gray-400 mb-8">
              PropKeeper is our core platform, designed to simplify the complexities of property investment. From financial oversight to document management, it&apos;s professional-grade software built for everyday people.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="w-6 h-6 text-probos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Automated Financial Oversight</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="w-6 h-6 text-probos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Smart Document Management</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="w-6 h-6 text-probos-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full Compliance Tracking</span>
              </li>
            </ul>

            <a
              href="https://propkeeper.app"
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-4 text-lg font-bold text-white bg-slate-800 rounded-3xl border border-slate-700 transition-all hover:bg-slate-700 hover:border-probos-green">
              Visit PropKeeper Website
            </a>
          </div>

          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              {/* Mockup Top Bar */}
              <div className="h-8 bg-slate-700/50 flex items-center px-4 space-x-2 border-bottom border-slate-600">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
              </div>
              
              {/* Mockup Body Placeholder */}
              <div className="p-6 bg-slate-900/80">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-20 bg-slate-800 rounded-xl animate-pulse"></div>
                  <div className="h-20 bg-slate-800 rounded-xl animate-pulse delay-75"></div>
                  <div className="h-20 bg-slate-800 rounded-xl animate-pulse delay-150"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-800 rounded-xl w-full animate-pulse"></div>
                  <div className="h-24 bg-slate-800 rounded-xl w-2/3 animate-pulse delay-100"></div>
                </div>
              </div>

              {/* Green Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-probos-green/5 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Float Element */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-probos-green rounded-2xl shadow-xl hidden md:block transform -rotate-3 group-hover:rotate-0 transition-transform">
              <div className="text-white font-bold">100% Secure</div>
              <div className="text-white/80 text-xs uppercase tracking-widest">Bank-Grade Tech</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductSpotlight;
