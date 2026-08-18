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
      <div className="grid h-screen place-content-center bg-teal-100 text-center font-bold text-2xl text-red-900">
        😵 Product Not Found
      </div>
    );
  }
  return (
    <div>
      <h1> {product.name} </h1>
      <p> {product.description} </p>
      <p> {product.price} </p>
    </div>
  );
}
