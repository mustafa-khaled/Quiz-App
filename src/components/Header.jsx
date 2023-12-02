import { useQuestions } from "../context/QuestionsProvider";
import ToggleDarkModeBtn from "./ToggleDarkModeBtn";

function Header() {
  const { topicIcon, topicTitle } = useQuestions();

  return (
    <header className="flex h-[70px] items-center justify-center">
      <div className="container mx-auto flex justify-between px-[10px]">
        {topicIcon && (
          <div className="flex items-center gap-[10px]">
            <img src={topicIcon} alt="topic icon" className="w-[35px]" />

            <h3 className="font-bold">{topicTitle}</h3>
          </div>
        )}
        <div className="ml-auto">
          <ToggleDarkModeBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
