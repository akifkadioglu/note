<template>
    <div>
        asdas
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCustomFetch } from '../utils/useCustomFetch';
const deneme = ref()

function name() {
    var sdf = useCustomFetch("comments")
    console.log(sdf);
}
name()
</script>