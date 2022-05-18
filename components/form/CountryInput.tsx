import { forwardRef } from "react";
import { countryNames } from "../../enums/countryNames";

const CountryInput = forwardRef<HTMLSelectElement>(function CountryInputComponent(
  props: JSX.IntrinsicElements["select"],
  ref
) {
  return (
    <select
      className="form-select rounded-lg"
      id="countryOfResidence"
      name="countryOfResidence"
      ref={ref}
      {...props}>
      <option value="" disabled>
        Select country
      </option>
      {countryNames.map(country => (
        <option key={country} value={country}>
          {" "}
          {country}{" "}
        </option>
      ))}
    </select>
  );
});

export default CountryInput;
