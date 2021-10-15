<template>
    <div>
        <form @submit.prevent="addNewCategory">
            <input type="text" placeholder="Type new category" v-model="newCategory">
            <button type="submit">Add Category</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'


export default {
    name: 'AddCategory',
    setup(){
        const store = useStore();

        const addCategory = category => store.dispatch('addCategory', category);
        const newCategory = ref('');

        const addNewCategory = () => {
            if(newCategory.value){
                const category = {
                    title: newCategory.value,
                    isEditing: false,
                    tempEdit: ''
                }
                addCategory(category);
                newCategory.value = ''
            }
        }
        return {
            addNewCategory,
            newCategory
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: space-between;
}
form button{
    font-size: 12px;
}
input[type="text"] {
    width: 75%;
}
</style>