// import React, { useContext, useState } from "react";
// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   // const [isMenuOpen, setIsMenuOpen] = useState(false);




//   // const handleMenu = () => {
//   //   setIsMenuOpen((prev) => !prev);
//   // };

//   // const closeMenu = () => {
//   //   setIsMenuOpen(false);
//   // };

//   // function handleLinksClick(e) {
   
//   //   e.preventDefault();
  
//   //   // setIsMenuOpen(false)
//   //   let id = e.target.getAttribute("href").slice(1);
//   //   var elem = document.getElementById(id);
//   //   const location = elem.offsetTop - 80 ;
//   //   window.scrollTo({
//   //     left: 0,
//   //     top: location,
//   //     behavior: "smooth",
//   //   });

  
//   // }

//   return (
//     <AppContext.Provider
//       value={{
//         handleMenu,
//         isMenuOpen,
//         closeMenu,
//         // handleLinksClick,
      
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
// // custom hook
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
