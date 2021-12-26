import Header from "./Components/Header";
import Books from "./Components/Books";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddBook } from "./Components/Add-Books";
import { EditBook } from "./Components/EditBook";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/books" component={Books} />
      <Route exact path="/add-book" component={AddBook} />
      <Route exact path="/edit-book/:id" component={EditBook} />
      <Route exact path="/" component={Books} />
    </Router>
  );
}

export default App;
