function Main({ children }) {
  return (
    <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-around bg-[#ccc] md:flex-row">
      <div className="flex flex-col items-start justify-around bg-red-400 md:flex-row">
        {children}
      </div>
    </div>
  );
}

export default Main;
