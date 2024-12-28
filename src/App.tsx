import Student from "./Student.tsx"


function App() {
  return(
    <>
      <Student name="Tanjir Hasan" age={35} isStudent={false}/>
      <Student name="Rubina Akter" age={26} isStudent={true}/>
      <Student name="Farjana Mim" age={17} isStudent={true}/>
      <Student name="Shahana Sokhi" age={34} isStudent={false}/>
    </>
  );
}

export default App
