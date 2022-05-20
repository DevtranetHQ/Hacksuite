import { FC } from "react";
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

const availableForOpts = availableFor.map(level => ({ value: level, label: level }));
export const LevelOfStudySelect: FC<{ className?: string }> = props => {
  const { control } = useFormContext<Partial<IUser>>();

  return (
    <Controller
     rules={{max : 5, maxLength: 5}}
      control={control}
      name="levelOfStudy"
      render={({ field }) => (
        <Select<SelectOption, true>
          placeholder="Select what you’re open to"
          isMulti
          className="form-select p-0 m-0 rounded-lg"
          styles={styles}
          components={{ DropdownIndicator }}
          options={availableForOpts}
          value={availableForOpts.filter(({ value }) => field.value?.includes(value))}
          onChange={value => field.onChange(value.map(({ value }) => value))} 
          isOptionDisabled={()=>field.value.length > 4 ? true : false}
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
