import { ShoppingBag } from "lucide-react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import productOne from "../assets/Frame 46.png";
import productTwo from "../assets/Frame 46 (1).png";
import productThree from "../assets/Group 108.png";

const products = [
  {
    name: "Indoor Green Plant",
    price: "$25.00",
    image: productOne,
  },
  {
    name: "Natural Plant Pot",
    price: "$35.00",
    image: productTwo,
  },
  {
    name: "Organic Garden Kit",
    price: "$45.00",
    image: productThree,
  },
];

function Products() {
  return (
    <section className="section products" id="products">
      <Container>
        <SectionTitle
          tag="Our Collection"
          title={<>Explore Our Natural <span>Products</span></>}
          description="Bring the beauty of nature into your everyday life."
          center
        />

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-label">Natural</span>
              </div>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <strong>{product.price}</strong>
                </div>

                <a href="#contact" aria-label={`Enquire about ${product.name}`}>
                  <ShoppingBag size={19} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Products;