<template>
    <!-- Cool button with slot component -->
    <button class="cool-btn">
        <slot></slot>
    </button>
</template>

<style>
/* Styling for cool button */
.prompt button{
    font-size: 20px;
    padding: 10px 10px;
    float: left;
    margin-top: 40px;
    margin-left: 15px;
    color: black;
    background: linear-gradient(315deg, #6effbe 25%, #2448ff)
}

</style>