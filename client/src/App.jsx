import { Outlet } from "react-router-dom";
import Footer from "./features/Footer/Footer";
import Header from "./features/Header/Header";

function App() {
  return (
    <main className="h-[100vh] w-full bg-[#111111]/40 flex items-center justify-center">
      <div className="relative bg-[#111111] h-[100vh] w-full md:h-[85vh] md:w-[40%] lg:h-[90vh] lg:w-[24%] mx-auto px-5 py-5 text-white md:rounded-[0.7rem] overflow-hidden">
        <Header />
        <div className="h-[80%] overflow-scroll no-scrollbar">
          <Outlet />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
