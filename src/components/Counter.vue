<template>
    <div>
        <h2>The count: {{ count }}</h2>
        <p>
            <button @click="count += 1">Click</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 }
        }
    }
</script>

<style>
    .box {
        padding: 20px;
        margin-bottom: 10px;
        background-color: #e5e5e5;
        border: 1px solid #555;
    }
</style>
