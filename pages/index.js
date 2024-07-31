import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const session = useSession();
  if (session?.data === null) {
    return <button onClick={signIn}>Sign In</button>;
  }
  return (
    <div className={styles.container}>
      <h1>Auth</h1>
      <Image src={session?.data?.user?.image} width={100} height={100} />
      <div>
        <h2>{session?.data?.user?.name}</h2>
      </div>
      <div>
        <button onClick={signOut}>Logout</button>
      </div>
    </div>
  );
}
