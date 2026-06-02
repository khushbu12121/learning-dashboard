import LogoutButton from "@/components/LogoutButton";
import AddCourseForm from "@/components/AddCourseForm";
import AnimatedCourseCard from "../components/AnimatedCourseCard";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import ActivityCard from "../components/ActivityCard";

export default async function HomePage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return <div>Error loading courses</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <HeroCard />
          <LogoutButton />
        </div>

        <AddCourseForm />

        <div className="grid md:grid-cols-3 gap-4">
          <ActivityCard />

          <div className="md:col-span-2 grid gap-4">
            {courses?.map((course) => (
              <AnimatedCourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}