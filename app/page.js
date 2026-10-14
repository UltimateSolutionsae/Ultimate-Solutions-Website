import { Hero } from "@/components/sections/Hero.jsx";
import { Stats } from "@/components/sections/Stats.jsx";
import { Categories } from "@/components/sections/Categories.jsx";
import { Process } from "@/components/sections/Process.jsx";
import { DepthBand } from "@/components/sections/DepthBand.jsx";
import { SelectedProjects } from "@/components/sections/SelectedProjects.jsx";
import { Mission } from "@/components/sections/Mission.jsx";
import { Testimonial } from "@/components/sections/Testimonial.jsx";
import { HomeCta } from "@/components/sections/HomeCta.jsx";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categories />
      <Process />
      <DepthBand />
      <SelectedProjects />
      <Mission />
      <Testimonial />
      <HomeCta />
    </div>
  );
}
