// component
import Navbar from "../components/header/Navbar";
import Profile from "../components/main/profile/Profile";
import Footer from "../components/footer/Footer";
import About from "../components/main/about/About";
import ExperienceHome from "../components/main/experience/ExperienceHome";
import ProjectHome from "../components/main/project/ProjectHome";
import PostHome from "../components/main/post/PostHome";
import Link from "next/link";

// data
import profileData from "../data/ProfileData";
import aboutData from "../data/AboutData";

export default function Home() {

  const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";
  const { image, name, description, email, github, linkedin, twitter, medium, resume } = profileData;
  const { about } = aboutData;

  return (
    <div className="max-w-screen-lg mx-auto">

      {/* header */}
      <Navbar hover={hover} />

      {/* main */}
      <div className="ml-2 mr-2">
        <Profile name={name} description={description} email={email} github={github} linkedin={linkedin} twitter={twitter} medium={medium} image={image} hover={hover} resume={resume} />

        <h1 className="mt-10 font-bold text-xl mb-2">About Me</h1>
        <About about={about} />

        <h1 className="mt-10 font-bold text-xl mb-2">Experiences</h1>
        <ExperienceHome/>
        <Link className={`font-bold ${hover}`} href={'/experiences'}>See More...</Link>

        <h1 className="mt-10 font-bold text-xl mb-2">Projects</h1>
        <ProjectHome />
        <Link className={`font-bold ${hover}`} href={'/projects'}>See More...</Link>

        <h1 className="mt-10 font-bold text-xl mb-2">Posts</h1>
        <PostHome />
        <Link className={`font-bold ${hover}`} href={'/posts'}>See More...</Link>


        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
