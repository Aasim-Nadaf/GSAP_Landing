import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", {
      type: "words",
    });
    const textSplit = SplitText.create("#text", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.02,
      })
      .from(
        textSplit.words,
        {
          opacity: 0,
          yPercent: 100,
          stagger: 0.04,
        },
        "-=2"
      )
      .from(
        ".top-grid div , .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every details matter <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p id="text">
              A cocktail that’s as fresh as the breeze and as bold as the night.
              Whether you're chilling by the beach or vibing at a rooftop party,
              the Mojito is your go-to drink for pure, tropical bliss.
            </p>
            <p className="md:text-3xl text-xl font-bold">
              <span>4.5</span>/5
            </p>

            <p className="text-sm text-white-100">
              More than +12000 customers{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="grid-img-1" />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy">
            <img src="/images/abt2.png" alt="grid-img-1" />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt5.png" alt="grid-img-1" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img src="/images/abt3.png" alt="grid-img-1" />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="noisy">
            <img src="/images/abt4.png" alt="grid-img-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
