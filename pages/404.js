import Head from "next/head";

import classes from "../styles/notFound.module.css";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 Page</title>
      </Head>
      <h1 className={classes.tittle}>404 - Page Not Found</h1>
    </>
  );
};

export default Custom404;
