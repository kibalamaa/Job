import Button from "./components/Button";
import globe from "./../public/globe.svg"
const Joblist = () => {
  return (
    <div className="flex flex-row bg-blue-600 w-[600px]">
      <div className="flex flex-col items-center w-[100px]">
        <p>progile</p>
        <img src={globe} />
      </div>
      <div className="flex flex-col bg-amber-300 w-[500px] h-[200px]">
        <div className="flex flex-col h-full w-full bg-amber-600">
          <h2>Social Media Assistant</h2>
          <p>Sed ut perspiciatis unde omnisequi nesciunt.</p>
        </div>

        <div className="">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className="flex flex-row justify-start  h-[20%]">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Joblist;
