import React, { ReactNode } from "react";
import Head from "next/head";
// import Header from "./Header";
// import Footer from "./Footer";
type Props = {
  children?: ReactNode;
  title?: string;
  ogImage?: string;
  ogURL?: string;
  ogDescription?: string;
  activeLink?: string;
  type?: string;
  showHeader?: boolean;
  showFooter?: boolean;
};

const Layout = ({
  children,
  title = "White Cloak Technologies Inc.",
  ogImage,
  ogURL,
  ogDescription,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={ogImage ? ogImage : "/images/logo-white.png"}
      />
      <meta property="og:url" content={ogURL} />
      <meta
        property="og:description"
        content={
          ogDescription
            ? ogDescription
            : "JY Fernandez is a software engineer. He's deeply passionate about turning wireframes into functional applications. He also love learning about data science and spending much of his spare time learning about data visualization and machine learning algorithms."
        }
      />

      <meta
        name="description"
        content="JY Fernandez is a software engineer. He's deeply passionate about turning wireframes into functional applications. He also love learning about data science and spending much of his spare time learning about data visualization and machine learning algorithms."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/images/logo-white.png" rel="icon" />
      <meta name="theme-color" content="#000" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
      />
    </Head>
    {/* {showHeader !== false && <Header activeLink={activeLink} type={type} />} */}
    <div id="page-content">{children}</div>
    {/* {showFooter !== false && <Footer />} */}
  </div>
);

export default Layout;
