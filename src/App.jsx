import { useQuestions } from "./context/QuestionsProvider";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import FinishScreen from "./components/FinishScreen";

function App() {
  const { status } = useQuestions();

  return (
    <div className="text-textColor">
      <Header />

      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        {status === "pending" && <StartScreen />}

        {status === "active" && <Question />}

        {status === "finished" && <FinishScreen />}
      </div>
    </div>
  );
}

export default App;
