import Filter from "./components/Filter";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <Filter />
    </>
  );
}
