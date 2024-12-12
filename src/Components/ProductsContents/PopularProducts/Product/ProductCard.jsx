import Image from "next/image";
import SideBar from "./SideBar";
import QuantityControl from "./QuantityControl";

export default function ProductCard({ products }) {
  const productsData = [
    {
      id: 1,
      name: "Organic Apples",
      category: "Fruits",
      image: "https://i.ibb.co/4sx5Ng1/0e5313be7a8831b8ed60f8dab3c2df10.jpg",
      ratings: 4.5,
      originalPrice: 2.99,
      discountedPrice: 2.49,
      discount: "17% OFF",
      weight: "1 kg",
      expiry: "2024-12-20", // Example expiry date
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      category: "Bakery",
      image: "https://i.ibb.co/4sx5Ng1/0e5313be7a8831b8ed60f8dab3c2df10.jpg",
      ratings: 4.2,
      originalPrice: 1.99,
      discountedPrice: 1.69,
      discount: "15% OFF",
      weight: "500g",
      expiry: "2024-12-15",
    },
   
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
      {productsData.map((product, idx) => (
        <div
          key={idx}
          className="group  rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 "
        >
          {/* Product image */}
          <div className="p-4 overflow-hidden hover:shadow-black/30 duration-200 rounded-md group relative">
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-60 pt-4 h-40 object-cover rounded-lg"
              />
            </div>
            <span className="text-sm absolute top-5 -left-2  -rotate-45 bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {product.discount}
            </span>
            <SideBar />
          </div>

          {/* Product details */}
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <span className="text-sm text-gray-600">{product.category}</span>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">
                ({product.ratings} ratings)
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="line-through text-gray-500 text-sm">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${product.discountedPrice.toFixed(2)}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Weight: {product.weight}
            </div>
            <div className="text-sm text-gray-500">
              Expiry Date: {product.expiry}
            </div>
          </div>
          <QuantityControl />
        </div>
      ))}
    </div>
  );
}
