import { useParams } from "react-router-dom";
import { useData } from "../HomePage/DataContext"; // ✅ Use Context API

const SubChildCard = () => {
  const { data } = useData();
  const { childId, subChildId } = useParams<{ childId?: string; subChildId?: string }>();

  const parent = data.find((item) => item.id === childId);
  const child = parent?.children.find((sub) => sub.id === subChildId);

  return (
    <div className="p-6 text-center">
      {child ? (
        <>
          <h2 className="text-2xl text-blue-900">{child.name}</h2>
          <p className="text-gray-500">{child.dec}</p>
          <div className="grid md:grid-cols-4 gap-6 mt-4">
            {child.subChildren.map((sub) => (
              <div key={sub.id} className="shadow-md p-4 rounded-lg">
                <h4 className="text-lg font-semibold">{sub.name}</h4>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-red-600">Sub-category not found.</p>
      )}
    </div>
  );
};

export default SubChildCard;
