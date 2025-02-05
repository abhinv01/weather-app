const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* loader */}
      <div className="w-10 h-10 border-slate-800 rounded-full border-4 border-t-transparent animate-spin" />
      <span className="text-sm mx-2 text-slate-800">Please wait... </span>
    </div>
  );
};

export default Loader;
