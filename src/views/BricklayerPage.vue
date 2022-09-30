<template>
  <div class="bricklayer">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">Bricklayers</p>

    <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/fembrickie.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Joanie Malter<br><span>Joan's Bricks</span><br>Contact on 0432 123 456<br>Rating: 4.2/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/malebrickie.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Moey's Brickworx<br><span>No job too big or small!</span><br>Contact on 0432 456 123<br>Rating: 5/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/malebrickie.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Brent Radnik<br><span>Experienced Bricklayer</span><br>Contact on 0432 426 135<br>Rating: 4.3/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

  </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'BricklayerPage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Styling for page, imported */
@import url(../styles.css);

</style>