"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddCourseForm() {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");

  const addCourse = async () => {
    const { error } = await supabase
      .from("courses")
      .insert([
        {
          title,
          progress: Number(progress),
          icon_name: "BookOpen",
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Course Added Successfully");
      location.reload();
    }
  };

  return (
    <div className="bg-zinc-900 p-4 rounded-2xl mb-6">
      <h2 className="text-lg font-bold mb-3">
        Add Course
      </h2>

      <input
        className="w-full p-3 rounded mb-3 bg-white text-black"
        placeholder="Course Name"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-3 rounded mb-3 bg-white text-black"
        placeholder="Progress (%)"
        onChange={(e) => setProgress(e.target.value)}
      />

      <button
        onClick={addCourse}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Add Course
      </button>
    </div>
  );
}