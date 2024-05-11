import Navbar from "./components/header/Navbar";
import Profile from "./components/profile/Profile";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <div className="ml-6 mr-7 mt-2">
        <Profile/>
      </div>
    </div>
  );
}
