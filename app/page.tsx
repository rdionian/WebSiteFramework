import styles from "./page.module.css";
import { ImageGrid } from "@/components/image-grid/ImageGrid";
import { About } from "@/components/about/About";

export default function HomePage() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className="section--inner">
          <h1>Your Name</h1>
          <p>Bassist & Photographer</p>
        </div>
      </section>


      {/* About */}
      <About
        imageSrc="/images/screenshot-1.png"
        imageAlt="Portrait of Your Name"
      >
        <p>
          I’m a bassist and photographer focused on live performance,
          environments, and visual storytelling.
        </p>
        <p>
          My work spans music, touring, and landscape photography.
        </p>
      </About>

      <section>
        <h2>Featured Work</h2>

        <ImageGrid
          images={[
            { src: "/images/screenshot-1.png", alt: "Layout test image 1" },
            { src: "/images/screenshot-2.png", alt: "Layout test image 2" },
            { src: "/images/screenshot-3.png", alt: "Layout test image 3" },
            { src: "/images/screenshot-4.png", alt: "Layout test image 4" },
            { src: "/images/screenshot-5.png", alt: "Layout test image 5" },
            { src: "/images/screenshot-6.png", alt: "Layout test image 6" },
            { src: "/images/screenshot-1.png", alt: "Layout test image 1" },
            { src: "/images/screenshot-2.png", alt: "Layout test image 2" },
            { src: "/images/screenshot-3.png", alt: "Layout test image 3" },
            { src: "/images/screenshot-4.png", alt: "Layout test image 4" },
            { src: "/images/screenshot-5.png", alt: "Layout test image 5" },
            { src: "/images/screenshot-6.png", alt: "Layout test image 6" },
          ]}
        />
      </section>

    </>
  );
}


