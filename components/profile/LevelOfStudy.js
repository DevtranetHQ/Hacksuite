import { FC, useState } from "react";
import Select, { components, StylesConfig } from "react-select";
import { availableFor } from "../../enums/availableFor";

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

export default function LevelOfStudySelect({}) {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = e => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <>
      <Select
        isMulti
        className="text-[18px] mt-[1px] p-0 m-0"
        placeholder="Select what you're open to"
        classNamePrefix="react-select"
        components={{ ValueContainer }}
        options={availableForOpts}
        hideSelectedOptions={false}
        isClearable={true}
        closeMenuOnSelect={false}
        isSearchable={true}
        onChange={handleChange}
        isOptionDisabled={() => (selectedValue.length === 20 ? true : false)}
        // value={availableForOpts.filter(obj => selectedValue.includes(obj.value))}
      />
      <style jsx global>{`
        .react-select__placeholder {
          color: #a5a5a5;
        }

        .react-select__control {
          border: 2px solid #c9c9c9;
          border-radius: 8px;
        }

        .react-select__indicator-separator {
          display: none;
          //         align-self: stretch;
          //         background-color: #C9C9C9;
          //         margin-bottom: 0px;
          //         margin-top: 0px;
          //         box-sizing: border-box;
          //         width: 1px;
        }

        .react-select__dropdown-indicator {
          background-image: url("data:image/svg+xml,%3Csvg width='25' height='22' viewBox='0 0 25 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4019 21.5542L0.267673 0.508415L24.5361 0.508415L12.4019 21.5542Z' fill='%238A8A8A'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          margin-right: 12px;
        }

        .react-select__dropdown-indicator > svg {
          display: none;
        }
      `}</style>
    </>
  );
}
