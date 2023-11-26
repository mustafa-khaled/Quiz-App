import { quizData } from "./data";
import { useReducer } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  status: "pending",
  questions: quizData.quizzes,
  topicNumber: null,
  answer: null,
  index: 0,
  points: 0,
  secondRemaining: 10 * 30,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
        topicNumber: action.payload,
      };
    case "newAnswer":
      const question = state.questions[state.topicNumber].questions.at(
        state.index,
      );
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.answer ? state.points + 1 : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return { ...state, status: "finished" };

    case "restart":
      return { ...initialState };

    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown Action.");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    topicNumber,
    index,
    answer,
    points,
    secondRemaining,
  } = state;

  const questionsNum = questions[topicNumber]?.questions?.length;

  return (
    <div>
      <Header />

      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center">
        {status === "pending" && (
          <StartScreen questions={questions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <Question
            question={questions[topicNumber]?.questions[index]}
            dispatch={dispatch}
            answer={answer}
            index={index}
            questionsNum={questionsNum}
            secondRemaining={secondRemaining}
          />
        )}

        {status === "finished" && (
          <FinishScreen
            questionsNum={questionsNum}
            points={points}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}

export default App;
