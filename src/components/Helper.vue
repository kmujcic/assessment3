<template>
    <div>
        <!-- V-if directive button which will render or hide text element -->
        <div class="prompt">
            <span>Would you like some help?</span>
            <button class="cool-btn" @click="showText = !showText">Yes</button>
        </div>
        
        <Transition name="slide-fade">
            <!-- Text element providing some guidance in using the website -->
            <div class="helpBox" v-if="showText">
                <span>
                    <ul>
                        <li>You can use the top nav bar to visit different pages</li>
                        <br>
                        <li>You can use the quick panel to choose a popular trade</li>
                        <br>
                        <li>You can select a trade from the drop-down menu</li>
                    </ul>
                </span>
            </div>
        </Transition>
    </div>
</template>

<script>
import CoolButton from './CoolButton.vue'
// Script to toggle text with v-if directive, using a button 
export default {
    data: () => {
        return {
            showText: false
        }
    },
    components: {
        CoolButton
    }
}
</script>

<style scoped>
/* Styling for page */
.prompt span{
    background-color: rgba(128, 126, 19, 0.7);
    padding: 5px 20px;
    float: left;
    margin-left: 50px;
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif; 
    color: white;
    text-shadow: 1px 1px black;
    letter-spacing: 3px;
    font-size: 20px;
}

.helpBox span{
    position: sticky;
    z-index: 1000;
    background-color: rgba(37, 37, 37, 1);
    padding: 1px 15px;
    float: left;
    margin-left: 40px;
    margin-top: 0px;
    font-family: Arial, Helvetica, sans-serif; 
    color: white;
    text-shadow: 1px 1px black;
    letter-spacing: 3px;
}

ul{
    list-style: none;
}

.slide-fade-enter-active{
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active{
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to{
    transform: translateX(20px);
    opacity: 0;
}

</style>
