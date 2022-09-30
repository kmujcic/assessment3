<template>
  <div class="carpenter">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">Carpenters</p>

    <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/malecarpenter.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Halilov Icbuild<br><span>Fully Licensed Carpenter</span><br>Contact on 0432 121 313<br>Rating: 5/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/malecarpenter.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Ekser Cekic<br><span>2nd Year Apprentice Carpenter</span><br>Contact on 0432 111 223<br>Rating: 3.5/5</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'CarpenterPage',
  components: {
    NavBar
  }
}
</script>

<style scoped>
/* Styling for page, imported */
@import url(../styles.css);

</style>