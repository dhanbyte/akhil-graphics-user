import { Link } from "react-router-dom";

export default function GarmentsTags() {
    const products = [
        { name: "GLOSS", image: "https://printersclub.in/images/cat-images/Tag%20Printing%20b2.jpg", link: "/visiting-cards" ,dec:"2 Days" , pera:"High Gloss UV Coating"},
        { name: "MATT", image: "https://printersclub.in/images/cat-images/Matt%20Tag%202%20B.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"350 GSM Paper, Matt Lamination"},
        { name: "MATTLAMINATION + UV", image: "https://printersclub.in/images/cat-images/Matt%20UV%20Tag%201.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"400 GSM Paper, Matt Lamination" },
        { name: "800 GSM + MATT + TEXTURE", image: "https://printersclub.in/images/cat-images/MATT%20TEXTURE%20img.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"Available in 8 Texture" },
        { name: "800 GSM + MATT", image: "https://printersclub.in/images/cat-images/800%20GSM%20Tag.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"Matt Lamination" },
        { name: "800 GSM + MTT + UV", image: "https://printersclub.in/images/cat-images/800%20GSM%20UV%20Tag.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"" },
        { name: "PVC TAG", image: "https://printersclub.in/images/cat-images/PVC%20Tag.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"Matt Lamination" },
        { name: "THREAD", image: "https://printersclub.in/images/cat-images/Thread%20A.jpg", link: "/visiting-cards" ,dec:"2 Days", pera:"MATT + UV"  },
       
    ];
  return (
  <div >
          <h1 className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl">Select Category
  
          </h1>
  
          <div className="grid md:grid-cols-4 lg:grid-cols-5  gap-6 p-6">
        {products.map((product) => (
          <Link to={product.link} key={product.name} className="block text-center shadow-lg rounded-2xl p-4 hover:shadow-2xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
         
            <h3 className="mt-4 text-lg font-semibold text-blue-700">{product.name.toUpperCase()}</h3>
            <p className="text-sm text-gray-600"> {product.pera}</p>
         
            <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
          </Link>
        ))}
      </div>  </div>
  )
}
