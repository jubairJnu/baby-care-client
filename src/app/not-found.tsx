import notFound from "@/assest/not-found.svg";
import Image from "next/image";

const notFoundPage = () => {
  return (
    <div className="flex justify-evenly items-center min-h-screen">
      <Image src={notFound} alt="not found 404" width={350} />
      <h1 className="text-red-500 text-center font-bold text-4xl">
        Page Not Found
      </h1>
    </div>
  );
};

export default notFoundPage;
