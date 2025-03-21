import { Link } from "react-router-dom";

export default function DigitalPapperPRinting() {
  const products = [
        { name: "LETTER HEAD PAPER", image: "https://printersclub.in/images/cat-images/Letter%20Head%20digital.jpg", link: "/visiting-cards" ,dec:"2 Days" },
        { name: "ART PAPER", image: "https://printersclub.in/images/cat-images/Art%20paper.jpg", link: "/visiting-cards" ,dec:"6 Days" },
        { name: "TEXTURE PAPER", image: "https://printersclub.in/images/cat-images/Texture%20(1).jpg", link: "/visiting-cards" ,dec:"4 Days" },
        { name: "METALLIC PAPER", image: "https://printersclub.in/images/cat-images/Golden.jpg", link: "/visiting-cards" ,dec:"2 Days" },
        { name: "NT/PVC SHEETS", image: "https://www.google.com/imgres?q=NT%2FPVC%20SHEETS&imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5ca47f1e9b8fe83be3103f22%2F1566195640331-6L54Q0WR1QI3NFZ56KS8%2FMCC%252BGeneral%252BPurpose%252BPVC%252B%2525282%252529.jpg&imgrefurl=https%3A%2F%2Fmetasystems-group.com%2Fhishiplate-general-purpose-pvc-sheets&docid=Dwzm73AyhHkcqM&tbnid=-e1DdT32E7KV3M&vet=12ahUKEwiMmvq07Y6MAxXgs1YBHchWKdQQM3oECDQQAA..i&w=1673&h=1117&hcb=2&ved=2ahUKEwiMmvq07Y6MAxXgs1YBHchWKdQQM3oECDQQAA", link: "/visiting-cards" ,dec:"2 Days" },
        { name: "PAPER GUMMING", image: "https://printersclub.in/images/cat-images/Cromo%20Paper%20Gumming.jpg", link: "/visiting-cards" ,dec:"1 Days" },
        { name: "PVC GUMMING", image: "data:image/jpeg;base64,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", link: "/visiting-cards" ,dec:"3 Days" },
        { name: "ONLY PRINTING", image: "https://printersclub.in/images/cat-images/DPP%2003.jpg", link: "/visiting-cards" ,dec:"1 Days" },
        
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
          <p className="text-sm text-gray-600">Production Time :  {product.dec}</p>
        </Link>
      ))}
    </div>
             

    </div>
  )
}
