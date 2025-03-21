import MyImage from "../assets/DrawKit Vector Illustrations Halloween Illustrations (8).png"
export default function Header() {
  return (
    <div className="flex flex-col md:flex-row max-w-screen justify-center items-center min-h-full space-x-8 px-12 py-8 bg-[#181e2b]">
      <div className="w-1/2 text-center md:text-left">
        <h1 className="text-xl md:text-5xl text-white font-bold">
          Browse The Best <span className="text-red-600">Anime</span> Over There
        </h1>
        <p className=" text-gray-300 mt-4">
          Discover an extensive collection of anime across different genres.<span className="hidden md:flex"> Find your favorite shows and explore new adventures in the anime world!</span>
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img

          src={MyImage}
          alt="Anime Illustration"
          className="    drop-shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
}
