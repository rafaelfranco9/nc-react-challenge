import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const TOKEN_KEY = "BEARER_TOKEN";

const useAuth = (username, password) => {
  const { item: tokenData, saveNewItem } = useLocalStorage(TOKEN_KEY, {});

  const getToken = async () => {
    if (
      Object.keys(tokenData).length == 0 ||
      tokenData?.exp < Date.now() / 1000
    ) {
      let apiTokenData = await signIn(username, password);
      if (apiTokenData) {
        saveNewItem(apiTokenData);
        return apiTokenData.token;
      }
    } else {
      return tokenData.token;
    }
  };

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
    getToken,
  };
};

export default useAuth;
