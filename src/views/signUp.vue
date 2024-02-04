<template>
  <section dir="rtl" class="bg-lightWhite ss02">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-purewhite rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-ultrablack">
                نام کاربری</label>
              <input type="text" name="username" id="username" v-model="username"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                placeholder=" " required />
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-ultrablack">
                شماره تماس</label>
              <input type="tel" name="phone" id="phone" v-model="phone"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                placeholder="09123456789" required />
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-ultrablack">ایمیل</label>
              <input type="email" name="email" id="email" v-model="email"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                placeholder="***@gmail.com" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-ultrablack">رمز عبور</label>
              <input type="password" name="password" id="password" placeholder="••••••••" v-model="password"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                required="" />
            </div>
            <div>
              <label for="password2" class="block mb-2 text-sm font-medium text-ultrablack"> تکرار رمز عبور</label>
              <input type="password" name="password2" id="password2" v-model="password2" placeholder="••••••••"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                required="" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-lightWhite focus:ring-3 outline-none focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                </div>
                <div class="mr-3 text-sm">
                  <label for="remember" class="cursor-pointer text-gray-500 prevent-select dark:text-gray-300"> نمایش رمز
                    عبور</label>
                </div>
              </div>

            </div>
            <button type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              ثبت نام
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              آیا حساب کاربری دارید؟
              <RouterLink to="/login/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">وارد
                شوید</RouterLink>
            </p>

            <div class="notification is-danger" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      email: '',
      phone: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'شکاف | ثبت نام'
  },
  methods: {
    submitForm() {
      this.errors = []

      if (this.username === '') {
        this.errors.push('نام کاربری مناسب نیست')
      }

      if (this.password === '') {
        this.errors.push('پسوورد مناسب نیست')
      }

      if (this.phone === '') {
        this.errors.push('شماره تلفن مناسب نیست')
      }

      if (this.email === '') {
        this.errors.push('ایمیل مناسب نیست')
      }

      if (this.password !== this.password2) {
        this.errors.push('پسوورد همخوانی ندارد')
      }

      if (!this.errors.length) {
        const formData = {
          phone: this.phone,
          username: this.username,
          email: this.email,
          password: this.password,
        }

        axios
          .post("/api/v1/users/", formData)
          .then(response => {
            toast({
              message: 'Account created, please log in!',
              type: 'is-success',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: 'bottom-right',
            })
            this.$router.push('/login')
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                if (property.includes("username")) {
                  this.errors.push('نام کاربری تکراری است')
                }
                if (property.includes("password")) {
                  this.errors.push('رمز عبور حداقل باید 8 کاراکتر داشته باشد ')
                }
                if (property.includes("phone")) {
                  this.errors.push('شماره تلفن تکراری است')
                }
                if (property.includes("email")) {
                  this.errors.push('ایمیل تکراری است')
                }
              }

            }
          })
      }
    },
  }
}
</script>
