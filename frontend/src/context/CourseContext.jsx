import axios from "axios";
import { createContext, useContext, useState } from "react";
import { server } from "../main";

const CourseContext = createContext()

export const CourseContextProvider = ({children})=>{
    const {courses, setCourses} = useState([])

    async function fetchCourses() {
        try {
            const {data} = await axios.get(`${server}/api/course/all`)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    return <CourseContext.Provider value={{}}>{children}</CourseContext.Provider>
};
 
export const CourseData = () => useContext(CourseContext);