import { Divider } from "@/components/section-divider";
import{About, Intro, Projects} from "@/components/index"


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects/>
    </main>
  )
}
