import { useRef, useState } from "react";
import { allCocktails } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentRef = useRef<HTMLDivElement | null>(null);

  const totalCocktail = allCocktails.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktail) % totalCocktail;

    setCurrentIndex(newIndex);
  };

  const getCocktails = (indexOffSet: number) => {
    return allCocktails[
      (currentIndex + indexOffSet + totalCocktail) % totalCocktail
    ];
  };

  const prevCocktail = getCocktails(-1);
  const nextCocktail = getCocktails(1);
  const currentCocktail = getCocktails(0);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, duration: 1, xPercent: 0, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.3,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        delay: 0.1,
        stagger: 0.3,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 aria-label="menu-heading" className="sr-only">
        Cocktails Menu
      </h2>

      <nav
        className="cocktail-tabs text-nowrap"
        aria-label="Cocktail Navigation"
      >
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div className="info" ref={currentRef}>
            <p>Recipe for :</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
