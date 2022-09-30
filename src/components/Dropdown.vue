<template>
    <!-- Drop down menu with router-links to trade pages -->
    <div class="dropdownmenu" style="float: right">
        <button class="dropbutton"><h3 style="margin: 0px 90px; font-size: 20px">- Select -</h3></button>
        <div class="dropdownmenu-content">
            <router-link to="/carpenter">Carpenter</router-link>
            <router-link to="/painter">Painter</router-link>
            <router-link to="/bricklayer">Bricklayer</router-link>
        </div>
    </div>
</template>

<script>
export default {
name: 'Dropdown'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styling for drop down menu */
.dropbutton {
    background-color: white;
    color: black;
    padding: 10px;
    font-size: 10px;
    border: 1px solid black;
    cursor: pointer;

}

.dropdownmenu {
    padding: 0px 0px;
    position: relative;
    display: inline-block;
    width: auto
    
}

.dropdownmenu-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 285px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdownmenu-content a{
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdownmenu-content a:hover{
    background-color: #bbb;
}

.dropdownmenu:hover .dropdownmenu-content{
    display: block;
}

.dropdownmenu:hover .dropbutton{
    background-color:  rgb(99, 99, 99);
}

</style>
