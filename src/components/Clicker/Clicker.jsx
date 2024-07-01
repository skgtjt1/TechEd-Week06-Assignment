import "./Clicker.css";
export default function Clicker({ click }) {
  return (
    <>
      <br />
      <p className="game-desc">Click my face to de-stress!</p>
      <button onClick={click}>
        <img
          className="button-image"
          src="assets/stressball.webp"
          alt="Smiley face stress ball button"
          aria-label="The main button for the clicker game, with the image of a yellow smiley face"
        />
      </button>
    </>
  );
}
