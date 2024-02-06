'use client';

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <main data-testid={"DefualtPage-testId"}>
      HELLO WORLD
    </main>
  )
}
