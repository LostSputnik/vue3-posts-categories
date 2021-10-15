<template>
    <div class="category">
        <div class="actions">
            <div class="title">
                <div v-if="!category.isEditing" @dblclick="startEditing">
                    <h3>{{category.title}}</h3>
                </div>
                <div v-if="category.isEditing" @keyup.enter="doneEditing" @keyup.esc="cancelEditing">
                    <input type="text" v-model="category.tempEdit">
                </div>
            </div>
            <div class="icons">
                <span class="material-icons" @click="startEditing" v-if="!category.isEditing">mode_edit</span>
                <span class="material-icons tick" v-if="category.isEditing" @click="doneEditing">done</span>
                <span class="material-icons" @click="deleteCategory(category.id)">delete</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'SingleCategory',
    setup({ category }){
        const store = useStore();

        const deleteCategory = id => store.dispatch('deleteCategory', id);
        const startEditing = () => {
            category.isEditing = true
            category.tempEdit = category.title
        }
        const doneEditing = () => {
            category.title = category.tempEdit
            category.isEditing = false
            category.tempEdit = ''
        }
        const cancelEditing = () => {
            category.tempEdit = ''
            category.isEditing = false
        }

        return {
            deleteCategory,
            startEditing,
            doneEditing,
            cancelEditing
        }

    },
    props: ['category']
}
</script>

<style scoped>
.category {
  margin-top: 20px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.title, .icons {
  cursor: pointer;
}
.material-icons {
  margin: 15px 10px;
}

</style>