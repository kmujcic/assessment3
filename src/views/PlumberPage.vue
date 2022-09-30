<template>
  <div class="plumber">
    <NavBar></NavBar>
    <p style="text-align: center" id="text">Plumbers</p>

      <!-- Profile card for each tradie profile -->
    <div class="card">
      <div class="profilePic">
        <img src="../assets/maleplumber.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Mike Rack<br><span>AB Licensed Plumber</span><br>Contact on 0432 123 456<br>Rating: 4.7/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/femplumber.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Lucy Anifriz<br><span>Emergency 24/7 Plumber</span><br>Contact on 0432 456 123<br>Rating: 4/5</h2>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="card">
      <div class="profilePic">
        <img src="../assets/maleplumber.png">
      </div>
      <div class="content">
        <div class="details">
          <h2>Harry Bart<br><span>4th Year Apprentice Plumber</span><br>Contact on 0432 426 135<br>Rating: 3.7/5</h2>
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
  name: 'PlumberPage',
  components: {
    NavBar
}
}
</script>

<style scoped>
/* Styling for page */
@import url(../styles.css);

</style>