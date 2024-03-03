

function App() {

  const a = 10;
  const firstName="Haritha";
  const MiddleName = "Hirushan";
  const  LastName = "ilangasinghe";
  const age = "22";
  const country = "Sri lanka";


  return (
    <>
    <h1 className="heading">React by Haritha ilangasinghe</h1>
   
   <p> {20+20}% for jsx</p>
   <p>{a}</p>
   <p>{a>50 ? "greater " :"lower" }</p>

   <br></br>
   <br></br>
   
      <h2>My details</h2>
    <p> Full name: {firstName} {MiddleName} {LastName}</p>
    <p>Age : {age}</p>
    <p>country: {country}</p>

    </>
  )
}

export default App
