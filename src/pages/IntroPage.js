import peopleImage from "../images/people.png";

const IntroPage = () => {
  return (
    <div className="mainWall">
      <img
        src={peopleImage}
        alt="People learning"
        className="mainWall__peopleImage"
      />
      <div className="mainWall__whiteBoard"></div>
      <div className="mainWall__title">
        <p>
          "Každý den je příležitost naučit se něco nového. Získejte sílu slov a
          zapamatujte si je s lehkostí."
        </p>
      </div>

      {/* <div className="home">
      <div className="mainBanner">
        <div className="wallpaper">
          <h1>Úvod</h1>
        </div>
      </div>
      <div className="containerBanner">
        <div className="quote">
          <p>
            "Každý den je příležitost naučit se něco nového. Získejte sílu slov a zapamatujte si je s lehkostí."
          </p>
        </div>
      </div>
      <div className="home-container">
        <p>
          Vytvářejte si vlastní paměťové věty a jednoduše si zapamatujte nová slovíčka.
        </p>
        <p>
          Každá věta je klíčem k rozšíření vaší slovní zásoby.
        </p>
      </div>
    </div> */}
    </div>
  );
};
export default IntroPage;
