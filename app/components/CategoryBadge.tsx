const categoryStyles: Record<string, string> = {
  "In Person": "bg-green-50 text-green-600",
  "Marketing": "bg-orange-50 text-orange-400",
  "Engineering": "bg-blue-50 text-blue-600",
  "Full Time": "bg-purple-50 text-purple-600",
  "Remote": "bg-indigo-50 text-indigo-600",
  "Cloud": "bg-sky-50 text-sky-600",
  "Junior Level": "bg-pink-50 text-pink-600",
  "Internship": "bg-teal-50 text-teal-600",
  "Data": "bg-emerald-50 text-emerald-600",
};

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const style =
    categoryStyles[category] || "bg-gray-100 text-gray-600";

  return (
    <span className={`text-xs font-semibold rounded-full px-4 py-1.5 ${style}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;
