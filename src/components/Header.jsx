import { useTheme } from "@/components/ThemeContext";

export default function Header({ onSearch }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center border-b-2 border-cyan-500 shadow-xl">
      <h1 className="text-3xl font-bold tracking-wider mb-4 sm:mb-0">
        Crypto Tracker
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search coin..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-auto p-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
        />
        <button
          onClick={toggleTheme}
          className="w-full sm:w-auto bg-cyan-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
