<template>
    <!-- Nav bar with router links to different views/pages -->
    <ul>
        <li><img src="../assets/logo.png"></li>
        <li><router-link to="/home"><img src="../assets/home.png"></router-link></li>
        <li style="float: right"><router-link to="/about"><img src="../assets/aboutus.png"></router-link></li>
    </ul>
    
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style scoped>
/* Styling for page */
ul {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: black;
}

li {
  float: left;
  border-right: 2px solid #bbb;
}

li a {
  display: block;
  padding: 0px 30px;
  color: white;
  text-align: center;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(97, 93, 73);
}

li:last-child{
  border-right: none;
  border-left: 2px solid #bbb;
  padding: 0px 0px;
}

ul a.router-link-exact-active {
  background-color: #294953;
}

</style>
