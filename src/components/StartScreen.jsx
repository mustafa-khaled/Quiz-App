function StartScreen({ questions, dispatch }) {
  return (
    <div className="flex h-[80vh] w-full items-center justify-around">
      <div>
        <h1 className="my-[10px] text-5xl font-bold">
          <span className="block font-thin">Welcome to the </span>
          Frontend Quiz!
        </h1>
        <p className="text-left italic">Pick a subject to get started.</p>
      </div>

      <div className="flex flex-col items-center gap-[20px]">
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
  );
}

export default StartScreen;
