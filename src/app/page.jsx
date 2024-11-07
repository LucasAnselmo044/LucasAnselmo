import { Button } from "@/components/ui/button";
import { FIDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">

            <h1 className="h1 my-4"> 
              Hello, My Name's <br /> <span className="text-blue-500"> Lucas Anselmo </span>
            </h1>
            <h2 className="h2">I'm a</h2>
            <h3 className="h3 text-blue-500"> Software Developer </h3>

            <p className="max-w-[500px] my-9 text-white/90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga, ab iste excepturi itaque repellendus est eligendi enim. Quidem, provident tenetur. Dicta provident iure nemo recusandae omnis accusamus magni quae!  
            </p> 
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}

export default Home;