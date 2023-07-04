import MainPage from "../components/Home/MainPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>to do - Home</title>
      </Head>
      <div>
        <MainPage />
      </div>
    </>
  );
}
