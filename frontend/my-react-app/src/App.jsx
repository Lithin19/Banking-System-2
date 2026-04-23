import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Deposit} from "./pages/customer/Deposit";
import {Withdraw} from "./pages/customer/Withdraw";
import {Transfer} from "./pages/customer/Transfer";
import { CustomerDashboard } from "./pages/customer/CustomerDashboard";
function App() {
 return (
<BrowserRouter>
<Routes>
<Route path="/" element={<CustomerDashboard />} />
<Route path="/deposit" element={<Deposit />} />
<Route path="/withdraw" element={<Withdraw />} />
<Route path="/transfer" element={<Transfer />} />
</Routes>
</BrowserRouter>
 );
}
export default App;
