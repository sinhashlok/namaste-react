const ShimmerMenu = () => {
  return (
    <div className="mx-[360px]">
      <div className="shimmer-menu-card-info">
        <div className="flex flex-col w-[150px] h-8 mx-4 my-2 rounded-sm p-2 bg-slate-200 transition-all"></div>
        <div className="flex flex-col w-[150px] h-8 mx-4 my-2 rounded-sm p-2 bg-slate-200 transition-all"></div>
        <div className="flex flex-col w-[150px] h-8 mx-4 my-2 rounded-sm p-2 bg-slate-200 transition-all"></div>
      </div>
      <div className="mt-8 flex flex-col h-[200px] mx-4 my-2 rounded-lg p-2 bg-slate-200 transition-all"></div>
      <div className="flex flex-col h-[200px] mx-4 my-2 rounded-lg p-2 bg-slate-200 transition-all"></div>
      <div className="flex flex-col h-[200px] mx-4 my-2 rounded-lg p-2 bg-slate-200 transition-all"></div>
    </div>
  );
};

export default ShimmerMenu;
