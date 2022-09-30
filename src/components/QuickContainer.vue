<template>
    <!-- Quick panel for choosing the below trades -->
    <div class="flex-container">
        <router-link to="/electrician"><img src="../assets/electrician.png"></router-link>
        <router-link to="/plumber"><img src="../assets/plumber.png"></router-link>
        <router-link to="/builder"><img src="../assets/builder.png"></router-link>
    </div>
</template>

<script>
export default {
name: 'QuickContainer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styling for page */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(1, 1, 1, 0.7);
}

.flex-container a{
    margin-left: 25px;
    margin-right: 25px;
    
}

</style>
