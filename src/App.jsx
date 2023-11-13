import { ContactSection } from "./components/sections";

export default function App() {
  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <main className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden">
        <ContactSection />
      </main>
    </div>
  );
}
