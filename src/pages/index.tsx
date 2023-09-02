import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddharth Vaishnav</title>
        <meta name="description" content="Siddharth Vaishnav" />
        <meta name="og:title" content="Siddharth Vaishnav" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}
