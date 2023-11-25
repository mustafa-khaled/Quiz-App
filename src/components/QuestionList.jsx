function QuestionList({ question }) {
  const { question: quiz, options, answer } = question || {};

  console.log(options);

  return (
    <div className="flex h-[45vh] w-full items-center justify-around p-[20px]">
      <div className=" self-start align-top">
        <p className="text-left italic">{quiz}</p>
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        {options.map((q, i) => {
          return (
            <div key={i} className="quiz">
              <h3>{options[i]}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionList;
