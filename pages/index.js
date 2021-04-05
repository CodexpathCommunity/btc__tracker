import Head from "next/head";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";

export default function Home({ filteredCoins }) {
  console.log(filteredCoins);
  return (
    <div>
      <Head>
        <title>Btc Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar />
      {/* {filteredCoins.map((coin) => (
        <h2>coin.id</h2>
      ))} */}
      {/* <CoinList filteredCoins={filteredCoins} /> */}
    </div>
  );
}

export const getServerSdeProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
