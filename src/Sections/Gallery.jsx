import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import galleryOne from "../assets/Blog.png";
import galleryTwo from "../assets/Strategy.png";
import galleryThree from "../assets/What we do.png";
import galleryFour from "../assets/Why is choose us.png";

const images = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
];

function Gallery() {
  return (
    <section className="section gallery">
      <Container>
        <SectionTitle
          tag="Our Gallery"
          title={<>Nature In Every <span>Corner</span></>}
          center
        />

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={image}>
              <img src={image} alt={`Nature gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;