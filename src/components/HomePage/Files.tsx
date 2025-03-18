import { Link } from "react-router-dom";

export default function Files() {
    const products = [
        { name: "PVC FILE", image: "https://printersclub.in/images/cat-images/dr%20file%20pvc%20s.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"300 Micron PP Sheet, 9x12", secondheading:"SMALL SIZE"},
        { name: "PVC FILE", image: "https://printersclub.in/images/cat-images/dr%20file%20pvc%20s.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"300 Micron PP Sheet, 9.5x12.5" , secondheading:"BIG SIZE"},
        { name: "SBS FILE", image: "https://printersclub.in/images/cat-images/Small%20dr%20file.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"260 Gsm SBS Paper, 9x12", secondheading:"SMALL SIZE"},
        { name: "SBC FILE", image: "https://printersclub.in/images/cat-images/Big%20dr%20file.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"320 Gsm SBS Paper, 9.5x12.5" , secondheading:"BIG SIZE"},
        { name: "PVC FILE ", image: "https://printersclub.in/images/cat-images/PVC%20Clip%20copy.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"Available in 3 Varieties", secondheading:""},
   
    ];
  return (
  <div >
          <h1 className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl">Select Category
  
          </h1>
  
          <div className="grid md:grid-cols-4 lg:grid-cols-5  gap-6 p-6">
        {products.map((product) => (
          <Link to={product.link} key={product.name} className="block text-center shadow-lg rounded-2xl p-4 hover:shadow-2xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover  rounded-md" />
         
            <h3 className="mt-4 text-lg font-semibold text-blue-700">{product.name.toUpperCase()}</h3>
            <h5 className="mt-4  text-blue-700">{product.secondheading.toUpperCase()}</h5>
           
            <p className="text-sm text-gray-600"> {product.pera}</p>
         
            <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
          </Link>
        ))}
      </div>  </div>
  )
}
