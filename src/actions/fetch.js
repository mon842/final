// "use server";


import User from "../models/userModel";
import {connect} from '../dbConfig/dbConfig';


export async function fetchUsers({searchString }) {
    try {
      connect();
  
      const regex = new RegExp(searchString, "i");
  
      const query = {};
      if (searchString.trim() !== "") {
        query.$or = [
          { username: { $regex: regex } },
          { email: { $regex: regex } },
        ];
      }
  
  
      const usersQuery = User.find(query)
  
      const users = await usersQuery.exec();
  
      return { users};
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
  