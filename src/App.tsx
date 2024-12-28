import Student from "./Student.tsx"


function App() {
  return(
    <>
      <Student name="Tanjir Hasan" age="35" isStudent={false}/>
      <Student name="Rubina Akter" age="26" isStudent={true}/>
    </>
  );
}

export default App
