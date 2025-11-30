import Image from "next/image";

interface CheckListItemProps {
  text: string;
}

const CheckListItem = ({ text }: CheckListItemProps) => {
  return (
    <li className="flex items-start gap-3">
      <Image
        src="/circle_check.svg"
        alt="check"
        width={20}
        height={20}
        className="mt-1 shrink-0" 
      />
      <span className="text-gray-700 text-sm">{text}</span>
    </li>
  );
};

export default CheckListItem;