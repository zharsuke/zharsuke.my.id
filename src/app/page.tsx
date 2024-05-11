import Navbar from "./components/header/Navbar";
import Profile from "./components/profile/Profile";
import profileData from "./data/ProfileData";

export default function Home() {
  const { name, description, email, github, linkedin, twitter, medium } = profileData;
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <div className="ml-6 mr-7 mt-2">
        <Profile name={name} description={description} email={email} github={github} linkedin={linkedin} twitter={twitter} medium={medium}/>
      </div>
    </div>
  );
}
