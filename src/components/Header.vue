<template>
  <div>
    <div>
      <!-- Prop to pass through a string on the component -->
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styling for page */
@font-face {
  font-family: Bowlby One Sc;
  src: local("Bowlby One Sc"),
  url(../fonts/BowlbyOneSC-Regular.ttf);
}

h1{
  font-family: 'Bowlby One SC'; 
  font-size: 50px;
  text-align: center;
  color: white;
  text-shadow: 2px 2px black;
  letter-spacing: 3px;
  padding: 50px 50px;
  background-color: rgba(1, 1, 1, .7);
}

h2{
  font-family: 'Bowlby One SC'; 
  font-size: 50px;
  text-align: left;
  color: white;
  text-shadow: 2px 2px black;
  letter-spacing: 3px;
  padding: 0px 150px;
}

</style>
