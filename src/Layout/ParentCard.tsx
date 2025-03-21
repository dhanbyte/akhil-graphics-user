import { Link } from "react-router-dom";
import { useData } from "../components/HomePage/DataContext"; // ✅ Use Context API

const ParentCard = () => {
  const { data } = useData();

  return (
    <div>
      <h1 className="text-center text-blue-900 text-2xl">Printing Services</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {data.map((category) => (
          <Link key={category.id} to={`/child/${category.id}`} className="block text-center shadow-md p-4 rounded-lg">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ParentCard;
