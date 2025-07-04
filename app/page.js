"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("Hello, world!222223334455");
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/blog">blogs</Link>
    </>
  );
}
