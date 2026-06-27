import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { client } from "@repo/db/client";

export default function Home() {
  const username = "";

  return (
    <div>
      <h2>Welcome to the Programming World </h2>
    </div>
  );
}
