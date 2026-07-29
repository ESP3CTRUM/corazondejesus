import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { LocationCard } from "@/components/sections/LocationCard";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
      <Hero />
      <MenuPreview />
      <AboutPreview />
      <LocationCard />
    </div>
  );
}
