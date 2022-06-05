import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select, { components, StylesConfig } from "react-select";
import { Icon } from "@iconify/react";
import { skillsAndInterests, describes, countryNames, genders } from "../../enums";
import { availableFor } from "../../enums/availableFor";
import { IProfile } from "../../server/modules/social/profile.model";

type SelectOption = { value: string; label: string; color?: string };

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="bxs:down-arrow" color="#8a8a8a" width={15} height={20} inline={true} />
    </components.DropdownIndicator>
  );
};

const styles: StylesConfig<SelectOption> = {
  control: provided => ({
    ...provided,
    border: 0,
    outline: "none",
    boxShadow: "none"
  }),
  option: provided => ({
    ...provided,
    "&:hover": {
      backgroundColor: "#03A9F4",
      color: "white"
    }
    // "padding": 3
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    "color": data.color,
    ":hover": {
      backgroundColor: "#03A9F4",
      color: "white"
    }
  })
};

export const styles1: StylesConfig<SelectOption> = {
  control: provided => ({
    ...provided,
    "appearance": "none",
    "fontSize": "1.125rem" /* 18px */,
    "lineHeight": "1.25rem" /* 20px */,
    "color": "#6E7180",
    "backgroundColor": "white",
    "border": "2px solid #C9C9C9",
    "width": "100%",
    // padding: "0.5rem 0.75rem",
    "padding": "0.25rem 0.27rem",
    "marginTop": "0.25rem",
    "borderRadius": "0.5rem",
    "outline": "none !important",
    "@media only screen and (max-width: 428px)": {
      padding: "0.25rem 0.1rem",
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    "&:hover": {
      backgroundColor: "#03A9F4",
      color: "white"
    }
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    "color": data.color,
    ":hover": {
      backgroundColor: "#03A9F4",
      color: "white"
    }
  }),
  dropdownIndicator: (prevStyle, state) => ({
    ...prevStyle,
    "backgroundImage": `url("data:image/svg+xml,%3Csvg width='21' height='25' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 16L0.406734 0.25L18.5933 0.25L9.5 16Z' fill='%238A8A8A'/%3E%3C/svg%3E")`,
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "14.5px",
    "width": "0",
    "marginRight": "9px",
    "color": "#8A8A8A",
    "&:hover": {
      color: "#8A8A8A"
    }
  })
};

const skillsAndInterestsOpts = skillsAndInterests.map(skill => ({ value: skill, label: skill }));
export const SkillsAndInterestSelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IProfile>>();

  return (
    <Controller
      control={control}
      name="skills"
      render={({ field }) => (
        <Select<SelectOption, true>
          placeholder="Select your skills and interests"
          isMulti
          components={{ IndicatorSeparator: () => null }}
          styles={styles1}
          options={skillsAndInterestsOpts}
          value={skillsAndInterestsOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))}
          {...props}
        />
      )}
    />
  );
};

const describeOpts = describes.map(describe => ({ value: describe, label: describe }));
export const DescribeSelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IProfile>>();

  return (
    <Controller
      control={control}
      name="describe"
      render={({ field }) => (
        <Select<SelectOption, true>
          isMulti
          placeholder="Tell us who you are"
          styles={styles1}
          components={{ IndicatorSeparator: () => null }}
          options={describeOpts}
          value={describeOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))}
          isOptionDisabled={() => (field.value?.length > 4 ? true : false)}
          {...props}
        />
      )}
    />
  );
};

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
export const AvailableForSelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IProfile>>();

  return (
    <Controller
      rules={{ max: 5, maxLength: 5 }}
      control={control}
      name="availableFor"
      render={({ field }) => (
        <Select<SelectOption, true>
          placeholder="Select what you’re open to"
          isMulti
          styles={styles1}
          components={{ IndicatorSeparator: () => null }}
          options={availableForOpts}
          value={availableForOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))}
          isOptionDisabled={() => (field.value?.length > 4 ? true : false)}
          {...props}
        />
      )}
    />
  );
};

const countryOpts = countryNames.map(level => ({ value: level, label: level }));
export const CountrySelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IProfile>>();

  return (
    <Controller
      control={control}
      name="countryOfResidence"
      render={({ field }) => (
        <Select<SelectOption, false>
          placeholder="Select country"
          styles={styles1}
          components={{ IndicatorSeparator: () => null }}
          options={countryOpts}
          value={{ value: field.value, label: field.value }}
          onChange={({ value }) => field.onChange(value)}
          {...props}
        />
      )}
    />
  );
};

const genderOpts = genders.map(level => ({ value: level, label: level }));
export const GenderSelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IProfile>>();

  return (
    <Controller
      control={control}
      name="gender"
      render={({ field }) => (
        <Select<SelectOption, false>
          placeholder="Select gender"
          styles={styles1}
          components={{ IndicatorSeparator: () => null }}
          options={genderOpts}
          value={{ value: field.value, label: field.value }}
          onChange={({ value }) => field.onChange(value)}
          {...props}
        />
      )}
    />
  );
};
/*
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

export const LevelOfStudySelect: FC<{ className?: string }> = props => {
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
};
*/
