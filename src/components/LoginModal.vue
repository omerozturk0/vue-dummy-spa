<template>
  <validation-observer v-slot="{ handleSubmit, valid }" tag="div">
    <b-modal
        id="login-modal"
        :title="$t('login.modal.title')"
        :ok-title="$t('login.modal.cta.ok')"
        :cancel-title="$t('login.modal.cta.cancel')"
        :ok-disabled="!valid"
        @ok="valid && handleSubmit(setUserIsAuthenticated(true))"
    >
      <b-form-group
          :label="$t('login.modal.form.label.username')"
          label-for="input-username"
          class="mb-0"
      >
        <validation-provider name="input-username" rules="required|min:3" v-slot="{ valid }">
          <b-form-input
              id="input-username"
              name="input-username"
              :value="loggedUser.username"
              :placeholder="$t('login.modal.form.placeholder.username')"
              @input="p => setLoggedUser({ input: 'username', value: p })"
              :state="valid"
          ></b-form-input>
        </validation-provider>
      </b-form-group>
      <b-form-group
          :label="$t('login.modal.form.label.email')"
          label-for="input-email"
          class="mb-0"
      >
        <validation-provider name="input-email" rules="required|email" v-slot="{ valid }">
          <b-form-input
              id="input-email"
              name="input-email"
              :value="loggedUser.email"
              :placeholder="$t('login.modal.form.placeholder.email')"
              type="email"
              @input="p => setLoggedUser({ input: 'email', value: p })"
              :state="valid"
          ></b-form-input>
        </validation-provider>
      </b-form-group>
      <b-form-group
          :label="$t('login.modal.form.label.password')"
          label-for="input-password"
          class="mb-0"
      >
        <validation-provider name="input-password" rules="required|min:8" v-slot="{ valid }">
          <b-form-input
              id="input-password"
              name="input-password"
              :value="loggedUser.password"
              :placeholder="$t('login.modal.form.placeholder.password')"
              type="password"
              @input="p => setLoggedUser({ input: 'password', value: p })"
              :state="valid"
          ></b-form-input>
        </validation-provider>
      </b-form-group>
    </b-modal>
  </validation-observer>
</template>

<script>
import { useUiState } from "../composables";
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

export default {
  name: "LoginModal",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  setup() {
    const { loggedUser, setLoggedUser, setUserIsAuthenticated } = useUiState()

    return {
      loggedUser,
      setUserIsAuthenticated,
      setLoggedUser
    }
  }
}
</script>
