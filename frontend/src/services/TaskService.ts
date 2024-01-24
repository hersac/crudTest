import axios from 'axios';

export const getTasks = async ()=>{
    return await axios.get("http://localhost:2000/app/task").then((response)=>{
        return response.data;
    });
};

export const getTaskById = async (id: number)=>{
    return await axios.get(`http://localhost:2000/app/task/${id}`).then((response)=>{
        return response.data;
    });
};

export const createTask = async (body: any)=>{
    return await axios.post("http://localhost:2000/app/task", body).then((response)=>{
        return response.data;
    });
};

export const updateTask = async (id: number, body: any)=>{
    return await axios.put(`http://localhost:2000/app/task/${id}`, body).then((response)=>{
        return response.data;
    });
};

export const deleteTaskById = async (id: number)=>{
    return await axios.delete(`http://localhost:2000/app/task/${id}`);
};