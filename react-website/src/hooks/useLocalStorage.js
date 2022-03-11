import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const localStorageItem = localStorage.getItem(key);
  let parseItem;

  if (!localStorageItem) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    parseItem = initialValue;
  } else {
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parseItem);

  const saveNewItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveNewItem,
  };
};

export default useLocalStorage;
