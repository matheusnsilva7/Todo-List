import Card from "../components/UI/Card";
import Head from "next/head";
import Goals from "../components/goals/Goals";
const achievement = () => {
  return (
    <>
      <Head>
        <title>To do - Goals</title>
      </Head>
      <Card>
        <Goals />
      </Card>
    </>
  );
};

export default achievement;
