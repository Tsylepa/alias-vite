import { useDispatch, useSelector } from "react-redux";
import { newGame } from "src/redux/game/gameSlice";
import ScreenButton from "src/components/ScreenButton";
import { getCurrentGame } from "src/redux/game/gameSelectors";

export default function Menu() {
  const dispatch = useDispatch();
  const currentGame = useSelector(getCurrentGame);

  function handleNewGame() {
    dispatch(newGame());
  }

  return (
    <>
      {currentGame && <ScreenButton screen="results" text="Continue game" />}

      <ScreenButton screen="settings" text="New Game" onClick={handleNewGame} />
    </>
  );
}
