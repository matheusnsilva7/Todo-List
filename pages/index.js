import MainPage from "../components/Home/MainPage";
import Head from "next/head";
import BtnForm from "../components/Form/BtnForm";
import Card from "../components/UI/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>to do - Home</title>
      </Head>
      <Card>
        <MainPage />
        <BtnForm />
      </Card>
    </>
  );
}
