import "swiper/css";
import "swiper/css/navigation";

import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div className="preloader"></div>
        )}
    </>)
}

export default MyApp