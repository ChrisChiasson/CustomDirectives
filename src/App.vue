<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue';

const handleClickedOutside = () => alert("Clicked outside")

const show = ref(true);

const colors = ref(['blue', 'red', 'green'])
setTimeout(() => {
  colors.value.push('pink');
} , 5000);

const vColor = {
  mounted(el, binding) {
    const colors = binding.value
    const speeds = {
      slow: 2000,
      medium: 1000,
      fast: 500,
      crazy: 100
    }

    if (binding.modifiers.underline) el.style.textDecoration = 'underline'
    if (binding.modifiers.italic) el.style.fontStyle = 'italic'

    let i = 0;
    el.__ColorInterval__ = setInterval(() => {
      console.log("coloring")
      el.style.color = colors[i++]
      if (i >= colors.length) i = 0
    }, speeds[binding.arg || 'medium']);
  },
  unmounted(el) {
    clearInterval(el.__ColorInterval__)
  }
}
</script>

<template>
  <h2 >Click Outside</h2>
  <div v-click-outside="handleClickedOutside" class="box">
    Here is some text</div>

  <button @click="show = !show">Toggle</button>
  <h1 v-if="show" v-color:slow="colors">Vue School</h1>
  <h1 v-if="false" v-color.underline="colors">Vue School</h1>
  <h1 v-if="false" v-color:crazy.italic="colors">Vue School</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>
