import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select, { components, StylesConfig } from "react-select";
import { Icon } from "@iconify/react";
import { IUser } from "../../server/modules/auth/user.model";
import { skillsAndInterests, describes, levelsOfStudy, countryNames, genders } from "../../enums";
import { availableFor } from "../../enums/availableFor";

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

const skillsAndInterestsOpts = skillsAndInterests.map(skill => ({ value: skill, label: skill }));
export const SkillsAndInterestSelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
      control={control}
      name="skills"
      render={({ field }) => (
        <Select<SelectOption, true>
          isMulti
          className="form-select p-0 m-0 rounded-lg"
          components={{ DropdownIndicator }}
          styles={styles}
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
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
      control={control}
      name="describe"
      render={({ field }) => (
        <Select<SelectOption, true>
          isMulti
          placeholder="Tell us who you are"
          className="form-select p-0 m-0 rounded-lg"
          styles={styles}
          components={{ DropdownIndicator }}
          options={describeOpts}
          value={describeOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))}
          isOptionDisabled={()=>field.value.length > 4 ? true : false}
          {...props}
        />
      )}
    />
  );
};

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

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
export const LevelOfStudySelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
     rules={{max : 5, maxLength: 5}}
      control={control}
      name="levelOfStudy"
      render={({ field }) => (
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

          value={availableForOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))} 
          isOptionDisabled={()=>field.value.length === 20 ? true : false}
          {...props}
        />
        
      )}
    />
  );
};

const countryOpts = countryNames.map(level => ({ value: level, label: level }));
export const CountrySelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
      control={control}
      name="countryOfResidence"
      render={({ field }) => (
        <Select<SelectOption, false>
          className="form-select p-0 m-0 rounded-lg"
          styles={styles}
          components={{ DropdownIndicator }}
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
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
      control={control}
      name="gender"
      render={({ field }) => (
        <Select<SelectOption, false>
          className="form-select p-0 m-0 rounded-lg"
          styles={styles}
          components={{ DropdownIndicator }}
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
