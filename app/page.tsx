import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import ActivityCard from "../components/ActivityCard";
import CourseCard from "../components/CourseCard";

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
        <HeroCard />

        <div className="grid md:grid-cols-3 gap-4">
          <ActivityCard />

          <div className="md:col-span-2 grid gap-4">
            {courses?.map((course) => (
              <CourseCard
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