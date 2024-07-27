import Head from "next/head";
import React from "react";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Trust Visa, a visa partner you can trust"}</title>
        <meta name="description" content="Your Trusted Visa Partner Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws. At Trust Visa, we take pride in protecting your Canadian future with our Regulated Canadian Immigration Consultants (RCICs). licensed Canadian immigration." />
        <meta name="keywords" content="Trusted Visa, Immigrating to Canada, Canadian Immigration Consultants, Canadian immigration." />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />

        <meta name="facebook-domain-verification" content="m2260313llwid2j16stvy0wu8odxr3" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NTB8KB66Y7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NTB8KB66Y7');
            `,
          }}
        />
      </Head>
    </>
  );
};

export default PageHead;
