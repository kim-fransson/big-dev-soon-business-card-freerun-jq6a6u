import { ContactSection } from "./components/sections";
import profileImage from "./assets/images/user-photo.jpg";

export default function App() {
  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <main className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden relative">
        <img
          className="absolute object-cover top-8 left-72 w-[300px] h-[475px]"
          src={profileImage}
          alt=""
        />
        <ContactSection />
      </main>
    </div>
  );
}
