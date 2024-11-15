import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import Books from "./components/pages/backend/books/Books";
import Settings from "./components/pages/backend/settings/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/storeContext";
import Bestsellers from "./components/pages/backend/bestsellers/Bestsellers";
import Transaction from "./components/pages/backend/transaction/Transaction";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin/books' element={<Books />} />
            <Route path='/admin/bestsellers' element={<Bestsellers />} />
            <Route path='/admin/transaction' element={<Transaction />} />
            <Route path='/admin/settings' element={<Settings />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
