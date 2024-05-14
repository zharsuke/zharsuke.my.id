import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer";
import projectData from "@/data/ProjectData";
import ProjectDetail from "@/components/main/project/ProjectDetail";

interface ProjectDetailPageProps {
  params: {
    project: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";
  const project = projectData.find((item) => item.id === Number(params?.project));

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar hover={hover} />
      <div className="ml-2 mr-2">
        <h1 className="font-bold text-xl mb-2">Detail Project</h1>
        {project ? (
          <ProjectDetail project={project} />
        ) : (
          <p>Project not found</p>
        )}
        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}