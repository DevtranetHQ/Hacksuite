export const searchingForStyles = {
  control: styles => ({
    ...styles,
    "backgroundColor": "white",
    "paddingTop": 3.5,
    "width": "256px",
    "paddingBottom": 3.5,
    "border": "3px solid #03A9F4",
    "borderRadius": 0,
    "borderTopLeftRadius": 5,
    "borderBottomLeftRadius": 5,
    "marginTop": 2,
    "&:hover": {
      borderColor: "#03A9F4"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  }
};

export const availableForStyles = {
  control: styles => ({
    ...styles,
    "backgroundColor": "white",
    "paddingTop": 3.5,
    "width": "256px",
    "paddingBottom": 3.5,
    "border": "3px solid #03A9F4",
    "borderRadius": 0,
    "marginTop": 2,
    "&:hover": {
      borderColor: "#03A9F4"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
    };
  }
};
