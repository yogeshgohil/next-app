import { useRouter } from "next/router";
import useSWR from "swr";

const View = () => {
  const route = useRouter();
  console.log(route);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const getUser = (id) => fetcher(`https://dummyjson.com/users/${id}`);
  const { data, error } = useSWR(route.query.id, getUser);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>View file at {route.query.id}</h1>
      <button
        onClick={(e) =>
          route.push({
            pathname: "/user/[id]/setting",
            query: { id: route.query.id },
          })
        }
      >
        Go TO Setting Page
      </button>
      <h3>{data?.firstName}</h3>
      <br />
      <button onClick={() => route.push(`/user/setting`)}>
        Go TO Setting Page
      </button>
    </>
  );
};
export default View;
