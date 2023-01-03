<template>
<div class="mainborder">
    <div class="border">
        <Home />
    </div>

    <div class="border2">
        <HelloWorld />
    </div>

    <div class="border3">
        <box3 />
    </div>

    <div class="border4">
        <ifelse />
    </div>
</div>

<div class="mainborder">

  <div class="border5">
<ifelse/>
</div>

<div class="border6">
<ifelse/>
</div>

</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import box3 from './components/box3.vue'
import ifelse from './components/ifelse.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Home,
        box3,
        ifelse,
    }
}
</script>
