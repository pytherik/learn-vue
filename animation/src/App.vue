<template>
  <div class="container">
    <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Über</RouterLink>
    </header>
    <Transition name="route">
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  background-color: #555;
  color: #dedeed;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 10vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
a {
  color: #dedeed;
  width: 5rem;
  padding: 10px;
  text-decoration: none;
  margin: 15px 20px 0;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #00000088;
}

a:hover {
  background-color: #666;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(300px);
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.route-enter-active {
  transition: all 1s ease;
}
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
.route-leave-active {
  transition: all 1s ease;
}
</style>
