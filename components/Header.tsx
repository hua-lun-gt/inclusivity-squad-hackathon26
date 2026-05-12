export default function Header() {
  return (
    <header className="bg-[#1d70b8] px-4 pt-10 pb-4">
      <h1 className="mb-3 text-center text-3xl font-bold text-white">
        GOV<span className="text-[#00e5c0]">·</span>UK
      </h1>
      <input
        type="search"
        placeholder="Search"
        className="w-full rounded-full bg-white px-4 py-2 text-gray-700"
      />
    </header>
  )
}
