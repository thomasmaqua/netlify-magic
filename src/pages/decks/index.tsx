import Layout from "../../components/Layout";
import Link from "../../components/Link";
import { getAllDecks } from "../../lib/decks";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from "../../components/Card";

export async function getStaticProps() {
  const decks = getAllDecks();
  return {
    props: {
      decks,
    },
  };
}

export default function Home({ decks }) {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Decks
      </Typography>
      {decks.map(({ id, content }) => (
        <Link href={`decks/${id}`} key={id}>
          <Card card={content.entries.commanders[0]} />
        </Link>
      ))}
    </Layout>
  );
}
