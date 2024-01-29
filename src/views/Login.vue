<template>
  <section dir="rtl" class="bg-lightWhite ss02">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-purewhite rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-ultrablack md:text-2xl"
          >
            خوش آمدید
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
            <div dir="rtl" class="text-right">
              <label
                for="phoneNumber"
                class="block mb-2 text-sm font-medium text-ultrablack"
              >
                شماره تماس</label
              >
              <input
                type="tel"
                name="phone"
                id="phone"
                v-model="phone"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                placeholder="09123456789"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-ultrablack"
                >رمز عبور</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-lightWhite focus:ring-3 outline-none focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="mr-3 text-sm">
                  <label
                    for="remember"
                    class="cursor-pointer text-gray-500 prevent-select dark:text-gray-300"
                    >من را به خاطر بسپار</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >رمز عبور را فراموش کرده اید؟</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              وارد شوید
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              هنوز حساب کاربری ندارید؟
              <RouterLink
                to="/signup/"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >ثبت نام</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LogIn',
    data() {
        return {
            phone: '',
            password: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'LogIn | شکاف'
    },
    methods: {
        async submitForm() {
            axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")

            const formData = {
                phone: this.phone,
                password: this.password
            }

            await axios
                .post("/api/v1/token/login/", formData)
                .then(response => {
                    const token = response.data.auth_token

                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)

                    const toPath = this.$route.query.to || '/home'

                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>
