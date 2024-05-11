import Navbar from "./components/header/Navbar";
import Profile from "./components/body/profile/Profile";
import profileData from "./data/ProfileData";

export default function Home() {
  const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 duration-300";
  const { image, name, description, email, github, linkedin, twitter, medium } = profileData;
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar hover={hover}/>
      <div className="ml-2 mr-2">
        <Profile name={name} description={description} email={email} github={github} linkedin={linkedin} twitter={twitter} medium={medium} image={image}/>
      </div>
    </div>
  );
}
