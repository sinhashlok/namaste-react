import User from "./User";

const About = () => {
  
  return (
    <div className="flex flex-col mx-[280px] mt-10 max-md:mx-8">
        <h1 className="text-3xl font-bold mb-2 max-md:text-xl">About</h1>
        <User email="shlokjp@gmail.com"/>
    </div>
  )
}

export default About;