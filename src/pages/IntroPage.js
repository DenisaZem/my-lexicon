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
      <div className="mainWall__title_1">
        <p>
          Vítejte v projektu My lexicon! 
        </p>
      </div>
      <div className="mainWall__title_2">
        <p>
          Jedná se inovativní způsob učení
          slovíček prostřednictvím poutavých příkladových vět, které si
          vytvoříte sami. Každé slovo získává život díky konkrétním situacím,
          což usnadňuje jeho zapamatování a efektivní osvojení. S pravidelným
          opakováním a interaktivním přístupem k učení se stáváte skvělým
          znalcem jazyka.
        </p>
      </div>
      <div className="mainWall__title_3">
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
