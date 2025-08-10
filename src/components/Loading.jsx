export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-medium">Loading crypto prices...</p>
    </div>
  );
}
