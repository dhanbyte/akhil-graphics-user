import { Link } from "react-router-dom";

export default function Stickers() {
    const products = [
          { name: "Paper Sticker", image: "https://printersclub.in/images/cat-images/Sticker%20bb.jpg", link: "/visiting-cards" ,dec:"6 Days" },
          { name: "pvc Sticker", image: "https://printersclub.in/images/cat-images/pvc%20Sticker%20b.jpg", link: "/poster" ,dec:"8Days" },
         
      ];
  return (
    <div>
            
       
          <div >
              <h1 className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl">Select Category
      
              </h1>
      
              <div className="grid md:grid-cols-4 lg:grid-cols-5  gap-6 p-6">
            {products.map((product) => (
              <Link to={product.link} key={product.name} className="block text-center shadow-lg rounded-2xl p-4 hover:shadow-2xl transition">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-4 text-lg font-semibold text-blue-700">{product.name.toUpperCase()}</h3>
                <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
              </Link>
            ))}
          </div>
                   
      
          </div>
        )
    </div>
  )
}
