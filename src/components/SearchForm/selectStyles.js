export const customStyles = {
  option: (provided) => {
    return {
      ...provided,
      background: "#FFF",
      outline: "none",
      borderRadius: "14px",
      //   border: "1px solid rgba(18, 20, 23, 0.05)",

      fontSize: "18px",
      fontWeight: "400",
      color: "var(--text-rgba)",

      //   backgroundColor: "red",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F7F7FB",
        // color: "red",
        fontWeight: "400",
      },
      textAlign: "left",
    };
  },
  control: (styles) => ({
    ...styles,
    width: "224px",
    color: "red",

    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: " normal",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "none",
    display: "flex",
    flexWrap: "nowrap",
    borderColor: "transparent",
    outline: "transparent",
    paddingLeft: "6px",
    borderRadius: "14px",
    background: "#F7F7FB",
    "&:hover": {
      outline: "none",
    },
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: "#121417",

      padding: "0",
      paddingLeft: "2px",

      "@media screen and (max-width: 767.98px)": {
        paddingLeft: "9px",
      },
    };
  },

  menu: (provided, state) => {
    return {
      ...provided,
      borderRadius: "14px",
      marginTop: "4px",

      border: "1px solid rgba(18, 20, 23, 0.05)",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
      scrollBar: "none",
      "::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
      },
    };
  },
  menuList: (base) => ({
    ...base,

    // 'overflow-y': 'none', // Отключаем прокрутку по вертикали
    "::-webkit-scrollbar": {
      display: "none", // Скрыть скроллбар WebKit
    },
    scrollbarWidth: "none", // Скрыть скроллбар Firefox
    paddingTop: "0px",
    color: "rgba(18, 20, 23, 0.6)",
  }),

  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },

  input: (provided) => {
    return {
      ...provided,
      margin: "0px",

      //   padding: "12px 20px 20px 12px",
      height: "48px",
      //   backgroundColor: "#F7F7FB",
      caretColor: "transparent",
    };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#121417",
      fontSize: "18px",
    };
  },
  dropdownIndicator: (base) => ({
    ...base,
    color: "#121417",
    paddingRight: "18px",
  }),
};

export const customStylesPrice = {
  ...customStyles,
  control: (styles) => ({
    ...styles,
    width: "125px",
    color: "red",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: " normal",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "none",
    display: "flex",
    flexWrap: "nowrap",
    borderColor: "transparent",
    outline: "transparent",
    paddingLeft: "6px",
    borderRadius: "14px",
    background: "#F7F7FB",
    "&:hover": {
      outline: "none",
    },
  }),
};
