import UserCard from "./UserCard"

function App() {

  const curruntUser = "Maryam"
  const curruntEmail = "maria@gmail.com"
  return (

    <>
    <UserCard  curruntUser = {curruntUser}
    curruntEmail = {curruntEmail}
    />
    <UserCard  curruntUser = {"Muniira"}
    curruntEmail = {"muniira@gmail.com"}
    />
    <UserCard  curruntUser = {"Najma"}
    curruntEmail = {"najma@gmial.com"}
    />
    </>
  )
}

export default App
