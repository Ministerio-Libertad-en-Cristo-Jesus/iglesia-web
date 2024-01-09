import AboutUsSection from "../ui/aboutUs/aboutUsSection";
import RightInfo from "../ui/layout/RightInfo";

export default function AboutUs () {
  return (
    <main className="flex w-full justify-center">
      <div className="flex w-full flex-col lg:flex-row gap-16 px-10 lg:px-24 max-w-[1440px] mt-44 sm:mt-52">
        <AboutUsSection />
        <RightInfo />
      </div>
    </main>
  )
}
