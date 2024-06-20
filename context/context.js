"use client";

import { createContext, useCallback, useReducer } from "react";

// Create Context
const Context = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  COLOR: "COLOR",
  DIRECTION: "DIRECTION",
  POPUP: "POPUP",
  DARK: "DARK",
  LANGUAGE: "LANGUAGE",
};
const { NAV, TOGGLE, COLOR, POPUP, DIRECTION, DARK, LANGUAGE } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  color: "red",
  direction: "top",
  popup: null,
  blogs: {
    EN : [
      {
        id: 1,
        author: "Charlie",
        date: "01/06/2024",
        tags: "ecology, greencode, development",
        title: "How to respect nature when coding",
        img: " ",
        desc: "Nature need us to be respectful. Let's talk about Green Code",
      },
    ],
    FR : [
      {
        id: 1,
        author: "Charlie",
        date: "01/06/2024",
        tags: "écologie, greencode, développement",
        title: "Comment respecter la nature en codant",
        img: " ",
        desc: "La nature a besoin que nous soyons respectueux. Parlons du Code Vert",
      },
    ],
  },
  dark: false,
  language: "EN",
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case DIRECTION:
      return {
        ...state,
        direction: payload,
      };
    case POPUP:
      return {
        ...state,
        popup: payload,
      };
    case DARK:
      return {
        ...state,
        dark: payload,
      };
    case LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};

// Watson State
const State = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const changeColor = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const changeDirection = useCallback((value) => {
    dispatch({
      type: DIRECTION,
      payload: value,
    });
  }, []);

  const popupToggle = useCallback((value) => {
    dispatch({
      type: POPUP,
      payload: value,
    });
  }, []);

  const darkToggle = useCallback((value) => {
    dispatch({
      type: DARK,
      payload: value,
    });
  }, []);

  const toggleLanguage = useCallback(() => {
    console.log("Toggling language from", state.language); // Log initial state
    const newLanguage = state.language === "EN" ? "FR" : "EN";
    dispatch({
      type: LANGUAGE,
      payload: newLanguage,
    });
    console.log("Language toggled to", newLanguage); // Log new state
  }, [state.language]);
  

  const { nav, toggle, color, direction, popup, blogs, dark, language } = state;
  const currentBlogs = blogs[language];

  return (
    <Context.Provider
      value={{
        nav,
        changeNav,
        toggle,
        color,
        changeColor,
        direction,
        changeDirection,
        popupToggle,
        popup,
        blogs: currentBlogs,
        dark,
        darkToggle,
        language,
        toggleLanguage
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default State;
export { Context };
