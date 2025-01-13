import Sidebar from "../adminComponents/Sidebar";
const Container = ({ children }) => {
  return (
    <>
      <div className="bg-slate-900 text-white p-2 w-60 min-h-screen px-4 pt-16 fixed z-30 min-w-72">
        <Sidebar></Sidebar>
      </div>
      <div
        className={`flex justify-end dark:bg-black dark:text-white min-h-screen`}
      >
        <div className="w-[80%] h-full pt-16">{children}</div>
      </div>
    </>
  );
};

export default Container;
