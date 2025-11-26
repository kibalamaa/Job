import JobList from "./components/JobList";
import globe from "./../public/globe.svg";



const page = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <JobList
        img_src={globe}
        role={"Sofs"}
        company={"sfsdf"}
        location={"sfsdf"}
        description={"sfdf"}
      />

      <JobList
        img_src={globe}
        role={"Sofs"}
        company={"sfsdf"}
        location={"sfsdf"}
        description={"sfdf"}
      />

      <JobList
        img_src={globe}
        role={"Sofs"}
        company={"sfsdf"}
        location={"sfsdf"}
        description={"sfdf"}
      />
    </div>
  );
};

export default page;
