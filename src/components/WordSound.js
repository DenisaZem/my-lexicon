/* global responsiveVoice */

const WordSound = ({ wordDe }) => {
  const playAudio = () => {
    if (wordDe) {
      responsiveVoice.speak(wordDe, "Deutsch Female");
    } else {
      console.error("Text pro přehrání nebyl poskytnut.");
    }
  };

  return (
    <button className="ButtonSection_soundBTN" onClick={playAudio}>
      <img
        className="ButtonSection_soundBTN_img"
        src="https://static-00.iconduck.com/assets.00/audio-volume-low-symbolic-icon-2048x1848-yr4qvyya.png"
        alt="Sound Icon"
      />
    </button>
  );
};

export default WordSound;
