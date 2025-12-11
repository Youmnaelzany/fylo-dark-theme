import AppBenefits from "@/components/AppBenefits";
import SecureLocation from "@/components/SecureLocation";
import StayProductive from "@/components/StayProductive";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <SecureLocation />
      <AppBenefits />
      <StayProductive />
      <Testimonials />
    </main>
  );
}
