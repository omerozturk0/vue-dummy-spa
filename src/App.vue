<template>
  <div id="app">
    <Header />
    <main>
      <b-container>
        <router-view/>
      </b-container>
    </main>
    <LoginModal />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

export default {
  components: {
    Footer,
    LoginModal,
    Header
  }
}
</script>
