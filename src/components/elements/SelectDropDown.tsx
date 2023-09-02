import { useState } from "react";
import Select, { MenuListProps, components } from "react-select";
import { Box } from ".";

export interface DropdownProps {
  value?: string;
  label?: string;
  icon?: string;
}

interface InputProps {
  options: any;
  value?: DropdownProps;
  defaultOptions: DropdownProps;
  gradientClass?: string;
  type?: string;
  onchange?: (e: any) => void;
  className?: string;
  css?: CSS;
}

const SelectDropDown = ({
  defaultOptions,
  value,
  options,
  gradientClass = "select-border",
  onchange,
  className,
  css,
}: InputProps) => {
  const [menuSelected, setMenuSelected] = useState<boolean>(false);

  const MenuList = (props: MenuListProps) => {
    return (
      <Box
        className={`${gradientClass} ${
          menuSelected ? "menu-border-change" : ""
        }`}
      >
        <components.MenuList {...props}>{props.children}</components.MenuList>
      </Box>
    );
  };

  // const DropdownIndicator = (props: DropdownIndicatorProps) => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <ArrowDownHeader width="12" height="12" className="dropdown-icon" />
  //     </components.DropdownIndicator>
  //   );
  // };

  return (
    <Box
      className={`${gradientClass} ${menuSelected ? "border-change" : ""}`}
      css={{ ...css, maxWidth: 464 }}
    >
      <Select
        className={"dropdown-control"}
        classNamePrefix={className ? className : ""}
        styles={customStyles}
        options={options}
        value={value}
        onMenuOpen={() => {
          setMenuSelected(true);
        }}
        onMenuClose={() => {
          setMenuSelected(false);
        }}
        isSearchable={false}
        onChange={(value) => onchange && onchange(value)}
        defaultValue={defaultOptions}
        formatOptionLabel={(option: any) => (
          <DropDownContent
            icon={option.icon}
            value={option.value}
            label={option.label}
          />
        )}
        components={{ MenuList }}
      />
    </Box>
  );
};

export default SelectDropDown;

const DropDownContent = ({ value, icon }: DropdownProps) => (
  <Flex css={{ width: "100%" }}>
    {icon && (
      <Flex className="img-wrapper" css={{ width: "70px" }}>
        <Box
          css={{ width: "100%", mr: "$2" }}
          width="24"
          height="24"
          as={"img"}
          src={icon}
        />
      </Flex>
    )}
    <Flex align="center" css={{ mr: "auto" }}>
      <Box className="option-left">{value}</Box>
    </Flex>
  </Flex>
);

import { StylesConfig } from "react-select";
import { Flex } from ".";
import { CSS } from "@/theme";
const customStyles: StylesConfig = {
  control: (provided, data) => ({
    ...provided,
    border: "1px solid var(--colors-textGray6)",
    minHeight: "46px",

    boxShadow: "none",
    outline: "none",
    color: "#9E9EA6",
    "&:focus": {
      outline: "none",

      boxShadow: "none",
    },
    "&:hover": {
      outline: "none",
      borderColor: "var(--colors-textGray6)",
      boxShadow: "none",
    },
    borderRadius: !data.menuIsOpen
      ? "var(--radii-xlg)"
      : "var(--radii-xlg) var(--radii-xlg) 0px 0px",
    cursor: "pointer",
    width: "100%",
    padding: "var(--space-1) var(--space-5)",
    background: "var(--colors-elevation2)",
    ".dropdown-icon": {
      paddingTop: "2px",
      fill: data.menuIsOpen ? "#00F0FF" : "#B0B4B5",
    },
    "&.nfts-dropdown__control ": {
      padding: "4px 16px",
      minHeight: "32px",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    "&.filter-value": {
      display: "flex",
      alignItems: "center",
      height: "24px",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--colors-textGray7)",

    display: "inline-flex",
    alignItems: "center",
    margin: 0,
    gap: "0px 7px",
    "&.curve__single-value": {
      ".option-left": {
        fontFamily: "LatoBold",
      },
    },
    "&.trading-dropdown__single-value ": {
      ".option-left": {
        fontSize: "var(--fontSizes-sm)",
        lineHeight: "var(--lineHeights-sm)",
      },
    },
    ".option-left,.option-right": {
      fontFamily: "LatoRegular",
      color: "var(--colors-textGray7)",
      fontSize: "var(--fontSizes-lg)",
      lineHeight: "var(--lineHeights-lg)",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: "LatoLight",
    fontSize: "var(--fontSizes-sm)",
    lineHeight: "var(--lineHeights-sm)",
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: "0 0 0 8px",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (provided) => ({
    ...provided,
    display: "inline-flex",
    alignItems: "center",
    gap: "0px 8px",
    borderBottom: "1px solid var(--colors-textGray6) ",
    padding: "8px 16px",
    fontSize: "var(--fontSizes-lg)",
    background: "var(--colors-white)",
    color: "var(--colors-textGray7)",
    // cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    borderTop: "1px solid var(--colors-elevation4)",

    "&:hover": {
      background: "var(--colors-gray50)",
    },
    ".option-left,.option-right": {
      fontFamily: "LatoBold",
      fontSize: "var(--fontSizes-lg)",
      lineHeight: "var(--lineHeights-lg)",
      color: "var(--colors-textGray7)",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0 0 var(--radii-xlg) var(--radii-xlg)",
    margin: 0,
    zIndex: 9,
    boxShadow: "none",
    border: "1px solid var(--colors-textGray6)",
    // minWidth: 150,
    // maxWidth:440,
    width: "100%",
  }),
  menuList: (provided) => ({
    ...provided,
    overflowX: "hidden",
    padding: 0,
    maxHeight: "384px",
    borderRadius: "0 0 var(--radii-xlg) var(--radii-xlg)",
    background: "var(--colors-elevation2)",
    marginTop: -1,
    borderTop: "1px solid var(--colors-elevation4)",
    svg: {
      fontSize: "30px",
    },
    ".nfts-dropdown__option": {
      ".option-left": {
        fontSize: "var(--fontSizes-xxs)",
        lineHeight: "var(--lineHeights-xxxs)",
      },
    },
    ".menu-header": {
      padding: "10px 16px",
      pointerEvents: "none",
      fontFamily: "LatoBold",
      fontSize: "var(--fontSizes-xxs)",
      lineHeight: "var(--lineHeights-xxxs)",
      border: 0,
      color: "var(--colors-secondaryText)",
      textTransform: "uppercase",
    },

    "&::-webkit-scrollbar": {
      width: "2px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#1B1773",
      borderRadius: "20px",
      outline: "0px solid transparent",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
