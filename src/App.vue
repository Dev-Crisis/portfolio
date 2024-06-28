<template>
  <Header/>
  <HeroBanner/>
  <Skills/>
  <Projects/>
  <StudentPath/>
  <About/>
</template>
<script>
import Header from "./components/Header.vue";
import HeroBanner from "./components/HeroBanner.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import {defineComponent} from "vue";
import StudentPath from "./components/StudentPath.vue";

export default defineComponent({
  components: {StudentPath, Header, Skills, HeroBanner, Projects, About}
})

</script>