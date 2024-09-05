import { useState } from "react";

export const useAuthLogic = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const logIn = () => setIsAuthenticated(true);
    const logOut = () => setIsAuthenticated(false);
  
    return { isAuthenticated, logIn, logOut };
  };
  