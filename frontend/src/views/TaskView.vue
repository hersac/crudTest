<template>
    <div class="task">
        <h2>Tareas</h2>
        <div class="contentBtn">
            <button class="btn" @click="openModal">Crear</button>
        </div>

        <div class="filterInput" style="margin: 20px;">
            <input v-model="formData.title" type="text" class="inputTask" placeholder="Buscar" @input="filterTasks">
        </div>

        <div :class="!isModal ? 'modalHidden' : 'overlay'"></div>

        <div :class="!isModal ? 'modalHidden' : 'modal'">
            <div class="contentModal">
                <form @submit.prevent="handleSubmit">
                    <div class="contentForm">
                        <div class="contentInput">
                            <div>
                                <label for="title"><v-app-title>Titulo:</v-app-title></label>
                            </div>
                            <input v-model="formData.title" type="text" class="inputTask">
                        </div>
                        <div class="contentInput">
                            <div>
                                <label for="descripcion">Descripción:</label>
                            </div>
                            <textarea v-model="formData.description" class="inputTask taskDescription"></textarea>
                        </div>
                        <div>
                            <div>
                                <label for="finalDate">Fecha de vencimiento:</label>
                            </div>
                            <div class="contentInput inputDate">
                                <input v-model="formData.finalDate" type="date">
                            </div>
                        </div>
                        <div class="contentBtns contentInput">
                            <div>
                                <button type="submit" :class="!isCreated ? 'btnCrear' : 'btnHidde'">Crear</button>
                            </div>
                            <div>
                                <button type="button" :class="isCreated ? 'btnCrear' : 'btnHidde'" @click="editTask()">Actualizar</button>
                            </div>
                            <div>
                                <button type="button" class="btnCancelar" @click="openModal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="contentTarjetas">
            <v-card v-for="(task, index) in filteredTasks" :key="index">
                <v-card class="tarjeta">
                    <div>
                        {{index + 1}} <v-card-title :class="!task.active ? 'terminada' : 'noTerminada'">{{task.title}}</v-card-title>   
                    </div>
                    <div>
                        <v-card-text :class="!task.active ? 'terminada' : 'noTerminada'">{{task.description}}</v-card-text>
                    </div>
                    <div>
                        <v-card-text :class="!task.active? 'terminada' : 'noTerminada'">Vence el: {{formatDate(task.finalDate)}}</v-card-text>
                    </div>
                    <div style="display: flex; justify-content:center; align-items: center; gap:30px; padding: 10px;">
                        <v-card-actions class="btnCrear" style="font-size: 14px; padding:5px;" @click="openEditTask( task.idTask, task)"><font-awesome-icon icon="fa-solid fa-feather" /></v-card-actions>
                        <v-card-actions class="btnTerminar" style="font-size: 14px; padding:5px;" @click="finishTask(task.idTask, task.active)"><font-awesome-icon icon="fa-solid fa-check" /></v-card-actions>
                        <v-card-actions class="btnCancelar" style="font-size: 14px; padding:5px;" @click="deleteTask(task.idTask)"><font-awesome-icon icon="fa-solid fa-delete-left" /></v-card-actions>
                    </div>
                </v-card>
            </v-card>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { getTasks, createTask, updateTask, deleteTaskById } from '../services/TaskService';

const isModal = ref(false);
const isCreated = ref(false);
const tasksData = ref([]);
const idTask = ref(0);
const filteredTasks = ref([]);

const formData = ref({
    title: '',
    description: '',
    finalDate: ''
});

onMounted(() => {
    getTaskData();
    filterTasks();
});

const getTaskData = async () => {
    tasksData.value = await getTasks();
};

const handleSubmit = async () => {
    if (formData.value.idTask) {
        await updateTask(formData.value.idTask, formData.value);
    } else {
        await createTask(formData.value);
    }

    clearForm();
    getTaskData();
};

const clearForm = () => {
    isModal.value = false;
    formData.value = {
        title: '',
        descripcion: '',
        finalDate: ''
    };
};

const openModal = () => {
    isModal.value = !isModal.value;
};

const openEditTask = (id, task) => {
    idTask.value = id;
    isCreated.value = true;
    formData.value = task;
    openModal();
};

const editTask = async () => {
    isCreated.value = false;
    await updateTask(idTask.value, formData.value);
    clearForm();
    getTaskData();
};

const finishTask = async (id, value)=>{
    idTask.value = id;
    value = !value;
    const activeValue = {
        active: value
    }
    await updateTask(id, activeValue);
    getTaskData();

}

const deleteTask = async (id) => {
    await deleteTaskById(id);
    getTaskData();
};

const filterTasks = () => {
    const searchTerm = formData.value.title.toLowerCase();
    filteredTasks.value = tasksData.value.filter(task => {
    return task.title.toLowerCase().includes(searchTerm) || task.description.toLowerCase().includes(searchTerm);
  });

};

const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
};

</script>
  
<style>
.filterInput{
    display: flex;
    justify-content: center;
}

.btnTerminar {
    display: center;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 100px;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    background-color: #ff9b20;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btnTerminar:hover {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    background-color: #ffbf70
}

.btnTerminar:active {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    background-color: #ff9b20;
}

.terminada {
    text-decoration: line-through;
} 
.noTerminada {
    text-decoration: none;
} 


</style>