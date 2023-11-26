import Button from "./Button";

function FinishScreen({ points, questionsNum, dispatch }) {
  return (
    <div className="container mx-auto  px-[10px] md:w-[80%]">
      <div className="ga-[20px] flex min-h-[80vh] w-full flex-col items-center justify-around md:flex-row md:justify-between">
        <div className="w-full md:w-[50%]">
          <h1 className="my-[10px] text-2xl font-bold sm:text-3xl md:text-5xl">
            <span className="mb-[10px] block font-thin">Quiz completed </span>
            You scored...
          </h1>
        </div>

        <div className="flex w-full flex-col items-center gap-[20px] md:w-[50%] ">
          <div className="option flex flex-col gap-[10px]">
            <h2 className="text-5xl md:text-8xl">{points}</h2>
            <p>out of {questionsNum}</p>
          </div>
          <Button onClick={() => dispatch({ type: "restart" })}>
            Restart Quiz!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
