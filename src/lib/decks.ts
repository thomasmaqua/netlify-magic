import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "content/decks");

export function getAllDecks() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(dir);
  const allDecksData = fileNames.map((fileName) => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, "");

    // Read markdown file as string
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const content = JSON.parse(fileContents);

    return {
      id,
      content,
    };
  });

  return allDecksData;
}

export function getAllDeckIds() {
  const fileNames = fs.readdirSync(dir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}

export function getDeckData(id) {
  const fullPath = path.join(dir, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const content = JSON.parse(fileContents);

  return {
    id,
    content,
  };
}
