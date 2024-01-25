<template>
  <section dir="rtl" class="bg-lightWhite ss02">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-purewhite rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="userName"
                class="block mb-2 text-sm font-medium text-ultrablack"
              >
                نام کاربری</label
              >
              <input
                type="text"
                name="userName"
                id="userName"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label
                for="phoneNumber"
                class="block mb-2 text-sm font-medium text-ultrablack"
              >
                شماره تماس</label
              >
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
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
                placeholder="••••••••"
                class="bg-lighterwhiter border focus:ring-1 border-lightgray text-ultrablack sm:text-sm rounded-lg focus:ring-primary-600 outline-none focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                for="repeatPassword"
                class="block mb-2 text-sm font-medium text-ultrablack"
                > تکرار رمز عبور</label
              >
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
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
                    required
                  />
                </div>
                <div class="mr-3 text-sm">
                  <label for="remember" class="cursor-pointer text-gray-500 prevent-select dark:text-gray-300"
                    > نمایش رمز عبور</label
                  >
                </div>
              </div>
             
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              ثبت نام 
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              آیا حساب کاربری دارید؟
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >وارد شوید</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
