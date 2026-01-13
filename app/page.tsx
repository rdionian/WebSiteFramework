import styles from "./page.module.css";
import { ImageGrid } from "@/components/image-grid/ImageGrid";
import { About } from "@/components/about/About";
import { SectionHeader } from "@/components/section-header/SectionHeader";
import { Callout } from "@/components/callout/Callout";
import { ContentBlock } from "@/components/content-block/ContentBlock";

export default function HomePage() {
  return (
    <>
      {/* Page Hero (LIGHT) */}
      <section className={`${styles.hero} section section--light`}>
        <div className="section--inner">
          <h1>Northward Journal</h1>
          <p>
            Notes from cold places, long roads, and quiet landscapes
          </p>
          <span className={styles.heroDivider} />
        </div>
      </section>


      {/* About (DARK by default — no section--light) */}
      <section id="about" className="section section--dark">
        <div className="section--inner">
          <About
            imageSrc="/images/SnowyRoad.png"
            imageAlt="Snow-covered road leading north"
            heading="About the Journal"
          >
            <p>
              Northward Journal began as a personal record of traveling
              through colder, quieter regions of the world. It is not a
              guide to destinations, nor a catalog of places visited.
            </p>

            <p>
              Instead, this project focuses on the experience of moving
              slowly — long drives, early mornings, changing weather,
              and the subtle shifts in landscape that occur when attention
              replaces urgency.
            </p>

            <p>
              Writing and photography here function as tools for observation.
              Together, they form a fragmented record of time spent in
              environments where distance, silence, and scale shape the
              way places are remembered.
            </p>
          </About>
        </div>
      </section>


      {/* Featured Work (DARK) */}
      <section id="work" className="section section--dark">
        <div className="section--inner">

          <SectionHeader
            title="Field Notes"
            subtitle="Selected moments from the Northward Journal"
            variant="dark"
          />

          <ImageGrid
            images={[
              { src: "/images/WinterRoadToMountains.png", alt: "Work 1" },
              { src: "/images/CabinByFrozenLake.png", alt: "Work 2" },
              { src: "/images/SnowyValley.png", alt: "Work 3" },
              { src: "/images/NorthernLights.png", alt: "Work 4" },
            ]}
          />

        </div>
      </section>


      <section id="journal" className="section section--dark">
        <div className="section--inner">
          <ContentBlock title="Artist Statement">
            <p>
              Northward Journal is a personal record of traveling through colder,
              quieter regions of the world — places shaped by long winters, limited
              daylight, and vast distances between towns.
            </p>

            <p>
              The work is not intended as a guide to destinations, but as a collection
              of moments experienced along the way: early morning light on frozen
              roads, the stillness of empty valleys, and the subtle changes in
              landscape that only become visible when time slows down.
            </p>

            <p>
              Photography and writing function together as observation tools. Images
              document scale and atmosphere, while written notes capture the smaller,
              often overlooked details — sound, temperature, movement, and absence.
            </p>

            <p>
              Rather than chasing landmarks or spectacle, the journal focuses on the
              experience of being present in these environments, allowing distance,
              weather, and silence to shape how places are remembered.
            </p>
          </ContentBlock>
        </div>
      </section>

      <section id="contact" className="section section--dark">
        <div className="section--inner">
          <Callout
            heading="Follow the Journal"
            body="Occasional updates from the road — new entries, photographs, and field notes from northern landscapes."
            buttonText="Subscribe for updates"
            href="mailto:youremail@example.com"
          />
        </div>
      </section>



    </>
  );
}

