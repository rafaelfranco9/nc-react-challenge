import React, { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuthentication";

export const MembersContext = React.createContext({});

export const MembersContextProvider = ({ children }) => {
  const { getToken } = useAuth("sarah", "connor");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMembersFromApi = async () => {
    setLoading(true);
    try {
      const token = await getToken();
      const response = await axios("http://localhost:8081/api/members", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setMembers(response.data);
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  const saveNewMember = async (newMember) => {
    setLoading(true);
    try {
      const token = await getToken();
      const response = await axios("http://localhost:8081/api/members", {
        method: "POST",
        data: newMember,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setMembers([...members, response.data]);
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  const values = {
    saveNewMember,
    getAllMembersFromApi,
    members,
    loading,
  };

  return (
    <MembersContext.Provider value={values}>{children}</MembersContext.Provider>
  );
};
