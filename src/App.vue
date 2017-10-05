<template>
  <div id="app">
    <div id="page-container" class="page-sidebar-fixed page-header-fixed">
      <app-header v-if="auth.user.authenticated"></app-header>
      <app-sidebar v-if="auth.user.authenticated"></app-sidebar>
      <div class="sidebar-bg" v-if="auth.user.authenticated"></div>
        <main>
          <div id="content" class="content">
            <router-view></router-view>
          </div>
        </main>
      <app-footer v-if="auth.user.authenticated"></app-footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import auth from '@/services/auth.js'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    'app-footer': Footer
  },
  data() {
    return {
      auth: auth
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      auth.check();
    });
  }
}
</script>

<style>

</style>
<style lang="scss">
  @import url('./styles.scss');
</style>
