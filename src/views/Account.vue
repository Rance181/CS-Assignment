<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Poster from "../components/Poster.vue"
import Header from "../components/Header.vue"

</script>

<template>
    <div class="account-container">
    <Suspense>
        <Header v-bind:loggedornot="false" />
    </Suspense>
    <br/><br/><br/>

    <Suspense>
        <Poster/>
    </Suspense>
    </div>
</template>

<style scoped>
</style>