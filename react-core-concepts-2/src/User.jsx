export default function User({ user }) {
  const { name, email } = user;
  return (
    <div className="single-friend">
      <h3>Name: {name}</h3>
      <p>Mail: {email}</p>
    </div>
  );
}

// This component accepts an array of users as a prop and renders each user's name.
