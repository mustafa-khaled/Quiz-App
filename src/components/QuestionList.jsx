function QuestionList({ question }) {
  const { question: quiz, options, answer } = question || {};

  console.log(options);

  return (
    <div className="container mx-auto  px-[10px] md:w-[80%]">
      <div className="flex min-h-[45vh] w-full flex-col items-center justify-around gap-[20px] p-[20px] md:flex-row">
        <div className="w-full md:w-[50%] md:self-start">
          <p className="text-left italic">{quiz}</p>
        </div>

        <div className="flex w-full flex-col  items-center gap-[10px] text-sm sm:gap-[20px] sm:text-base md:w-[50%]">
          {options.map((q, i) => {
            return (
              <div key={i} className="quiz">
                <h3>{options[i]}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionList;
