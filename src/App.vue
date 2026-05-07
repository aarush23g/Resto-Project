<template>
<router-view /> 
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
.logo {
    width: 200px;
    height: 200px;
}
.register input, .login input, .add-form input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 20px;
}

.register button, .login button, .add-form button {
    width: 150px;
    height: 40px;
    background-color: skyblue;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    display: block;
    margin-right: auto;
    margin-left: auto;
}

</style>
