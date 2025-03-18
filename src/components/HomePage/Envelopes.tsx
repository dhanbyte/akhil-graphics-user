import { Link } from "react-router-dom";

export default function Envelopes() {
  const products = [
        { name: "ENVELOPE - 9x4", image: "https://printersclub.in/images/cat-images/ENV%201A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Office Letters" },
        { name: "ENVELOPE - 9.70x4.20 ", image: "https://printersclub.in/images/cat-images/Envelope%20img.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Office Letters" },
        { name: "ENVELOPE - 10.75x4.75", image: "https://printersclub.in/images/cat-images/ENV%203A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Office Letters" },
        { name: "ENVELOPE - 5x7", image: "https://printersclub.in/images/cat-images/ENV%204A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Invitations / Cards" },
        { name: "ENVELOPE - 6x8", image: "https://printersclub.in/images/cat-images/ENV%205A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Invitations / Cards" },
        { name: "ENVELOPE - 8.60x10.60", image: "https://printersclub.in/images/cat-images/ENV%206A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Brochures / Files" },
        { name: "ENVELOPE 9.40x12.40", image: "https://printersclub.in/images/cat-images/ENV%207A.jpg", link: "/visiting-cards" ,dec:"2 Days",subheading:"Utility : For Brochures / Files" },
       

    ];
      
  return (
    <div >
        <h1 className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl">Select Category

        </h1>

        <div className="grid md:grid-cols-4 lg:grid-cols-5  gap-6 p-6">
      {products.map((product) => (
        <Link to={product.link} key={product.name}  className="block text-center shadow-lg rounded-2xl p-4 hover:shadow-2xl transition">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold text-blue-700">{product.name.toUpperCase()}</h3>
          <h3 className="mt-2 text-sm  text-blue-400">{product.subheading}</h3>
        
          <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
        </Link>
      ))}
    </div>
             

    </div>
  )
}
