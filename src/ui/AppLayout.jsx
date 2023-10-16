import MainContent from "./MainContent";
import Nav from "./Nav";

function AppLayout() {
  return (
      <section className="relative">
      <Nav />
      <MainContent/>
      </section>
  )
}

export default AppLayout