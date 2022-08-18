import { router } from "@trpc/server";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "@/schema/user.schema";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
};

export default Home;
