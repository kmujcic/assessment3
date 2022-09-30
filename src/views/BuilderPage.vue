<template>
  <div class="builder">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">Builders</p>

    <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/malebuilder.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Damo Nails<br><span>A & B Licensed Builder</span><br>Contact on 0432 123 456<br>Rating: 4.9/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/fembuilder.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Lily Pravi<br><span>Commercial Builder</span><br>Contact on 0432 111 223<br>Rating: 4.2/5</h2>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'BuilderPage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Styling for page, imported */
@import url(../styles.css);

</style>