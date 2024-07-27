import "swiper/css";
import "swiper/css/navigation";
import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import { useEffect, useState } from "react";
import Head from 'next/head';

// Add the following lines to set the "app element"
if (typeof window !== 'undefined') {
    const Modal = require('react-modal');
    Modal.setAppElement('body');
}

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);

    return (
        <>
            <Head>
                {/* Facebook Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window,document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '2704033396415763');
                        fbq('track', 'PageView');
                        `
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        src={`https://www.facebook.com/tr?id=2704033396415763&ev=PageView&noscript=1`}
                    />
                </noscript>
                {/* End Facebook Pixel Code */}
            </Head>

            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div className="preloader"></div>
            )}
        </>
    );
}

export default MyApp;
