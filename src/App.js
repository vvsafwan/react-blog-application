import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import Form from "./components/Form";
import Home from "./components/Home";
import Addblog from "./components/addblog";
import RegisterForm from "./components/RegisterForm";

const queryClient = new QueryClient()

function App() {
  return (
   <QueryClientProvider client={queryClient}>
     <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
   </QueryClientProvider>
  );
}

export default App;
