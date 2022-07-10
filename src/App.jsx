import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { TeachersList } from "./components/TeachersList"
import { AppRoutes } from "./routes"

function App() {
  return(
    <Main>
      <Header/>
      <AppRoutes/>
    </Main>
  )
}

export default App
