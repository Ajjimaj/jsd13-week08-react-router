import { useParams } from "react-router-dom";
import { products } from "../mock-data/products";

// products == ข้อมูล product ทั้งหมด
// product == object ของสินค้าแต่ละชิ้น

export default function ProductDetail() {
  const { productId } = useParams();

  // .find() return ส่ิงที่เจอออกมา
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="grid h-screen place-content-center bg-teal-100 text-center font-bold text-2xl text-black-900">
        Product Not Found 🧙‍♂️
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center p-5 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-7 gap-1.5">
      <h1 className="font-bold text-2xl"> {product.name} </h1>
      <p className="text-gray-900"> {product.description} </p>
      <p className="text-gray-700"> Price ${product.price} </p>
    </div>
  );
}
