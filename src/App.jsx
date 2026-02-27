// export fedault us directly used while {} use to export only 
import UserProfile, { ThanksMsg } from "./UserProfile";
export default function App() {
  return (
    <>
      <h1>Main App</h1>
      <UserProfile />
      <ThanksMsg />
    </>
  );
}
