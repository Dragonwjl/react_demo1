import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Table from "./components/table";
import { getLocalStorageData, setLocalStorageData } from "./utils"

class App extends React.Component {
    render() {
        return (
            <div className="todolist">
                <Header />
                <Table />
                <Footer />
            </div>
        )
    }
}

export default App