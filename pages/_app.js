import "../styles/theme.css";

export default function App({ Component, pageProps }) {
    return (
        <div className="min-h-screen">
            <Component {...pageProps}/>
        </div>
    );
}
