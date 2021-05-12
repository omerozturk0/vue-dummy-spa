import Vue from 'vue'
import i18n from "../i18n";
import router from "../router";
import VueCompositionApi, { computed, reactive, ref } from '@vue/composition-api'
Vue.use(VueCompositionApi)

const state = reactive({
  loggedUser: ref({
    username: '',
    email: '',
    password: ''
  }),
  loginModal: ref(false),
  userIsAuthenticated: ref(false)
});

export const useUiState = () => {
  const currentRoute = computed(() => router.history.current.name)

  const loginModal = computed(() => state.loginModal)
  const setLoginModal = status => state.loginModal = status

  const currentLocale = computed(() => i18n.locale)
  const countries = computed(() => i18n.messages[currentLocale.value].countries)
  const changeLocale = locale => i18n.locale = locale

  const userIsAuthenticated = computed(() => state.userIsAuthenticated)
  const setUserIsAuthenticated = status => {
    if (!status) state.loggedUser = {
      username: '',
      email: '',
      password: ''
    }
    state.userIsAuthenticated = status
  }

  const loggedUser = computed(() => state.loggedUser)
  const setLoggedUser = ({ input, value }) => state.loggedUser = { ...state.loggedUser, [input]: value }

  return {
    currentRoute,
    countries,
    loginModal,
    currentLocale,
    userIsAuthenticated,
    loggedUser,
    setLoginModal,
    changeLocale,
    setUserIsAuthenticated,
    setLoggedUser
  }
}
