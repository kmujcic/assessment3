<template>
  <!-- About us page, website information -->
  <div class="about">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">About us</p>

    <article id="article">
        <h2>What do we do?</h2>
        We provide a service for customers to quickly get into contact with trusted
        and experienced trades person, for any project or job they might need!
        
        <h2>Why do you offer this service?</h2>
        We at The Tradie Hub have recognised the issue of dodgy tradies charging an arm
        and a leg for basic work. We are building a community of trusted and experienced
        trades people to help you on any job you might have.
        
        <h2>How?</h2>
        Our website allows customers to get in to 
        contact and organise projects with tradies in their local area in a 
        few simple clicks. It also allows tradies to set up a profile for 
        themselves, by which they can be contacted by potential clients.
    </article>

  </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'AboutView',
  components: {
    NavBar
}
}
</script>

<style scoped>
/* Styling for page */
#text{
    font-family: 'Bowlby One SC'; 
    font-size: 50px;
    text-align: left;
    color: white;
    text-shadow: 2px 2px black;
    letter-spacing: 3px;
}

#article{
    text-align: center;
    font-family: 'Arial'; 
    font-size: 30px;
    margin: 0px 32.5px;
    padding: 10px 10px;
    background-color: rgba(1, 1, 1, 0.7);
    color: white;
}

</style>
