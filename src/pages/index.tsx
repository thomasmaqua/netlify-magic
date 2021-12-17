import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import Link from "../components/Link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Typography>
      <Typography paragraph>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Typography>
      <Typography paragraph>
        <Link href="/decks" color="secondary">
          Go to the decks page
        </Link>
      </Typography>
    </Layout>
  );
};

export default Home;
