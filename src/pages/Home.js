import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import Description from "../components/Description";
import Highlights from "../components/Highlights";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights>
        <Menu></Menu>
      </Highlights>
      <Testimonials />
      <Description />
    </main>
  );
}
