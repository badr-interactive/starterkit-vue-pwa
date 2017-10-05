<template>
  <div id="register">
    <!-- begin login -->
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
                    Register Form
                </div>
            </div>
            <!-- end login-header -->
            <!-- begin login-content -->
            <div class="login-content">
                <div class="alert" :class="alertClass" role="alert">
                  {{ alert }}
                </div>
                <form class="margin-bottom-0" name="registerForm" v-on:submit.prevent="doRegister">
                    <div class="form-group m-b-15">
                        <input type="text" class="form-control input-lg" v-model="email" required placeholder="Email" />
                        <div class="invalid-feedback">
                              <div>Email is required</div>
                              <div>Email must be in valid email format</div>
                        </div>
                    </div>
                    <div class="form-group m-b-15">
                        <input type="password" class="form-control input-lg" v-model="password" required placeholder="Password" />
                        <div class="invalid-feedback">
                            <div>Password is required</div>
                        </div>
                    </div>
                    <div class="form-group m-b-15">
                        <input type="password" class="form-control input-lg" v-model="confirmation_password" required placeholder="Confirmation Password" />

                        <div class="invalid-feedback">
                            <div>Confirmation Password is required</div>
                        </div>
                    </div>
                    <div class="login-buttons">
                        <button type="submit" class="btn btn-success btn-block btn-lg">Register</button>
                    </div>
                </form>
                    <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                        <router-link to="/login">Back to login</router-link>
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
  name: 'register',
  data () {
    return {
      quote: {
        title: 'Quotes',
        content: 'Quote content.......'
      },
      alert: '',
      alertClass: '',
      email: '',
      password: '',
      confirmation_password: '',
    }
  },
  methods: {
    doRegister() {
      var data = {
        email: this.email,
        password: this.password,
        confirmation_password: this.confirmation_password
      };

      this.$http.post('auth/register', data)
      .then(response => {
        this.reset();
        this.alertClass = 'alert-success';
        this.alert = response.data.message;
      })
      .catch(error => {
        this.alert = error.data.message;
        this.alertClass = 'alert-danger';
        this.password = '';
        this.confirmation_password = '';
      });
    },
    reset() {
      this.email = '';
      this.password = '';
      this.confirmation_password = '';
    }
  }
}
</script>
