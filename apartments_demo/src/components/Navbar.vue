<template>
  <div id="nav">
    <div class="app_brand">
      <router-link to='/'>
        <i class="fas fa-door-open"></i>
        <span>{{ brand_name }}</span>
      </router-link>
    </div>
    <div class="navlinks">
      <router-link to="/">Главная</router-link> |
      <router-link to="/contacts">Контакты</router-link>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    brand_name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 26px;
  background-color: #fff6c6;
  border-radius: 15px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}
#nav:hover{
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
}

a {
  color: #2c3e50;
  text-decoration: none;
}
#nav .navlinks a {
  font-weight: bold;
  margin: 5px;
  font-size: 1.2rem;
}

#nav .navlinks a.router-link-exact-active {
  color: #42b983;
}
#nav .app_brand{
  display: flex;
  justify-content: center;
  align-items: center; 

}
#nav .app_brand .fa-door-open{
  font-size: 2.6rem;
}
#nav .app_brand span{
  font-size: 1.8rem;
  margin-left: 12px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media screen and (max-width: 940px) {
  #nav {
    padding: 7px;
    flex-direction: column;
    justify-content: space-between;
  }
  #nav .navlinks{
    margin-top: 14px;
  }
}
</style>
