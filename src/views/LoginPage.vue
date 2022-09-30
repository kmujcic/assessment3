<template>
    <div>
        <!-- Vignette effect -->
        <div class="vignette">
            <div class="center">
                <!-- Div for Login form -->
                <div class="Login-form">
                    <h1>Please log in below</h1>
                    <form>
                        <input type="text" id="password" placeholder="Email address">
                        <br>
                        <br>
                        <input type="password" id="password" placeholder="Password">
                        <br>
                        <br>
                        <router-link to="/home">
                            <input type="button" value="Log in" >
                        </router-link>
                    </form>

                    <p>________________________________________</p>
                    <br>
                    <br>
                    <div class="createNew">
                        <router-link to="/signup">
                                <input type="button" value="Create New Account" >
                            </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
  
<style scoped>
/* Styling for page */
.vignette{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10em 10em black inset;
}

.center{
    padding: 200px;
}

.Login-form{
    width: 400px;
    height: 500px;
    background-color: white;
    margin: auto;
    border-radius: 15px;
    box-shadow: 20px 20px 50px black;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding-top: 40px;
}

form{
    width: 300px;
    margin-left: 40px;
}

form label{
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 25px;

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
    margin-top: 20px;
    height: 30px;
    font-size: 18px;
}

form input[type="password"]{
    margin-top: 20px;
    height: 30px;
    font-size: 18px;
}

form input[type="button"]{
    width: 315px;
    height: 45px;
    margin-top: 20px;
    border: none;
    background-color: rgb(36, 86, 221);
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
    margin-top: -15px;
    margin-left: 75px;
    border-radius: 6px;
    border: none;
    background-color: rgb(47, 206, 47);
    color: white;
    font-size: 20px;
    cursor: pointer;
}

</style>