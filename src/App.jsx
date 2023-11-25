import { quizData } from "./data";
import { useReducer } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  status: "pending",
  questions: quizData.quizzes,
  topicNumber: null,
  answer: null,
  index: 0,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "active", topicNumber: action.payload };

    case "newAnswer":
      const question = state.questions[state.topicNumber].questions.at(
        state.index,
      );
      console.log(question);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.answer ? state.points + 1 : state.points,
      };

    default:
      throw new Error("Unknown Action.");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, topicNumber, index, answer } = state;

  return (
    <div>
      <Header />

      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        {status === "active" ? (
          <Question
            question={questions[topicNumber]?.questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        ) : (
          <StartScreen questions={questions} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

export default App;
