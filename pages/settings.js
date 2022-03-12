import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import DashNav from "../components/dash/DashNav";
import Avatar from "../components/Avatar";

// TODO: Remove test file
import profileImage from "../public/assets/TEST/profile.jpg";

export default function Settings() {
    // TODO: Get server-side props and fill these in with initial states so if user doesn't change value, it won't change when submitted to database
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [receiveEmails, setRecieveEmails] = useState(false);
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        intlTelInput(document.querySelector("#phoneNumber"), {
            customContainer: "!block",
        });
    }, []);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/settings" />
            </div>
            <div className="col-span-10 p-10 relative">
                <div className="flex items-center justify-center pb-10">
                    <h1 className="ml-auto title">Account Settings</h1>
                    <div className="ml-auto">
                        <svg
                            className="cursor-pointer inline fill-deep-sky-blue mx-2"
                            width="32"
                            height="41"
                            viewBox="0 0 32 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1.58399 25.5685C2.37965 28.5387 3.86354 31.2797 5.91552 33.5698C7.96751 35.8598 10.5299 37.6345 13.3953 38.7501C16.2607 39.8657 19.3485 40.2909 22.4087 39.9912C25.469 39.6916 28.4157 38.6755 31.0102 37.0253C26.8461 36.8474 22.8473 35.3456 19.5955 32.7383C16.3438 30.1311 14.0087 26.5543 12.93 22.5284C11.8512 18.5024 12.0851 14.2373 13.5975 10.3535C15.11 6.46962 17.8221 3.16962 21.3395 0.933495C18.2674 0.801644 15.2075 1.39505 12.4074 2.66568C9.60729 3.9363 7.14576 5.84843 5.22208 8.24726C3.29839 10.6461 1.96662 13.4642 1.33457 16.4734C0.70252 19.4827 0.787965 22.5984 1.58399 25.5685Z" />
                        </svg>
                        <Link href="/notifications">
                            <svg
                                className="cursor-pointer inline fill-deep-sky-blue mx-2"
                                width="37"
                                height="43"
                                viewBox="0 0 37 43"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.5833 38.125H22.4167C22.4167 40.2792 20.6542 42.0417 18.5 42.0417C16.3458 42.0417 14.5833 40.2792 14.5833 38.125ZM36.125 34.2084V36.1667H0.875V34.2084L4.79167 30.2917V18.5417C4.79167 12.4709 8.70833 7.18335 14.5833 5.42085V4.83335C14.5833 2.67919 16.3458 0.916687 18.5 0.916687C20.6542 0.916687 22.4167 2.67919 22.4167 4.83335V5.42085C28.2917 7.18335 32.2083 12.4709 32.2083 18.5417V30.2917L36.125 34.2084ZM28.2917 18.5417C28.2917 13.0584 23.9833 8.75002 18.5 8.75002C13.0167 8.75002 8.70833 13.0584 8.70833 18.5417V32.25H28.2917V18.5417Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <Avatar image={profileImage} />
                <button className="button-small button-deep-sky-blue flex gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.50016 15.6667V8.66667H0.833496L9.00016 0.5L17.1668 8.66667H12.5002V15.6667H5.50016ZM0.833496 20.3333V18H17.1668V20.3333H0.833496Z"
                            fill="white"
                        />
                    </svg>
                    <span className="mt-1.5">Upload a picture</span>
                </button>
                <div className="my-5">
                    <form className="bg-transparent pl-0">
                        <h2 className="mb-5 subheadline">
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="firstName"
                                >
                                    First name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    placeholder="John"
                                    id="firstName"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="lastName"
                                >
                                    Last name
                                </label>
                                <input
                                    autoComplete="off"
                                    className="form-input"
                                    placeholder="Doe"
                                    id="lastName"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="form-label" htmlFor="email">
                                Email address
                            </label>
                            <input
                                autoComplete="off"
                                className="form-input"
                                placeholder="johndoe@thedynamics.com"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="form-label" htmlFor="phoneNumber">
                                Phone number
                            </label>
                            <input
                                autoComplete="off"
                                className="form-input"
                                id="phoneNumber"
                                type="tel"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="password"
                                    type="password"
                                />
                                <p className="caption xs mt-1.5">
                                    Leave blank if you don't want to change your
                                    password
                                </p>
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="passwordConfirmation"
                                >
                                    Password confirmation
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="passwordConfirmation"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="form-checkbox mb-10">
                            <input id="checkbox" type="checkbox" />
                            <label htmlFor="checkbox">
                                Notify me about upcoming events & news
                            </label>
                        </div>
                        <h2 className="mb-5 subheadline">
                            Demographic Information
                        </h2>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-10">
                            <div>
                                <label className="form-label" htmlFor="dob">
                                    Date of birth
                                </label>
                                <input
                                    className="form-input"
                                    id="dob"
                                    type="date"
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="form-select" id="gender">
                                    <option selected>Prefer not to say</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label" htmlFor="country">
                                    Country of residence
                                </label>
                                <CountryInput />
                            </div>
                        </div>
                        <h2 className="mb-5 subheadline">Work and Education</h2>
                        <div className="grid grid-cols-2 gap-10 mb-5">
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="password"
                                    type="password"
                                />
                                <p className="caption xs mt-1.5">
                                    Leave blank if you don't want to change your
                                    password
                                </p>
                            </div>
                            <div>
                                <label
                                    className="form-label"
                                    htmlFor="passwordConfirmation"
                                >
                                    Password confirmation
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="*********"
                                    id="passwordConfirmation"
                                    type="password"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function CountryInput() {
    return (
        <select className="form-select" id="country">
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">
                British Indian Ocean Ter
            </option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
                Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Island">Cocos Island</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote DIvoire">Cote DIvoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaco">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Ter">French Southern Ter</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Great Britain">Great Britain</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea North">Korea North</option>
            <option value="Korea Sout">Korea South</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Midway Islands">Midway Islands</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nambia">Nambia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherland Antilles">Netherland Antilles</option>
            <option value="Netherlands">Netherlands (Holland, Europe)</option>
            <option value="Nevis">Nevis</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau Island">Palau Island</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Phillipines">Philippines</option>
            <option value="Pitcairn Island">Pitcairn Island</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of Montenegro">
                Republic of Montenegro
            </option>
            <option value="Republic of Serbia">Republic of Serbia</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="St Barthelemy">St Barthelemy</option>
            <option value="St Eustatius">St Eustatius</option>
            <option value="St Helena">St Helena</option>
            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
            <option value="St Lucia">St Lucia</option>
            <option value="St Maarten">St Maarten</option>
            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
            <option value="St Vincent & Grenadines">
                St Vincent & Grenadines
            </option>
            <option value="Saipan">Saipan</option>
            <option value="Samoa">Samoa</option>
            <option value="Samoa American">Samoa American</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tahiti">Tahiti</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Erimates">United Arab Emirates</option>
            <option value="United States of America">
                United States of America
            </option>
            <option value="Uraguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City State">Vatican City State</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
            <option value="Wake Island">Wake Island</option>
            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
            <option value="Yemen">Yemen</option>
            <option value="Zaire">Zaire</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
    );
}
