export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-8 animate-pulse">
      <div className="h-24 bg-zinc-800 rounded-3xl mb-6"></div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="h-72 bg-zinc-800 rounded-3xl"></div>

        <div className="md:col-span-2 space-y-4">
          <div className="h-40 bg-zinc-800 rounded-3xl"></div>
          <div className="h-40 bg-zinc-800 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}