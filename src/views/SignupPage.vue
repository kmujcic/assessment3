<template>
    <div>
        <!-- Vignette effect Div-->
        <div class="vignette">
            <div class="center">
                <!-- Div for signup form -->
                <div class="Signup-form">
                    <h1>Create New Account</h1>
                    <form>
                        <label>First Name</label>
                        <input type="text" placeholder="">
                        <label>Last Name</label>
                        <input type="text" placeholder="">
                        <label>Email</label>
                        <input type="text" placeholder="">
                        <label>Password</label>
                        <input type="password" placeholder="">
                        <br>
                        <br>
                        <router-link to="/home">
                            <input type="button" value="Sign up" >
                        </router-link>
                        <p>________________________________________</p>
                        <div class="createNew">
                            <router-link to="/">
                                <input type="button" value="Back to log in" >
                            </router-link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

</template>
  
<style scoped>
/* Styling for the sign up page */
.vignette{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10em 10em black inset;
}

.center{
    padding: 125px;
}

.Signup-form{
    width: 400px;
    height: 690px;
    background-color: white;
    margin: auto;
    border-radius: 15px;
    box-shadow: 20px 20px 50px black;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 10px;
}

form{
    width: 300px;
    margin-left: 40px;
}

form label{
    display: flex;
    margin-left: 5px;
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}

form input{
    width: 100%;
    padding: 7px;
    border: none;
    border: 1px solid gray;
    border-radius: 6px;
    outline: none;
}

form input[type="text"]{
    height: 30px;
    font-size: 18px;
}

form input[type="password"]{
    height: 30px;
    font-size: 18px;
}

form input[type="button"]{
    width: 315px;
    height: 45px;
    margin-top: 20px;
    border: none;
    background-color: rgb(47, 206, 47);
    color: white;
    font-size: 20px;
    cursor: pointer;
}

p{
    color: gray;
    text-align: center;
}

.createNew input[type="button"]{
    width: 250px;
    height: 45px;
    margin-left: 40px;
    border-radius: 6px;
    border: none;
    background-color: rgb(36, 86, 221);
    color: white;
    font-size: 20px;
    cursor: pointer;
}

</style>