import "./App.css";

// const Header = () => {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// };

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}
function App() {
  return (
    <>
      <Header />
      <h3>안녕! 리액트</h3>
    </>
  );
}

export default App;
