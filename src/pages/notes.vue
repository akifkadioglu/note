<template>
    <div>
        <v-card @click="() => { }" variant="tonal" class="d-flex align-center justify-center" width="200" height="200">
            Yeni klasör
        </v-card>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCustomFetch } from '../utils/useCustomFetch';

const notes = ref([]);
onMounted(() => {
    fetchNotes();
})

async function fetchNotes() {
    const { data } = await useCustomFetch("comments")
    notes.value = JSON.parse(data.value)

}
</script>