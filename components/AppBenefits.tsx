import Image from "next/image";
import Wrapper from "./Wrapper";

const benefits = [
  {
    id: 1,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    icon: "icon-access-anywhere.svg",
    width: 83,
    height: 78,
  },
  {
    id: 2,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    icon: "/icon-security.svg",
    width: 70,
    height: 88,
  },
  {
    id: 3,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    icon: "/icon-collaboration.svg",
    width: 86,
    height: 71,
  },
  {
    id: 4,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: "/icon-any-file.svg",
    width: 91,
    height: 64,
  },
];

const AppBenefits = () => {
  return (
    <Wrapper
      as="section"
      aria-label="App Benefits"
      className="grid grid-cols-1 items-center justify-center gap-20 bg-[#181f2b] py-32 md:grid-cols-2 md:gap-x-20 md:gap-y-18 lg:gap-y-20"
    >
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="flex flex-col items-center justify-center gap-6 md:gap-4"
        >
          <Image
            src={benefit.icon}
            alt={benefit.title}
            width={benefit.width}
            height={benefit.height}
          />
          <div className="flex max-w-[326px] flex-col items-center justify-center text-center md:max-w-[290px] lg:max-w-[384px]">
            <h2 className="font-raleway text-xl leading-[120%] font-bold tracking-normal text-white">
              {benefit.title}
            </h2>
            <p className="font-open-sans text-sm leading-[150%] font-normal tracking-normal text-white">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default AppBenefits;
