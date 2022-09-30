<template>
  <div class="painter">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">Painters</p>

      <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/fempainter.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Daniella Peterson<br><span>D&P Qualified Paint Experts</span><br>Contact on 0432 121 313<br>Rating: 4.6/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/fempainter.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Stacy Farba<br><span>Stacy Designs Painting</span><br>Contact on 0432 111 223<br>Rating: 4.1/5</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'PainterPage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Styling for page, imported */

@import url(../styles.css);

</style>