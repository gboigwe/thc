import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Course from "./components/Course/Course"
import Category from "./components/Category/Category"
import Coaching from "./components/Coaching/Coaching"
import Platform from "./components/Platform/Platform"
import Student from "./components/Student/Student"
// import Partner from "./components/Partner/Partner"
import Apply from "./components/Apply/Apply"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Course />
      <Category />
      <Coaching />
      <Platform />
      <Student />
      {/* <Partner /> */}
      <Apply />
      <Footer />
    </>
  );
}

export default App;
