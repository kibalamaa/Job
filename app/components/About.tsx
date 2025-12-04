import Image from "next/image";

interface AboutProps {
  img_src: string;
  title: string;
  text: string;
}

const About = ({ img_src, title, text }: AboutProps) => {
  const isInvalid =
    !text || text.startsWith("0001-01-01") || isNaN(new Date(text).getTime());

  const formattedDate = isInvalid
    ? "---"
    : new Date(text).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

  return (
    <div className="flex max-w-[150px] gap-4">
      <Image
        className="mt-1"
        src={img_src}
        width={34}
        height={34}
        alt="Hero image"
      />

      <div className="flex flex-col w-[80%] text-sm">
        <p className="text-gray-500">{title}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

export default About;
