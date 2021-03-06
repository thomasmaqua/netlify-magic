import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Layout from "../../components/Layout";
import { getAllDeckIds, getDeckData } from "../../lib/decks";
import Card from "../../components/Card";

export default function Deck({ deck }) {
  return (
    <Layout>
      <Typography variant="h2" component="h2" gutterBottom>
        Commanders
      </Typography>
      <Box>
        {deck.content.entries.commanders
          .filter((card) => card.card_digest)
          .map((card) => (
            <Box component="span" m={2} key={card.card_digest.id}>
              <Card card={card} />
            </Box>
          ))}
      </Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Lands
      </Typography>
      <Box>
        {deck.content.entries.lands
          .filter((card) => card.card_digest)
          .map((card) => (
            <Box component="span" m={2} key={card.card_digest.id}>
              <Card card={card} />
            </Box>
          ))}
      </Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Nonlands
      </Typography>
      <Box>
        {deck.content.entries.nonlands
          .filter((card) => card.card_digest)
          .map((card) => (
            <Box component="span" m={2} key={card.card_digest.id}>
              <Card card={card} />
            </Box>
          ))}
      </Box>
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
