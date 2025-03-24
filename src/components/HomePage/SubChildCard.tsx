import { useParams } from "react-router-dom";
import { useData } from "../HomePage/DataContext"; // ✅ Use Context API

const SubChildCard = () => {
  const { data } = useData();
  const { childId, subChildId } = useParams<{ childId?: string; subChildId?: string }>();

  const parent = data.find((item) => item.id === childId);
  const child = parent?.children.find((sub) => sub.id === subChildId);

  console.log(child?.subChildren);
  
 
 
 
 
 

   
  return (
    <div className="">
      {child ? (
        <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row">
          {child?.subChildren.map((subpro) =>(
  
            <div key={subpro.id} className="md:w-1/2 pl-8 mx-auto bg-white  rounded shadow">

    <h2 className="text-blue-700 text-2xl font-bold mb-2 text-center">{subpro.name}</h2>
    <input
      type="text"
      className="w-full text-sm border border-gray-300 p-2 mb-4"
      placeholder="यहाँ अपने कस्टमर का नाम टाइप करें ..."
    />
    <h2 className="text-blue-700 font-bold mb-2">SELECT PRODUCT</h2>
    <select className="w-full text-sm text-gray-700 border border-gray-300 p-2 mb-4">
    {subpro.products?.map((product,index) =>(
       <option  key={index} value={product}  >{product}</option>
    ))}
    
  
     
    </select>
    <h2 className="text-blue-700 font-bold mb-2">SELECT DETAIL</h2>
    <div className="mb-4">
      <label className="block mb-1">Paper Type</label>
      <select className="w-full text-sm text-gray-700 border border-gray-300 p-2 mb-4">
  {subpro.paperTypes?.map((product, index) => (
    <option key={index} value={product}>{product}</option>
  ))}
</select>
    </div>
    <div className="mb-4">
      <label className="block mb-1">Window Cutting</label>
      <select className="w-full text-sm text-gray-700 border border-gray-300 p-2 mb-2">
        {subpro.windowCuttingOptions?.map((product, index) => (

          <option key={index} value={product}>{product}</option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-1">Flap Opening</label>
      <select className="w-full text-sm text-gray-700 border border-gray-300 p-2 mb-2">
        {subpro.flapOpeningOptions?.map((product, index) => (

          <option key={index} value={product}>{product}</option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-sm text-gray-700 mb-1">Qty.</label>
    
      <input
        type="number"
       
        className="w-full border border-gray-300 p-2"
        defaultValue={subpro.defaultQty}
      />
   
    </div>
    <h2 className="text-blue-700 font-bold mb-2">SELECT FILE OPTION</h2>
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="file_option"
          className="form-radio"
          
        />
        <span className="ml-2 text-sm text-gray-700">Attach file Online</span>
      </label>
      <label className="inline-flex items-center ml-4">
        <input type="radio" name="file_option" className="form-radio" />
        <span className="ml-2 text-sm text-gray-700">Send file via Email</span>
      </label>
    </div>
    <div className="bg-gray-100 p-4 rounded mb-4">
      <p className="text-green-600 text-sm  font-bold mb-2">
        Congratulations! Order's eligible for free delivery
      </p>
      <div className="flex justify-between mb-2">
        <span>Cost</span>
        <span>Rs. {subpro.cost}/-</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>GST (18.00%)</span>
        <span>Rs. 0/-</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Amount Payable</span>
        <span>Rs. 0/-</span>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Special Remark (Optional)</label>
        <textarea
          className="w-full border border-gray-300 p-2"
          placeholder="remarks for order processing team..."
          defaultValue={""}
        />
      </div>
    </div>
    <button className="w-full bg-blue-600 text-white p-2 rounded">
      Add Order (Pay From Wallet)
    </button>
  </div>
))}

            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
              <div className="bg-white p-4 rounded shadow-md">
                <div className="carousel relative w-full">
                  <img src="https://placehold.co/300x200?text=Image+1" className="active w-full" alt="Slide 1" />
              </div>
                <p className="text-gray-700 mt-2">Product Description and Specifications</p>
              </div>
            </div>
          </div>
          <div className="mt-4" id="order-summary"></div>
        </div>
      ) : (
        <p className="text-red-600">Sub-category not found.</p>
      )}
    </div>
  );
};

export default SubChildCard;
