import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

const Cocktails = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const parralaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parralaxTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });

    parralaxTimeline.from(
      "#c-right-leaf",
      {
        x: 100,
        y: -100,
      },
      "<"
    );
  }, []);

  return (
    <section id="cocktails">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list" ref={textRef}>
        <div className="popular">
          <h1>Most Popular Cocktails:</h1>

          <ul className="left-cocktail">
            {cocktailLists.map(
              ({
                name,
                detail,
                country,
                price,
              }: {
                name: string;
                detail: string;
                price: string;
                country: string;
              }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h2>{name}</h2>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="popular">
          <h1>Most Popular Mocktails:</h1>

          <ul className="right-cocktail">
            {mockTailLists.map(
              ({
                name,
                detail,
                country,
                price,
              }: {
                name: string;
                detail: string;
                price: string;
                country: string;
              }) => (
                <li key={name}>
                  <div className="me-28">
                    <h2>{name}</h2>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
