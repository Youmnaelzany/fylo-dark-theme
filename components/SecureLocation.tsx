import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const SecureLocation = () => {
  return (
    <Wrapper
      className="relative flex flex-col items-center justify-center gap-18 bg-[#1b2330] pt-12 text-white md:gap-16 md:pt-16 lg:gap-14"
      as="section"
      aria-label=" All your files in one secure location, accessible anywhere."
    >
      <div className="z-50">
        <Image
          src={"/illustration-intro.png"}
          alt=" All your files in one secure location, accessible anywhere."
          width={720}
          height={534}
        />
      </div>
      <div className="z-50 flex flex-col items-center justify-center gap-6 md:w-[660px] md:gap-12 lg:w-[734px] lg:gap-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:gap-12 lg:gap-10">
          <h1 className="font-raleway text-xl leading-[120%] font-bold tracking-normal md:text-[2.5rem]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="font-open-sans text-sm leading-[150%] font-normal tracking-normal">
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </p>
        </div>
        <Button className="font-raleway h-[48px] w-[240px] cursor-pointer rounded-full bg-linear-to-r from-[#63E1D9] to-[#34A0CD] text-sm leading-[120%] font-bold tracking-normal text-white transition-opacity duration-300 hover:opacity-80">
          Get Started
        </Button>
      </div>
      <div className="absolute right-0 -bottom-1 left-0 z-0 w-full">
        <picture>
          {/* Desktop Image */}
          <source
            media="(min-width: 768px)"
            srcSet="/bg-curvy-desktop.svg"
          />

          {/* Mobile / Tablet Image */}
          <Image
            src="/bg-curvy-mobile.svg"
            alt="Background curve"
            width={768}
            height={494}
            priority
            className="h-[365px] w-[768px] md:h-[494px] md:w-[1440px]"
          />
        </picture>
      </div>
    </Wrapper>
  );
};
export default SecureLocation;
