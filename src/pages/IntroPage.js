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
        <p>Vítejte v projektu My lexicon!</p>
      </div>
      <div className="mainWall__title_2">
        <p>
          Jedná se inovativní způsob učení slovíček prostřednictvím poutavých
          příkladových vět, které si vytvoříte sami. Každé slovo získává život
          díky konkrétním situacím, což usnadňuje jeho zapamatování a efektivní
          osvojení. S pravidelným opakováním a interaktivním přístupem k učení
          se stáváte skvělým znalcem jazyka.
        </p>
      </div>
      <div className="mainWall__title_3">
        <p>
          A jak to funguje? 
          <br />
          K dispozici Ti je databáze slovíček, která si
          ukládáš dle toho, jak se je učíš ve škole, v práci nebo na ně natrefíš
          kdekoliv jinde. A nebo se uč dle předem vytvořených lekcí, je to jen
          na tobě. U každého slovíčka jsou Ti k dispozici pomůcky pro
          zapamatování. Někdo rád využívá obrazovou paměť při učení, někomu
          vyhovuje metoda učení se v příbězích a někdo raději využívá učení se
          rovnou ve větách s audioukázkou. A nebo vše zkombinuj a slovíčko už Ti
          v paměti zůstane.
        </p>
      </div>
      <div className="mainWall__title_4">
        <p>
        "Každý den je příležitost naučit se něco nového. Získejte sílu slov a
          zapamatujte si je s lehkostí."
        </p>
      </div>
      <div className="mainWall__title_5">
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
