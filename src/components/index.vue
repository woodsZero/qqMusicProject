<template>
    <div>
        <topbox></topbox>
        <top-nav></top-nav>
        <bot-box></bot-box>
        <router-view></router-view>
        <!-- 一定要写上面的 -->
    </div>
</template>
<script>
import topbox from './topbox'
import topNav from './topNav'
import botBox from './bottom'
export default {
    components:{
        topbox,
        topNav,
        botBox
    }
}
</script>
<style lang="">
    
</style>