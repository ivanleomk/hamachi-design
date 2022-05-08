import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GenericLayout = ({ children }) => {
  return (
    <>
      {/* Google Analytics Tracking */}
      <Head>
        <meta
          name="google-site-verification"
          content="XR11waWayMIN9jN3myE-wg97dJD-JsSY6zzOwzQRIoI"
        />
      </Head>

      <Script
        id="Google Tag Manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-52ZBSDX');`,
        }}
      />
      <body>
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52ZBSDX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </>
  );
};

export default GenericLayout;
