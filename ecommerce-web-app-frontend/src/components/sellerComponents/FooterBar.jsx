import { Footer } from "flowbite-react";

const FooterBar = () => {
  return (
    <>
      <Footer container className="rounded-none dark:bg-slate-900">
        <div className="w-full text-center ml-72">
          <Footer.Copyright href="#" by="Prajwal Rangari" year={2025} />
        </div>
      </Footer>
    </>
  );
};

export default FooterBar;
