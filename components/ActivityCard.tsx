export default function ActivityCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 md:col-span-1">
      <h2 className="text-xl font-bold mb-4">
        Activity
      </h2>

      <div className="space-y-2">
        <div className="h-3 bg-green-500 rounded"></div>
        <div className="h-3 bg-green-500 rounded w-3/4"></div>
        <div className="h-3 bg-green-500 rounded w-1/2"></div>
        <div className="h-3 bg-green-500 rounded w-5/6"></div>
      </div>
    </div>
  );
}