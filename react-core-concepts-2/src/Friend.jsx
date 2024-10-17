export default function Friend({ friend }) {
  const { username, email } = friend;
  return (
    <div className="single-friend">
      <h3>Name: {username}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
