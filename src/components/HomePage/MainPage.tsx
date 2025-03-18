import { Link } from "react-router-dom"

export default function MainPage() {
    const products = [
        { name: "Visiting Cards", image: "https://printersclub.in/images/cat-images/Visiting%20Card.jpg", link: "/visiting-cards" },
        { name: "Pamphlet / Posters", image: "https://printersclub.in/images/cat-images/Pamphle.jpg", link: "/posters" },
        { name: "Garments Tags", image: "https://printersclub.in/images/cat-images/tag%20246sa.jpg", link: "/garments-tags" },
        { name: "Files", image: "https://printersclub.in/images/cat-images/dr%20file%204546a.jpg", link: "/files" },
        { name: "Letter Heads", image: "http://printersclub.in/images/cat-images/Letter%20Head.jpg", link: "/letter-heads" },
        { name: "Envelopes", image: "https://printersclub.in/images/cat-images/Envelope%20img.jpg", link: "/envelopes" },
        { name: "Digital Paper Printing", image: "https://printersclub.in/images/cat-images/Digital%20Printing.jpg", link: "/digital-paper-printing" },
        { name: "ATM Pouches", image: "https://printersclub.in/images/cat-images/ATM%20Pouch.jpg", link: "/atm-pouches" },
        { name: "Bill Books", image: "https://printersclub.in/images/cat-images/Bill%20Book.jpg", link: "/bill-books" },
        { name: "Stickers & Labels", image: "https://printersclub.in/images/cat-images/Sticker.jpg", link: "/stickers-labels" },
        { name: "Pens", image: "https://printersclub.in/images/cat-images/Pen.jpg", link: "/pens" },
        { name: "Shooting Targets", image: "https://printersclub.in/images/cat-images/Shooting%20Targets.jpg", link: "/shooting-targets" },
        { name: "Sampal Files", image: "https://printersclub.in/images/cat-images/Sample%20File.jpg", link: "/simple-file" },
      
    ];
      
  return (
      <div>
            <h1 className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl">List of Printing Services</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                {products.map((product) => (
                    <Link 
                        to={product.link} 
                        key={product.name} 
                        state={{ product }} 
                        className="block text-center shadow-lg rounded-2xl p-4 hover:shadow-2xl transition"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="mt-4 text-lg font-semibold text-blue-700">{product.name.toUpperCase()}</h3>
                    </Link>
                ))}
            </div>
        </div>
    
  )
}
