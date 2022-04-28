import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import CafeList from "../components/CafeList";
import Featured from "../components/Featured";
import Top from "../components/Top";

export default function Home({ cafeList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cafe Lynx in NY</title>
        <meta name="description" content="Good coffee makes your day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <CafeList cafeList={cafeList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get(`${process.env.URL}/api/products`);
  return {
    props: {
      cafeList: res.data,
      admin,
    },
  };
};
