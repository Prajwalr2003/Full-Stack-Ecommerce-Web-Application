import { Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

function Filter() {
  return (
    <Sidebar className="hidden md:block">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Logo href="#">Filters</Sidebar.Logo>
          <Sidebar.Collapse
            label="Brand"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">Products</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#">Price</Sidebar.Item>
          <Sidebar.Collapse
            label="Gender"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">Male</Sidebar.Item>
            <Sidebar.Item href="#">Female</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            label="Color"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">Black</Sidebar.Item>
            <Sidebar.Item href="#">White</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            label="Size"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item href="#">sm</Sidebar.Item>
            <Sidebar.Item href="#">md</Sidebar.Item>
            <Sidebar.Item href="#">lg</Sidebar.Item>
            <Sidebar.Item href="#">xl</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Filter;
