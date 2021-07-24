<template>
  <div class="home">
    <ListaPokemones />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListaPokemones from '@/components/ListaPokemones.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListaPokemones,
  }
}
</script>
