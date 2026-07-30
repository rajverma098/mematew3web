import React from "react";
import Script from "next/script";
import Head from "next/head";

// Common Styles
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Geekfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      {/* Tawk.to Script */}
      <Script id="tawk-to" strategy="afterInteractive">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/6a69cdcf00c8c61d49f128f4/1jumkntit";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js" />
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js" />
      <Script strategy="beforeInteractive" src="/assets/js/parallax.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/ScrollTrigger.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js" />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      />
      <Script strategy="beforeInteractive" src="/assets/js/ScrollSmoother.min.js" />
      <Script strategy="beforeInteractive" src="/showcase/assets/js/anime.min.js" />
      <Script strategy="lazyOnload" src="/assets/js/imgReveal/demo.js" />
      <Script strategy="lazyOnload" src="/assets/js/scripts.js" />
    </>
  );
}

export default App;