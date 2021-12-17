import { getAllDecks } from "../../lib/decks";

export async function getStaticProps() {
  const decks = getAllDecks();
  return {
    props: {
      decks,
    },
  };
}

export default function Home({ decks }) {
  return <pre>{JSON.stringify(decks, undefined, 2)}</pre>;
}
