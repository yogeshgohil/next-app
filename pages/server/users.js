const Users = (props) => {
  console.log(props);
  return (
    <>
      <h2>User</h2>
      <ol>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { users: data },
  };
};

export default Users;
