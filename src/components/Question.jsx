import Option from "./Option";
import Progress from "./Progress";

function Question({ question, dispatch, answer, index, questionsNum }) {
  return (
    <div className="container mx-auto  px-[10px] md:w-[80%]">
      <div className="flex min-h-[45vh] w-full flex-col items-center justify-around gap-[20px] p-[20px] md:flex-row">
        <div
          className="flex h-[40vh] w-full flex-col items-start justify-between  md:w-[50%]
         md:self-start"
        >
          <p className="text-left text-2xl">{question.question}</p>
          <Progress index={index} questionsNum={questionsNum} answer={answer} />
        </div>

        <div className="flex w-full flex-col  items-center gap-[10px] text-sm sm:gap-[20px] sm:text-base md:w-[50%]">
          {question?.options?.map((q, i) => {
            return (
              <Option
                key={i}
                option={question?.options[i]}
                dispatch={dispatch}
                answer={answer}
                question={question}
              />
            );
          })}

          {answer && (
            <button
              className="option bg-[#4338ca] text-white"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
