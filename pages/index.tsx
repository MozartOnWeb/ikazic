import Head from "next/head";

//Import components
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>IKAZIC</title>
        <meta
          name="description"
          content="La meilleure plateforme de streaming au Mali."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <section id="home"></section>
      <section id="about"></section>
      <section id="features"></section>
      <section id="goals"></section>
      <section id="faqs"></section>
      <section id="newsletter"></section>
    </div>
  );
}
