import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const TOKEN_KEY = "BEARER_TOKEN";

const useAuth = (username, password) => {
  const { item: token, saveNewItem } = useLocalStorage(TOKEN_KEY, {});

  useEffect(async () => {
    if (Object.keys(token).length == 0 || token?.exp < Date.now() / 1000) {
      let apiTokenData = await signIn(username, password);
      if (apiTokenData) {
        saveNewItem(apiTokenData);
      }
    }
  });

  const signIn = async (username, password) => {
    try {
      const { status, data } = await axios("http://localhost:8081/auth", {
        method: "POST",
        data: { username, password },
      });
      if (status == 200) {
        return data;
      }
    } catch (err) {
      console.log("[SignIn]: An error occurred");
    }
    return null;
  };

  return {
    token,
  };
};

export default useAuth;
