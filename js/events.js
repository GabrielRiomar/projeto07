export function Backgrounds(
  { bgHome,
    bgUniverse,
    bgExplore }) {

  function backgroundHome() {
    document.body.classList.remove("universe");
    document.body.classList.remove("explore");
    document.body.classList.add("home");
  }
  function backgroundUniverse() {
    document.body.classList.remove("explore");
    document.body.classList.remove("home");
    document.body.classList.add("universe");
  }
  function backgroundExplore() {
    document.body.classList.remove("home");
    document.body.classList.remove("universe");
    document.body.classList.add("explore");
  }

  return {
    backgroundHome,
    backgroundUniverse,
    backgroundExplore,
  };
}