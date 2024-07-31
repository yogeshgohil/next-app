const UserData = (props) => {
  console.log(props);

  return (
    <>
      <div>
        <h1>Static Page</h1>
        <ul>
          {props?.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { users: data } };
};
export default UserData;
