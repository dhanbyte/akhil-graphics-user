import { Link, useParams } from "react-router-dom";
import { useData } from "../HomePage/DataContext"; // ✅ Use Context API

const ChildCard = () => {
  const { data } = useData();
  const { childId } = useParams<{ childId?: string }>();

  const parent = data.find((item) => item.id === childId);
  if (!parent) return <h1 className="text-center text-red-500">Category Not Found</h1>;

  return (
    <div>
      <h1 className="text-center text-blue-900 text-2xl">{parent.name}</h1>
      <div className="grid md:grid-cols-4 gap-6 p-6">
        {parent.children.map((child) => (
          <Link key={child.id} to={`/sub-child/${parent.id}/${child.id}`} className="block text-center shadow-md p-4 rounded-lg">
            <img src={child.image} alt={child.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{child.name}</h3>
            <p className="text-gray-500">{child.dec}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChildCard;
