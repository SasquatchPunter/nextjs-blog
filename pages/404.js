import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{siteTitle} | 404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
