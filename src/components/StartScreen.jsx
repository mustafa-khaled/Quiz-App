function StartScreen({ questions, dispatch }) {
  return (
    <div className="container mx-auto  px-[10px] md:w-[80%]">
      <div className="ga-[20px] flex min-h-[80vh] w-full flex-col items-center justify-around md:flex-row md:justify-between">
        <div className="w-full md:w-[50%]">
          <h1 className="my-[10px] text-2xl font-bold sm:text-3xl md:text-5xl">
            <span className="mb-[10px] block font-thin">Welcome to the </span>
            Frontend Quiz!
          </h1>
          <p className="text-left italic">Pick a subject to get started.</p>
        </div>

        <div className="flex w-full flex-col items-center gap-[20px] md:w-[50%] ">
          {questions.map((q, i) => {
            return (
              <div
                key={q.title}
                className="quiz"
                onClick={() => dispatch({ type: "start", payload: i })}
              >
                <img src={q.icon} alt={q.title} className="w-[30px]" />
                <h3>{q.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
