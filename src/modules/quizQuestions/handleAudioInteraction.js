const AUDIO_WAVE_INACTIVE =
  "https://www.technodom.kz/under/birthday-23/assets/audio-inactive.svg";
const AUDIO_WAVE_ACTIVE =
  "https://www.technodom.kz/under/birthday-23/assets/audio-active.svg";

export function handleAudioInteraction() {
  const audioElement = document.querySelector("#audio");
  const audioImage = document.querySelector(".quizQuestions__audio-wave");
  const playButton = document.querySelector(".quizQuestions__play-btn");

  if (audioElement && playButton) {
    console.log(audioElement);
    playButton.addEventListener("click", () => {
      if (audioElement.paused) {
        audioElement.play();
        audioImage.src = AUDIO_WAVE_ACTIVE;
      } else {
        audioElement.pause();
        audioImage.src = AUDIO_WAVE_INACTIVE;
      }
    });

    audioElement.addEventListener("ended", () => {
      audioImage.src = AUDIO_WAVE_INACTIVE;
    });
  }
}
