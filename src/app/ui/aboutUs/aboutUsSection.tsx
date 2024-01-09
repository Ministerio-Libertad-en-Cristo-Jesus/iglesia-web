import { aboutIntro, aboutVision, aboutMision } from "@/app/lib/aboutInfo";
import ContentText from "./ContentText";

const AboutUsSection = () => {
  return (  
    <section id="aboutus" className="flex flex-col gap-12 sm:gap-16">
      <header>
        <h1 className="font-black text-3xl sm:text-4xl text-blueI text-center">¿Quienes Somos?</h1>
        <p className="font-normal text-blueI text-center text-base sm:text-lg mt-1">Descubre a la Iglesia Libertad en Cristo Jesús</p>
      </header>
      <ContentText text={aboutIntro} />
      <h2 className="font-black text-2xl sm:text-3xl text-blueI">Nuestra Visión</h2>
      <ContentText text={aboutVision} />
      <h2 className="font-black text-2xl sm:text-3xl text-blueI">Nuestra Misión</h2>
      <ContentText text={aboutMision} />
    </section>
  )
}
 
export default AboutUsSection;