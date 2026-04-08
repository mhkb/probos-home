import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Reliable Tools for the <br/>Modern Property Owner.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-400 lg:text-xl xl:text-2xl">
              Probos Technology is an Australian software studio dedicated to creating straightforward, dependable solutions for the property sector. We build the tools that help you stay organized, compliant, and in control.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://propkeeper.app"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-probos-green rounded-3xl transition-all hover:brightness-110 shadow-lg shadow-emerald-500/20">
                Discover PropKeeper
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-probos-green to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image
                src={heroImg}
                width="616"
                height="617"
                className={"object-cover rounded-3xl"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;