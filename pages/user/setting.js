import Link from "next/link";
import useSWR from "swr";

export default function Setting() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <ul>
      {data.users &&
        data.users.map((user) => (
          <li key={user.firstName}>
            <Link href={`/user/${user.id}/view`}>{user.firstName}</Link>
          </li>
        ))}
    </ul>
  );
}
