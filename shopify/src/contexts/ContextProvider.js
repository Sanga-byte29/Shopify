//Now we will keep track
//and state of the of the sidebar and to decide whether it will be open or not
//Using ContextAPI
import { React, createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  //setting the current color for the dashboard using useState hook

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    //setting up the local storage for the current mode the user used in dashboard
    localStorage.setItem("themeMode,", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    //setting up the local storage for the current color the user used in dashboard
    localStorage.setItem("colorMode,", color);
    setThemeSettings(false);
  };
  //setting up the theme settings using useState hooks
  const [themeSettings, setThemeSettings] = useState(false);

  const [screenSize, setScreenSize] = useState();
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, clicked: true });
    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
// export { StateContext, ContextProvider };
