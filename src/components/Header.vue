<template>
    <header role="banner">
        <TopBar />
        <LogoWrap />
        <NavMenu />
    </header>
</template>

<script>
import TopBar from '@/components/TopBar'
import LogoWrap from '@/components/LogoWrap'
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Header',
  components:{
    TopBar,
    LogoWrap,
    NavMenu
  }
}
</script>