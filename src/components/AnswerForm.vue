<template>
    <div class="answer-form p-4">
        <div class="container border-2 border-primary px-4 py-8">
            <h2 class="block-title mb-8">Форма для заполнения</h2>
            <form class="flex flex-col gap-4" >
                <AppInput v-model="input" name="Имя" type="text" />
                <AppSelect v-model="select" :options="selectOptions" placeholder="Предпочтения по еде"  />
                <div class="answer-form__alcohol">
                    <label class="mb-4">Предпочтения по алкоголю</label>
                    <div class="flex flex-col items-start gap-2">
                        <AppCheckbox v-model="checkboxChecked" label="Вино"/>
                    <AppCheckbox v-model="checkboxChecked" label="Крепкое"/>
                    <AppCheckbox v-model="checkboxChecked" label="Безалкогольное"/>
                    </div>
                </div>
                <AppButton >Отправить</AppButton>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppInput from './ui/AppInput.vue'
import AppSelect from './ui/AppSelect.vue'
import AppButton from './ui/AppButton.vue'
import AppCheckbox from './ui/AppCheckbox.vue'


const input = ref('')
const select = ref('')
const checkboxChecked = ref(false) 
const selectOptions = [
    {
        id: 1,
        name: 'Рыба',
    },
    {
        id: 2,
        name: 'Мясо',
    },
    {
        id: 3,
        name: 'Вегетарианское',
    }
]
</script>

<style lang="scss">

</style>