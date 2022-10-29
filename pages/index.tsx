import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IKAZIC</title>
        <meta
          name="description"
          content="La meilleure plateforme de streaming au Mali."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
