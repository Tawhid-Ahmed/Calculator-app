<template>
  <main>
    <header>
      <h1>Calculator App</h1>
    </header>
    <div class="display-nav">
      <div>
        <RouterLink class="btn-hover" to="/" active-class="active">Calculator</RouterLink>
        <RouterLink class="btn-hover" active-class="active" to="/history">History</RouterLink>
      </div>

      <div class="settings">
        <RouterLink to="/settings">
          <img src="./assets/images/gear-solid.svg">
        </RouterLink>
      </div>

    </div>
  </main>
  <RouterView />
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style>
img {
  right: 0;
  width: 15px;
  background: none;
  transition: transform 0.3s ease;
}

img:hover {
  transform: rotate(90deg);
  color: rgb(53, 49, 49);
  background: none;
}

body {
  text-align: center;
}

.display-nav {
  display: inline-flex;
  text-align: center;
  background-color: white;
  color: rgb(53, 49, 49);
  margin: 10px;
  border-radius:10px;
}

.settings {
  padding: 0px;
  margin: 21px 0px 0px 24px;
}


div {
  padding: 17px;
}

div a {
  color: rgb(53, 49, 49);
  text-decoration: none;
  padding: 7px;
  border-radius: 4px;
  margin-right: 20px;
}

div .btn-hover:hover {
  background: #c9c5c9;
  color: white;
}

.active {
  background-color: #b7aeb7;
  color: white;
}
</style>
