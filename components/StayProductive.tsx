import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const StayProductive = () => {
  return (
    <Wrapper className="flex flex-col gap-12 md:gap-18 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
      <div className="">
        <Image
          src={"/illustration-stay-productive.png"}
          alt="Stay productive, wherever you are"
          width={615}
          height={465}
        />
      </div>
      <div className="flex flex-col gap-4 text-white md:gap-6 lg:max-w-[516px] lg:gap-8">
        <h2 className="font-raleway text-base leading-[120%] font-bold tracking-normal md:text-[2.5rem] lg:max-w-[498px]">
          Stay productive, wherever you are
        </h2>
        <div className="font-open-sans flex flex-col gap-4 text-sm leading-[150%] font-normal tracking-normal">
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
          className="flex cursor-pointer items-center gap-2 text-sm leading-[150%] font-normal tracking-normal text-[#62E0D9] underline"
        >
          See how Fylo works
          <Image
            src={"/icon-arrow.svg"}
            alt="icon arrow"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </Wrapper>
  );
};

export default StayProductive;
