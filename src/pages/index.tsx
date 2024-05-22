
import Sections from "../components/Sections"
import Navbar from "../components/Navbar"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F5F6]">
      <Navbar />
      <div className="container mx-auto px-14 py-20">
        <Sections />       
      </div>
    </main>
  );
}
