export default function Header() {
  return (
    <div className="flex max-w-screen justify-center items-center space-x-8 px-12 py-8 bg-[#181e2b]">
      <div className="w-1/2">
        <h1 className="text-5xl text-white font-bold">
          Browse The Best <span className="text-red-600">Anime</span> Over There
        </h1>
        <p className="text-gray-300 mt-4">
          Discover an extensive collection of anime across different genres. Find your favorite shows and explore new adventures in the anime world!
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="src\assets\PNG\DrawKit Vector Illustrations Halloween Illustrations (8).png"
          alt="Anime Illustration"
          className="w-full max-w-md h-auto drop-shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
}
