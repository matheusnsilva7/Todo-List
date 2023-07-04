import Head from "next/head";
import Goals from "../components/goals/Goals";
const achievement = () => {
  return (
    <>
      <Head>
        <title>To do - Goals</title>
      </Head>
      <Goals />
    </>
  );
};

export default achievement;
