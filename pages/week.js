import Head from "next/head";
import Week from "../components/Week/Week";

const calendar = () => {
  return (
    <>
      <Head>
        <title>Week</title>
      </Head>
      <Week />
    </>
  );
};

export default calendar;
