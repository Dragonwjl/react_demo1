import Header from "./common/header";
import { Provider } from "react-redux"
import store from "./redux/store";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/write" exact element={<Write />} />
        </Routes>



      </Provider>
    </div>
  );
}

export default App;
