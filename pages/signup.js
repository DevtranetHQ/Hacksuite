import LoggedOutNav from "../components/navbars/LoggedOutNav";

const API = "http://localhost:4000";

export default function SignUp(props) {
    const endpoint = "auth/register";
    const method = "POST";

    return (
        <div className="h-screen">
            <LoggedOutNav />
            <div className="h-full 
                            bg-[url('../public/assets/auth/auth-background.svg')] bg-cover
                            xl:bg-none xl:w-1/2">
                <h1 className="heading text-center mb-10">SIGN UP</h1>
                <form endpoint={endpoint} method={method} className="mx-4">
                    <div className="w-full
                                    xl:grid xl:grid-cols-2 xl:gap-8 xl:mb-12">
                        <section>
                            <div className="mb-8">
                                <label className="form-label" htmlFor="firstName">
                                    First name
                                </label>
                                <input
                                    className="form-input"
                                    name="lastName"
                                    id="firstName"
                                    type="text"
                                    maxLength="50"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="lastName">
                                    Last name
                                </label>
                                <input
                                    className="form-input"
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    maxLength="50"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </section>
                        <section>
                            <div className="mb-8">
                                <label className="form-label" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    type="email"
                                    maxLength="80"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    type="password"
                                    minLength="6"
                                    maxLength="100"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </section>
                    </div>
                    <button className="button-small button-deep-sky-blue w-full mt-12 
                                        xl:w-64 xl:m-auto">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}
