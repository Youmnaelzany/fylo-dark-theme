import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

export const navigation = [
  {
    id: 1,
    label: "Features",
  },
  {
    id: 2,
    label: "Team",
  },
  {
    id: 3,
    label: "Sign In",
  },
];
const Header = () => {
  return (
    <Wrapper className="flex items-center justify-between bg-[#1b2330] py-8">
      <div className="">
        <Image
          src={"/logo.svg"}
          alt=" All your files in one secure location, accessible anywhere."
          width={80}
          height={23.56}
          className="md:h-[46px] md:w-[138px]"
        />
      </div>
      <nav className="">
        <ul className="flex items-center justify-between gap-8 md:gap-12">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={"#"}
                className="font-raleway cursor-pointer text-[0.75rem] leading-[120%] font-normal tracking-normal text-white transition-none duration-500 ease-in-out hover:font-bold md:text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};
export default Header;
