type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
      <h2 className="text-xl font-semibold">
        {course.title}
      </h2>

      <p className="mt-3 text-sm text-zinc-400">
        Progress
      </p>

      <div className="w-full bg-zinc-800 rounded-full h-3 mt-2">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{
            width: `${course.progress}%`,
          }}
        />
      </div>

      <p className="mt-2">
        {course.progress}%
      </p>
    </div>
  );
}