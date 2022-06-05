import { FC, useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { describes } from "../../enums/describes";
import { styles1 } from "./inputs";

const describesOpts = describes.map(level => ({ value: level, label: level }));

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

export default function DescribeSelect({}) {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = e => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <>
      <Select
        isMulti
        styles={styles1}
        placeholder="Tell us who you are"
        components={{ ValueContainer, IndicatorSeparator: () => null }}
        options={describesOpts}
        hideSelectedOptions={false}
        isClearable={true}
        closeMenuOnSelect={false}
        isSearchable={true}
        onChange={handleChange}
        isOptionDisabled={() => (selectedValue.length === 20 ? true : false)}
        // value={describesOpts.filter(obj => selectedValue.includes(obj.value))}
      />
    </>
  );
}
