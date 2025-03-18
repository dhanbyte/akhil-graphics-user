import { Link } from "react-router-dom";

export default function Pens() {
    const products = [
        { name: "Laser printed pen", image: "https://printersclub.in/images/cat-images/LAZER%20Small.jpg", link: "/visiting-cards" ,dec:"6 Days" },
        { name: "Single color printed pen", image: "https://printersclub.in/images/cat-images/Single%20Small.jpg", link: "/visiting-cards" ,dec:"6 Days" },
        { name: "Pen packing box", image: "https://www.google.com/imgres?q=pan%20packaging%20box%20photo&imgurl=https%3A%2F%2Fsc04.alicdn.com%2Fkf%2FHLB1sbiFU8LoK1RjSZFuq6xn0XXaD.jpg&imgrefurl=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FEco-Friendly-Feature-Wax-Corrugated-Cookware_60625337208.html&docid=wThcLlvI4iIl_M&tbnid=YNX0b58HYiVomM&vet=12ahUKEwjWpNXy8I6MAxWnrVYBHaKdAjkQM3oECGkQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjWpNXy8I6MAxWnrVYBHaKdAjkQM3oECGkQAA", link: "/visiting-cards" ,dec:"6 Days" },
       
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
