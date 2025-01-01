export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Welcome on UniPaper!
      </h1>
      <p className="text-gray-700 mb-6">
        This is a simple project to show the potential of distributed search
        using <span className="font-semibold text-gray-900">Algolia</span>.
      </p>
      <a
        href="/search"
        className="px-6 py-2 text-white bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Go to Search Page
      </a>
    </div>
  );
}
