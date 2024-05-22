
import Sections from "../components/Sections"
import Navbar from "../components/Navbar"; 

export default function Home() {
  return (
    <main className="flex flex-col bg-[#F9F5F6]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Sections />       
      </div>
    </main>
  );
}
