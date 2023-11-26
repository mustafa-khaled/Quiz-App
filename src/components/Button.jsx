function Button({ children, onClick }) {
  return (
    <button className="option bg-[#4338ca] text-white" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
