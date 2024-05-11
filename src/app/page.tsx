// component
import Navbar from "./components/header/Navbar";
import Profile from "./components/main/profile/Profile";
import Footer from "./components/footer/Footer";
import About from "./components/main/about/About";

// data
import profileData from "./data/ProfileData";
import aboutData from "./data/AboutData";

export default function Home() {
  
  const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";
  const { image, name, description, email, github, linkedin, twitter, medium } = profileData;
  const { about } = aboutData;

  return (
    <div className="max-w-screen-lg mx-auto">

      {/* header */}
      <Navbar hover={hover} />

      {/* main */}
      <div className="ml-2 mr-2">
        <Profile name={name} description={description} email={email} github={github} linkedin={linkedin} twitter={twitter} medium={medium} image={image} hover={hover} />

        <h1 className="mt-10 font-bold text-xl mb-2">About Me</h1>
        <About about={about}/>
        <h1 className="mt-10 font-bold text-xl mb-2">Experiences</h1>
        <h1 className="mt-10 font-bold text-xl mb-2">Projects</h1>
        <h1 className="mt-10 font-bold text-xl mb-2">Posts</h1>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
