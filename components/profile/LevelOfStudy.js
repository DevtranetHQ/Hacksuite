import { FC, useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { availableFor } from "../../enums/availableFor";
import { styles1 } from "./inputs";

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));

const ValueContainer = ({ children, ...props }) => {
  let [values, input] = children;

  if (Array.isArray(values)) {
    const plural = values.length === 1 ? "" : "s";
    values = `${values.length} item${plural} selected`;
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

export default function AvailableForSelect({}) {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = e => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <>
      <Select
        isMulti
        placeholder="Select what you're open to"
        styles={styles1}
        components={{ ValueContainer, IndicatorSeparator: () => null }}
        options={availableForOpts}
        hideSelectedOptions={false}
        isClearable={true}
        closeMenuOnSelect={false}
        isSearchable={true}
        onChange={handleChange}
        isOptionDisabled={() => (selectedValue.length === 20 ? true : false)}
        // value={availableForOpts.filter(obj => selectedValue.includes(obj.value))}
      />
    </>
  );
}
