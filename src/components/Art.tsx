import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const start = isMobile ? "top 20%" : "top top";

  useGSAP(() => {
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        duration: 3,
        maskPosition: "center",
        maskSize: "400%",
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div id="art">
      <div className="container mx-auto pt-20 h-full">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="will-fade space-y-4">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{features}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="masked-img abs-center size-full object-contain"
            />
          </div>

          <ul className="will-fade space-y-4">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Shake Stir Sip Repeat</h2>

          <div id="masked-content">
            <h3>Sip-Worthy Perfection</h3>
            <p>
              “A cocktail that’s as fresh as the breeze and as bold as the
              night.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
