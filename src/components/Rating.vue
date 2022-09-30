<template>
    <div>
        <!-- Leave review component -->
        <div class="leaveReview">
            <span>
                <span>Leave us a review?</span>
                <div class="counter">{{ count }}</div>
                <button @click="count++"><img src="../assets/thumbsup.png"></button>
                <button @click="count--"><img src="../assets/thumbsdown.png"></button>
                <img v-if="count <= 0" src="../assets/sadFace.png">
                <img v-else-if="count => 1" src="../assets/happyFace.png">
            </span>
        </div>
        
    </div>
</template>

<script>
// Script to toggle text with v-if directive, using a button 
export default {
    data() {
        return {
            count: 0
        }
    },
}
</script>

<style scoped>
/* Styling for page */
.leaveReview{
    position: absolute;
    float: left;
    margin-left: 550px;
    margin-top: 175px;
    
}

.leaveReview span{
    float: left;
    font-size: 25px;
    background-color: rgba(255, 94, 0, 0.75)
}

button {
    float: left;
    margin-left: 25px;
    cursor: pointer;
}

.counter {
    float: left;
    margin-left: 25px;
}

.leaveReview img{
    float: left;
    padding: 0px 0px;
    margin-left: 5px;
}

</style>
