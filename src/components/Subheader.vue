<template>
<div>
    <h2 class="h2"><span>{{ msg }}</span></h2>
</div>
</template>

<script>
export default {
name: 'Subheader',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
font-family: Bowlby One Sc;
src: local("Bowlby One Sc"),
url(../fonts/BowlbyOneSC-Regular.ttf);
}

.h2{
font-family: 'Bowlby One SC'; 
font-size: 45px;
text-align: left;
color: white;
text-shadow: 2px 2px black;
letter-spacing: 3px;
padding: 0px 150px;
}

span{
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0px 20px
}

</style>
