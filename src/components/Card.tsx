import Image from "next/image";
import shimmer from "../utils/shimmer";

export default function Card({ card }) {
  return (
    <Image
      src={card.card_digest.image_uris.front}
      alt={card.card_digest.name}
      width={245}
      height={341}
      placeholder="blur"
      blurDataURL={shimmer}
    />
  );
}
