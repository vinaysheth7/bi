import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import MarketView from "./pages/MarketView";
import AcquisitionView from "./pages/AcquisitionView";
import URLsView from "./pages/URLsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="market-view" element={<MarketView />} />
          <Route path="acquisition-view" element={<AcquisitionView />} />
          <Route path="urls" element={<URLsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
