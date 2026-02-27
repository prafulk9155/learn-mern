function UserProfile() {
  return (
    <>
      <h1>This is User Profile component</h1>
      <p>Name: XYX</p>
      <p>Email: xyz@email.com</p>
      <UserAddress />
    </>
  );
}

function UserAddress() {
  return (
    <>
      <p>This is section for user address</p>
      <p>ABC, 123, St-05, 110001</p>
    </>
  );
}

export function ThanksMsg() {
  return <p> This for thanks message section</p>;
}

// only one export default can be defined only
export default UserProfile;
