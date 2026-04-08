import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ProductSpotlight from "../components/productSpotlight";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Probos Technology | Reliable Tools for the Modern Property Owner</title>
        <meta
          name="description"
          content="Probos Technology is an Australian software studio dedicated to creating straightforward, dependable solutions for the property sector."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
        <Navbar />
        
        <main>
          <Hero />
          
          <section id="propkeeper" className="py-24 relative overflow-hidden">
            <ProductSpotlight />
          </section>
          
          <section id="studio" className="py-32 bg-slate-900/40">
            <div className="container mx-auto px-8 text-center max-w-4xl">
              <h2 className="text-4xl font-bold text-white mb-8">The Probos Technology Studio</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                We are a small, focused team of engineers and designers based in Australia. 
                Currently, we are fully committed to our internal suite of property management tools, 
                ensuring they meet the highest standards of reliability and ease-of-use for our community.
              </p>
              <div className="mt-12 flex justify-center space-x-4">
                <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 w-48">
                  <span className="text-probos-green font-bold text-3xl mb-1">100%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Australian Owned</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 w-48">
                  <span className="text-probos-green font-bold text-3xl mb-1">Focused</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Product Studio</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;