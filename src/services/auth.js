export default {
  user: {
    authenticated: false,
    profile: JSON.parse(localStorage.getItem('user'))
  },
  check() {
    if (this.user.profile != null || this.user.profile != undefined) {
      this.user.authenticated = true;
    }
  },
  login(data) {
    localStorage.setItem('user', JSON.stringify({
      token: data.access_token,
      email: data.email,
      name: data.name,
      photo: data.photo,
    }));

    this.user.authenticated = true;
    this.user.profile = data;

    // Vue.http.headers.common['Authorization'] = 'Bearer ' + data.access_token;

    window.location.href = '/';
  },
  logout() {
    localStorage.removeItem('user');
    this.user.authenticated = false;
    this.user.profile = null;

    window.location.href = '/login';
  }
}
