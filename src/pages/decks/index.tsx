import Layout from "../../components/Layout";
import Link from "../../components/Link";
import { getAllDecks } from "../../lib/decks";

import Box from "@mui/material/Box";
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
      <Box>
        {decks.map(({ id, content }) => (
          <Box component="span" m={2} key={id}>
            <Link href={`decks/${id}`}>
              <Card card={content.entries.commanders[0]} />
            </Link>
          </Box>
        ))}
      </Box>
    </Layout>
  );
}
