import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const StayProductive = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-12 bg-[#181f2b] md:gap-18 lg:flex-row lg:justify-between lg:gap-14">
      <div className="">
        <Image
          src={"/illustration-stay-productive.png"}
          alt="Stay productive, wherever you are"
          width={615}
          height={465}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-center text-white md:gap-6 lg:items-start lg:gap-8 lg:text-left">
        <h2 className="font-raleway text-base leading-[120%] font-bold tracking-normal md:text-5xl">
          Stay productive, wherever you are
        </h2>
        <div className="font-open-sans flex flex-col items-center justify-center gap-4 text-center text-sm leading-[150%] font-normal tracking-normal lg:items-start lg:text-left">
          <p className="">
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs.
          </p>
          <p className="">
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
        </div>
        <Link
          href="#"
          className="cursor-pointer text-sm leading-[150%] font-normal tracking-normal text-[#62E0D9] underline"
        >
          See how Fylo works
        </Link>
      </div>
    </Wrapper>
  );
};
export default StayProductive;
