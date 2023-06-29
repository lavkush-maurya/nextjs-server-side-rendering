// import React, { useEffect, useState } from "react";
// import Preloader from "./Pre";

// const Layout = ({ children }) => {
//   const [load, updateLoad] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       updateLoad(false);
//     }, 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* <nav>Logo</nav> */}
//       <Preloader load={load} />
//       <div>{children}</div>
//     </>
//   );
// };

// export default Layout;
