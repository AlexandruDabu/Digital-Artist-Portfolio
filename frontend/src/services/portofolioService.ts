import { User, Work } from "../types";
import axiosClient from "./axiosClient";

export const getWorks = async():Promise<Work[]> => {
    try{
        const response = await axiosClient.get('/works');
        return response.data;
    }catch(error){
        console.error('Failed to retrieve works:', error);
        throw error;
    }
}

export const getWorkById = async(id: number):Promise<Work> => {
    try{
        const response = await axiosClient.get(`/works/${id}`);
        return response.data;
    }catch(error){
        console.error('Failed to get data by Id', error);
        throw error;
    }
}

export const createWork = async(work: Work):Promise<Work> => {
    try{
       const response = await axiosClient.post('/works', work);
        return response.data
    }catch(error){
        console.error('Failed creating a work', error);
        throw error;
    }
}

export const updateWork = async(work: Work):Promise<Work> => {
    try{
        const response = await axiosClient.put(`/works/${work.id}`, work);
        return response.data;
    }catch(error){
        console.error('Failed updating the work', error);
        throw error;
    }
}

export const deleteWork = async(id: number):Promise<void> => {
    try{
        await axiosClient.delete(`/works/${id}`);
    }catch(error){
        console.log('Failed deleting the work', error);
        throw error;
    }
}

export const hideWork = async(work: Work):Promise<Work> => {
    try{
        const updatedWork = {
            ...work,
            isVisible: !work.isVisible
        }

        const response = await axiosClient.put(`/works/${work.id}`, updatedWork)

        return response.data;
    }catch(error){
        console.error('Failed to hide the work', error);
        throw error
    }
}

export const createNewsUser = async(user: User):Promise<User> => {
    try{
        const response = await axiosClient.post('/news',user);
        return response.data;
    }catch(error){
        console.error('Failed to sign up', error);
        throw error
    }
}