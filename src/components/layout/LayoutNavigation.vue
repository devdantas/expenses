<template>
  <nav class="nav flex-column justify-content-between">
    <div>
      <router-link
        exact
        :key="i"
        class="nav-link"
        exact-active-class="active"
        :to="{name: router.name}"
        v-for="(router,i) in routerLinks"
      >
        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
        {{ router.meta.title }}
      </router-link>

      <hr>
      <layout-new-expenses/>
    </div>

    <layout-logout/>
  </nav>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNewExpenses from './LayoutNewExpenses'

export default {
    components: {
      LayoutLogout,
      LayoutNewExpenses
    },
    computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'login')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: calc(100vh - 49px);
  width: calc(100% + 30px);
  margin-left: -15px;
  .nav-link{
    color: var(--white);
    transition: .1s;
    &.active{
      color: var(--featured);
      background-color: transparent;
    }
    &:hover{
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>

