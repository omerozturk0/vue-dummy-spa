<template>
  <div class="contact-us my-3">
    <h1>{{ $t('pages.contactUs.title') }}</h1>
    <hr>
    <validation-observer v-slot="{ handleSubmit, valid }">
      <form
          @submit.prevent="valid && handleSubmit(handleFormSubmit())"
      >
        <b-form-group
            :label="$t('pages.contactUs.form.label.username')"
            label-for="input-username"
            class="mb-0"
        >
          <validation-provider name="input-username" rules="required|min:3" v-slot="{ valid }">
            <b-form-input
                id="input-username"
                name="input-username"
                v-model="message.name.value"
                :placeholder="$t('pages.contactUs.form.placeholder.username')"
                :state="valid"
            ></b-form-input>
          </validation-provider>
        </b-form-group>
        <b-form-group
            :label="$t('pages.contactUs.form.label.email')"
            label-for="input-email"
            class="mb-0"
        >
          <validation-provider name="input-email" rules="required|email" v-slot="{ valid }">
            <b-form-input
                id="input-email"
                name="input-email"
                type="email"
                v-model="message.email.value"
                :placeholder="$t('pages.contactUs.form.placeholder.email')"
                :state="valid"
            ></b-form-input>
          </validation-provider>
        </b-form-group>
        <b-form-group
            :label="$t('pages.contactUs.form.label.phone')"
            label-for="input-phone"
            class="mb-0"
        >
          <validation-provider name="input-phone" rules="required|min:14" v-slot="{ valid }">
            <b-form-input
                id="input-phone"
                name="input-phone"
                v-model="message.phone.value"
                :placeholder="$t('pages.contactUs.form.placeholder.phone')"
                :state="valid"
                v-mask="'(###) ###-####'"
            ></b-form-input>
          </validation-provider>
        </b-form-group>
        <b-form-group
            :label="$t('pages.contactUs.form.label.country')"
            label-for="input-country"
            class="mb-0"
        >
          <validation-provider name="input-country" rules="required" v-slot="{ valid }">
            <v-select
                id="input-country"
                name="input-country"
                class="form-control"
                :class="{ 'is-invalid': !valid, 'is-valid': valid }"
                v-model="message.country.value"
                :reduce="country => country.code"
                :placeholder="$t('pages.contactUs.form.placeholder.country')"
                :options="countries"
            />
          </validation-provider>
        </b-form-group>
        <b-form-group
            :label="$t('pages.contactUs.form.label.message')"
            label-for="input-message"
            class="mb-0"
        >
          <validation-provider name="input-message" rules="required" v-slot="{ valid }">
            <b-form-textarea
                id="input-message"
                name="input-message"
                rows="10"
                v-model="message.message.value"
                :placeholder="$t('pages.contactUs.form.placeholder.message')"
                :state="valid"
            ></b-form-textarea>
          </validation-provider>
        </b-form-group>
        <b-button
            type="submit"
            class="my-3"
            :disabled="!valid"
            @submit.stop.prevent="handleSubmit(handleFormSubmit())"
        >
          {{ $t('pages.contactUs.form.cta.submit') }}
        </b-button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { useUiState } from "../composables";
import { ref, watch, onMounted } from "@vue/composition-api";

export default {
  name: 'ContactUs',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  setup() {
    const { loggedUser, userIsAuthenticated, countries, currentLocale } = useUiState()
    const message = {
      name: ref(''),
      email: ref(''),
      phone: ref(''),
      country: ref(''),
      message: ref('')
    }

    console.log('currentLocale', currentLocale)

    const handleFetchLoggerUser = () => {
      message.name.value = loggedUser.value.username
      message.email.value = loggedUser.value.email
    }

    const handleFormSubmit = () => {
      console.log('message', message)
    }

    watch(userIsAuthenticated, (value) => {
      if (!value) return
      handleFetchLoggerUser()
    })

    onMounted(() => {
      if (loggedUser.value.username) {
        handleFetchLoggerUser()
      }
    })

    return {
      loggedUser,
      countries,
      message,
      handleFormSubmit
    }
  }
}
</script>
