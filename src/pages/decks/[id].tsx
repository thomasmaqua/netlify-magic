import Layout from "../../components/Layout";
import { getAllDeckIds, getDeckData } from "../../lib/decks";

export default function Deck({ deck }) {
  return (
    <Layout>
      <pre>{JSON.stringify(deck, undefined, 2)}</pre>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllDeckIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const deck = getDeckData(params.id);
  return {
    props: {
      deck,
    },
  };
}
