import { HiHome } from "react-icons/hi";
import { Breadcrumb } from "flowbite-react";

const BreadCrumb = () => {
  return (
    <>
      <Breadcrumb className="p-4">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadCrumb;
