"use client";

import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function AnimatedCourseCard({
  course,
}: {
  course: Course;
}) {

  const deleteCourse = async () => {
    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", course.id);

    if (error) {
      alert(error.message);
    } else {
      alert("Course Deleted");
      location.reload();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {course.title}
        </h2>

        <button
          onClick={deleteCourse}
          className="bg-red-600 px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        Progress
      </p>

      <div className="w-full bg-zinc-800 rounded-full h-3 mt-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{
            duration: 1.2,
          }}
          className="bg-blue-500 h-3 rounded-full"
        />
      </div>

      <p className="mt-2">
        {course.progress}%
      </p>
    </motion.div>
  );
}