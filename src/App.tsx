import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import { Navigate } from "react-router-dom";
// // import App from "./App";
// import AboutPage from "./pages/AboutPage";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// import FormsPage from "./pages/FormsPage";

// const App: React.FC = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/forms" element={<FormsPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
