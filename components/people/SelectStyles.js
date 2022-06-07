export const searchingForStyles = {
  placeholder: styles => ({
    ...styles,
    whiteSpace: "nowrap",
    overflow: "hidden"
  }),
  control: styles => ({
    ...styles,
    "backgroundColor": "white",
    "padding": "16px",
    "border": "3px solid #03A9F4",
    "borderRadius": 0,
    "borderTopLeftRadius": "10px",
    "borderBottomLeftRadius": "10px",
    "&:hover": {
      borderColor: "#03A9F4"
    },

    "@media only screen and (max-width: 1280px)": {
      padding: "12px",
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px"
    },
    "@media only screen and (max-width: 1024px)": {
      padding: "8px"
    },
    "@media only screen and (max-width: 428px)": {
      padding: "8px 4px",
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  }
};

export const availableForStyles = {
  placeholder: styles => ({
    ...styles,
    whiteSpace: "nowrap",
    overflow: "hidden"
  }),
  control: styles => ({
    ...styles,
    "backgroundColor": "white",
    "padding": "16px",
    "border": "3px solid #03A9F4",
    "borderRadius": 0,
    "&:hover": {
      borderColor: "#03A9F4"
    },

    "@media only screen and (max-width: 1280px)": {
      padding: "12px"
    },
    "@media only screen and (max-width: 1024px)": {
      padding: "8px"
    },
    "@media only screen and (max-width: 428px)": {
      padding: "8px 4px"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  }
};
