import { Link } from "react-router-dom";


export default function ShootingTargets() {
    const products = [
          { name: "pistol target", image: "https://printersclub.in/images/cat-images/pistol.png", link: "/visiting-cards",subheading:"250 GSM Duplex Paper " ,dec:"2 Days" },
          { name: "rifle target", image: "https://printersclub.in/images/cat-images/rifle.png", link: "/posters",subheading:"250 GSM Duplex Paper " ,dec:"2 Days" },
         
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
            <h6 className="mt-2 text-sm  text-blue-700">{product.subheading.toUpperCase()}</h6>
           
            <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
          </Link>
        ))}
      </div>
               
  
      </div>
    )
}
