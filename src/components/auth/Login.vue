<template>
    <!-- begin login -->
    <div id="login">
      <div class="login login-with-news-feed">
        <!-- begin news-feed -->
        <div class="news-feed">
            <div class="news-image">
                <img src="~@/assets/img/login-bg/bg-7.jpg" data-id="login-cover-image" alt="" />
            </div>
            <div class="news-caption quote-caption">
                <p>{{ quote.content }}</p>
                <span>--- {{ quote.title }}</span>
            </div>
        </div>
        <!-- end news-feed -->
        <!-- begin right-content -->
        <div class="right-content">
            <!-- begin login-header -->
            <div class="login-header">
                <div class="brand">
                  <img src="~@/assets/img/logo-badr-small.png" alt="" class="logo">
                    Login Form
                </div>
            </div>
            <!-- end login-header -->
            <!-- begin login-content -->
            <div class="login-content">
                <div class="alert" :class="alertClass" role="alert">
                  {{ alert }}
                </div>
                <form class="margin-bottom-0" name="loginForm">
                    <div class="form-group m-b-15">
                        <input type="text" class="form-control input-lg" name="email" required placeholder="Email" />

                        <div class="invalid-feedback">
                              <div>Email is required</div>
                              <div>Email must be in valid email format</div>
                        </div>
                    </div>
                    <div class="form-group m-b-15">
                        <input type="password" class="form-control input-lg" name="password" required placeholder="Password" />

                        <div class="invalid-feedback">
                            <div>Password is required</div>
                        </div>
                    </div>
                    <div class="login-buttons">
                        <button type="submit" class="btn btn-success btn-block btn-lg">Login</button>
                    </div>
                </form>
                  <div class="text-center or-social">or</div>
                    <div class="text-center">
                      <button class="btn btn-primary btn-social-icon btn-google"><span class="fa fa-google"></span></button>
                      <button class="btn btn-primary btn-social-icon btn-facebook"><span class="fa fa-facebook"></span></button>
                    </div>
                    <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                        Don't have account yet? Click <router-link to="/register">here</router-link> to register.
                    </div>
                    <hr />
                    <p class="text-center">
                        &copy; Powered by <a href="http://badr.co.id">Badr Interactive</a>
                    </p>
            </div>
            <!-- end login-content -->
        </div>
        <!-- end right-container -->
      </div>
      <!-- end login -->
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      quote: {
        title: 'Quotes',
        content: 'Quote content...',
      },
      alert: '',
      alertClass: '',
    }
  }
}
</script>
<style lang="scss" scoped>
  @import url('./auth.scss');
  @import url('./login.scss');
</style>
