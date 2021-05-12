<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <font-awesome-icon icon="bug" />
        {{ $t(`header.navigation.current.${currentRoute}`) }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/" active-class="active" exact>{{ $t('header.navigation.home') }}</b-nav-item>
            <b-nav-item to="/contact-us" active-class="active" exact>{{ $t('header.navigation.contactUs') }}</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown :text="$t(`languages.${currentLocale}`)" right>
            <b-dropdown-item @click="changeLocale('en')">{{ $t('languages.en') }}</b-dropdown-item>
            <b-dropdown-item @click="changeLocale('tr')">{{ $t('languages.tr') }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-if="!userIsAuthenticated" v-b-modal:login-modal>{{ $t('header.navigation.login') }}</b-nav-item>
          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <em>{{ loggedUser.username }}</em>
            </template>
            <b-dropdown-item>{{ loggedUser.email }}</b-dropdown-item>
            <b-dropdown-item @click="setUserIsAuthenticated(false)">{{ $t('header.navigation.logout') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import _ from "lodash";
import { useUiState } from "../composables";
import { computed } from "@vue/composition-api";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBug } from '@fortawesome/free-solid-svg-icons'

library.add(faBug)

export default {
  name: "Header",
  setup(props, context) {
    const { loggedUser, currentLocale, userIsAuthenticated, setUserIsAuthenticated, changeLocale } = useUiState();
    const currentRoute = computed(() => _.camelCase(context.root.$route.name))

    return {
      loggedUser,
      currentLocale,
      currentRoute,
      userIsAuthenticated,
      setUserIsAuthenticated,
      changeLocale
    }
  }
}
</script>
