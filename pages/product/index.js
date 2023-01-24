import Link from "next/link";

function ProductList({productId = 100}){
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <h1>
                <Link href="product/1">Product 1</Link>
            </h1>
            <h1>
                <Link href="product/2">Product 2</Link>
            </h1>
            <h1>
                <Link href="product/3" replace>Product 3</Link>
            </h1>
            <h1>
                <Link href={`product/${productId}`}>Product {productId}</Link>
            </h1>
        </div>
    )
}

export default ProductList;