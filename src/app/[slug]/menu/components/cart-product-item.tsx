import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";

interface CartItemProps {
    product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
    const { decreaseProductQuantity, increaseProductQuantity, removeProduct } = useContext(CartContext);

    return (
        <div className="flex items-center justify-between mb-3">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3 w-[85%]">
                <div className="relative min-h-20 min-w-20 rounded-xl bg-gray-100">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
                </div>
                <div className="space-y-1">
                    <p className="text-xs max-w-[90%] truncate">{product.name}</p>
                    <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                    {/* QUANTIDADE */}
                    <div className="flex items-center gap-1 text-center">
                        <Button onClick={() => decreaseProductQuantity(product.id)} className="h-7 w-7 rounded-lg" variant="outline">
                            <ChevronLeftIcon />
                        </Button>
                        <p className="w-7 text-xs">{product.quantity}</p>
                        <Button onClick={() => increaseProductQuantity(product.id)} className="h-7 w-7 rounded-lg" variant="destructive">
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>
            </div>
            {/* BOTÃO DE DELETAR */}
            <Button onClick={() => removeProduct(product.id)} className="h-7 w-7 rounded-lg" variant="outline">
                <TrashIcon />
            </Button>
        </div>
    );
}
 
export default CartProductItem;