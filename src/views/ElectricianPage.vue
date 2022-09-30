<template>
  <div class="electrician">
    <NavBar></NavBar>
      <p style="text-align: center" id="text">Electricians</p>

      <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/maleelectrician.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>John Sparks<br><span>Grade A Electrician</span><br>Contact on 0432 123 456<br>Rating: 4.1/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/femelectrician.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Jane Sparkz<br><span>Grade B Electrician</span><br>Contact on 0432 456 123<br>Rating: 4.5/5</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // Imported Nav Bar component
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'ElectricianPage',
  components: {
    NavBar
}
}
</script>

<style scoped>
/* Styling for page, imported */
@import url(../styles.css);

</style>