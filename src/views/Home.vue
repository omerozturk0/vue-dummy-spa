<template>
  <div class="home">
    <b-jumbotron
        :header="$t('pages.home.jumbotron.header')"
        :lead="$t('pages.home.jumbotron.lead')"
        class="my-3"
    >
      <p>{{ $t('pages.home.jumbotron.description') }}</p>
      <b-button variant="primary" href="#">{{ $t('pages.home.jumbotron.cta') }}</b-button>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
