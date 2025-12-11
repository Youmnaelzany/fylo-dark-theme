import Image from "next/image";
import Wrapper from "./Wrapper";

const testimonial = [
  {
    id: 1,
    name: "Satish Patel",
    jobTitle: "Founder & CEO, Huddle",
    quote:
      " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "/profile-1.jpg",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    jobTitle: "Founder & CEO, Huddle",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "profile-2.jpg",
  },
  {
    id: 3,
    name: "Iva Boyd",
    jobTitle: "Founder & CEO, Huddle",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    avatar: "profile-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-6 py-32 md:gap-10 lg:flex-row lg:justify-between">
      {testimonial.map((item) => (
        <div
          key={item.id}
          className="h-[160px] w-[280px] space-y-4 bg-[#202A3C] p-6 md:h-[200px] md:w-[480px] md:p-10 lg:h-[200px] lg:w-[360px] lg:p-8"
        >
          <p className="font-open-sans text-[0.625rem] leading-[180%] font-normal tracking-[0.5px] text-white md:text-sm md:leading-[150%] md:tracking-normal">
            {item.quote}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={item.avatar}
              alt={item.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <div className="">
              <h2 className="font-open-sans text-[0.625rem] leading-3 font-bold tracking-[0.5px] text-white">
                {item.name}
              </h2>
              <p className="font-open-sans text-[0.4375rem] leading-2.5 font-normal tracking-[0.5px]">
                {item.jobTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default Testimonials;
