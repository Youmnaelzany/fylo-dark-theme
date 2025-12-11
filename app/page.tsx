import AppBenefits from "@/components/AppBenefits";
import SecureLocation from "@/components/SecureLocation";
import StayProductive from "@/components/StayProductive";

export default function Home() {
  return (
    <main className="">
      <SecureLocation />
      <AppBenefits />
      <StayProductive />
    </main>
  );
}
