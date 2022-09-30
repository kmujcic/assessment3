<template>
<!-- Home page design, using components to render the
  elements on the home page -->  
  <div class="home">
    <!-- Nav Bar for top of page -->
    <NavBar></NavBar>
    <!-- Components which pass through string prop -->
    <Header msg="Welcome to the Tradie Hub!"></Header>
    <Subheader msg="Request:"></Subheader>
    <br>
    <!-- Quick container for quick access to common trades -->
    <QuickContainer></QuickContainer>
    <br>
    <div>
      <!-- Trade pages from drop down list -->
      <Subheader style="float: left" msg="Or search for:"></Subheader>
      <Dropdown></Dropdown>
    </div>
    <br>
    <!-- Rating, thumbs up/down component -->
    <Rating></Rating>
    <!-- Helper component, conditionally rendered on Yes button click -->
    <Helper></Helper>
  </div>
  
</template>

<script>
// @ is an alias to /src
// All imported components which are rendered on the home page
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import Subheader from '@/components/Subheader.vue'
import QuickContainer from '@/components/QuickContainer.vue'
import Dropdown from '@/components/Dropdown.vue'
import Helper from '@/components/Helper.vue'
import Rating from '@/components/Rating.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Header,
    Subheader,
    QuickContainer,
    Subheader,
    Dropdown,
    Helper,
    Rating
}
}
</script>


