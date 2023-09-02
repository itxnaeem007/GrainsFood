import Select, {
  ControlProps,
  components,
  ClearIndicatorProps,
  StylesConfig,
  MenuListProps,
} from "react-select";
import { ArrowDownIcon } from "@/components/icons";
import { Box, Flex, Text } from ".";
import { CloseIcon } from "@chakra-ui/icons";
import { ReactNode, useState } from "react";
import ImageLoader from "./ImageLoader";
import { ColoredBox } from "../coloredBox";
export interface SearchProps {
  label: string;
  image: string;
  symbol: string;
  icon: ReactNode;
  color?: string;
}
export interface DropDownContentProps {
  type?: string;
}
interface InputProps {
  options: any;
  placeHolder?: string;
  classNamePrefix?: string;
  setData?: React.Dispatch<React.SetStateAction<any>>;
  defaultOptions?: any;
  value?: any;
  gradientClass?: string;
  menuClassName?: string;
  onChange?: (e: any) => void;
}

const SelectSearch = ({
  options,
  placeHolder,
  defaultOptions,
  value,
  menuClassName,
  gradientClass = "select-border",
  classNamePrefix = "",
  onChange,
  ...props
}: InputProps) => {
  const ClearIndicator = (props: ClearIndicatorProps) => {
    return (
      <components.ClearIndicator {...props}>
        <Flex css={{ pl: "$space$5" }}>
          <CloseIcon width={12} height={12} />
        </Flex>
      </components.ClearIndicator>
    );
  };
  const [menuSelected, setMenuSelected] = useState<boolean>(false);

  const MenuList = (props: MenuListProps) => {
    return (
      <Box
        className={`${gradientClass} ${
          menuSelected ? "menu-border-change" : ""
        }`}
      >
        <components.MenuList className={menuClassName} {...props}>
          {props.children}
        </components.MenuList>
      </Box>
    );
  };

  return (
    <Box className={`${gradientClass} ${menuSelected ? "border-change" : ""}`}>
      <Select
        styles={customStyles}
        className="react-select-control"
        classNamePrefix={classNamePrefix}
        options={options}
        isClearable={false}
        // defaultValue={options?.find((option: any) => {
        //   return option.symbol === defaultOptions?.symbol;
        // })}
        onMenuOpen={() => {
          setMenuSelected(true);
        }}
        onMenuClose={() => {
          setMenuSelected(false);
        }}
        value={value ?? ""}
        onChange={(value) => {
          onChange && onChange(value);
        }}
        {...props}
        formatOptionLabel={(option: any) => {
          let CurrencyIcon = null;
          if (option.colors) {
            CurrencyIcon = (
              <Flex
                align={"center"}
                justify={"center"}
                css={{ background: option.colors }}
              >
                {option?.currenyCode.slice(0, 3)}
              </Flex>
            );
          }
          return (
            <>
              <DropDownContent
                color={option?.color}
                image={option.image}
                icon={CurrencyIcon ? CurrencyIcon : option.icon}
                symbol={option.symbol}
                label={option.label}
              />
            </>
          );
        }}
        components={{ Control, ClearIndicator, MenuList }}
        placeholder={placeHolder}
      />
    </Box>
  );
};

export default SelectSearch;

export const DropDownContent = ({
  image,
  label,
  symbol,
  icon,
  color,
}: SearchProps & DropDownContentProps) => {
  return (
    <Flex className="options-wrapper" justify={"between"}>
      <Flex align="center">
        {image && (
          <Flex className="img-wrapper">
            <ImageLoader src={image} />
          </Flex>
        )}
        {icon && icon}
        {symbol && (
          <Text
            variant={"p_md"}
            color={"symbolColor"}
            weight={"normal"}
            css={{ mr: "$2", textTransform: "uppercase" }}
          >
            {symbol}
          </Text>
        )}
        {color && <ColoredBox color={color} />}
        <Text variant={"p_xs"} color={"gray5"} weight={"normal"}>
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};

export const Control = (props: ControlProps) => {
  const value = props.getValue();

  return (
    <components.Control {...props}>
      {props.children}
      {value.length === 0 && (
        <Flex
          className="search"
          css={{
            pr: "8px",
            svg: {
              path: {
                stroke: "$strokeColor",
              },
            },
          }}
        >
          <ArrowDownIcon />
        </Flex>
      )}
    </components.Control>
  );
};

export const customStyles: StylesConfig = {
  control: (provided, data) => ({
    ...provided,
    borderRadius: !data.menuIsOpen
      ? "var(--radii-xlg)"
      : "var(--radii-xlg) var(--radii-xlg) 0px 0px",
    background: "transparent",
    fontWeight: "$regular",
    display: "flex",
    height: "43px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    marginTop: "5px",
    padding: "0 var(--space-3)",
    boxShadow: data.isFocused ? "none" : provided.boxShadow,
    borderColor: data.isFocused ? "#ced4da" : provided.borderColor,
    "&:hover": {
      borderColor: data.isFocused ? "#ced4da" : provided.borderColor,
    },
    "&:focus": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },

    "&.register-search__control ": {
      minHeight: "48px",
      // padding: "4px 8px",
      // background: "var(--colors-bgColor)",
      // ".search": {
      //   svg: {
      //     width: 12,
      //     height: 12,
      //   },
      // },
    },
    "&.txn-select__control": {
      background: "var(--colors-white)",
    },
    "&.offer-select__control": {
      background: "var(--colors-dropdownBg)",
    },
    "@media (min-width: 992px)": {
      // padding: "var(--space-3) var(--space-5)",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
    ".options-wrapper": {
      ".img-wrapper": {
        padding: "4px",
        width: "max-content",
        marginRight: "var(--space-3)",
        img: {
          borderRadius: "50%",
          width: "18px",
          height: "18px",
        },
      },
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#9E9EA6",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    height: "24px",
    margin: 0,
    gap: "0px 7px",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "var(--fontSizes-xs)",
    color: "var(--colors-inputPlaceholder)",
    margin: 0,
    textAlign: "left",
    "&.register-search__placeholder": {
      fontSize: "var(--fontSizes-md)",
    },
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontFamily: "LatoBold",
    fontSize: "var(--fontSizes-sm)",
    color: "var(--colors-defaultText)",
  }),
  clearIndicator: () => ({
    padding: 0,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: "0 0 0 8px",
  }),
  option: (provided, { isDisabled }) => ({
    ...provided,
    display: "inline-flex",
    alignItems: "center",
    gap: "0px 8px",
    padding: "8px 16px",
    "&:hover": {
      background: "var(--colors-selectHover)",
    },
    background: "var(--colors-menuColor)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    borderTop: "1px solid var(--colors-elevation4)",
    ".options-wrapper": {
      width: "100%",
      ".img-wrapper": {
        padding: "4px",
        marginRight: "var(--space-3)",
        img: {
          borderRadius: "50%",
          width: "24px",
          height: "24px",
        },
      },
    },
  }),
  menu: (provided) => ({
    ...provided,
    background: "var(--colors-menuColor)",
    margin: 0,
    boxShadow: "none",
    border: "1px solid var(--colors-textGray6)",
    borderRadius: "0 0 var(--radii-xlg) var(--radii-xlg)",
    zIndex: 9999,
    overflowY: "hidden",
  }),

  menuList: (provided) => ({
    ...provided,
    overflowX: "hidden",
    padding: 0,
    maxHeight: "384px",
    background: "var(--colors-menuColor)",
    marginTop: -1,
    borderTop: "1px solid var(--colors-elevation4)",
    borderRadius: "0 0 var(--radii-xlg) var(--radii-xlg)",
    ".menu-header": {
      padding: "10px 16px",
      pointerEvents: "none",
      textTransform: "uppercase",
      fontFamily: "LatoBold",
      fontSize: "var(--fontSizes-xs)",
      lineHeight: "var(--lineHeights-xs)",
      border: 0,
      color: "var(--colors-secondaryText)",
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
    display: "none",
  }),
};
