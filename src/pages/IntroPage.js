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
    </div>
  );
};
export default IntroPage;
