import { quizData } from "./data";
import { useReducer } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import QuestionList from "./components/QuestionList";

const initialState = {
  status: "pending",
  questions: quizData.quizzes,
  topicNumber: null,
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "active", topicNumber: action.payload };

    default:
      throw new Error("Unknown Action.");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, topicNumber, index } = state;

  console.log(state);

  return (
    <div>
      <Header />

      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        {status === "active" ? (
          <QuestionList question={questions[topicNumber]?.questions[index]} />
        ) : (
          <StartScreen questions={questions} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

export default App;
