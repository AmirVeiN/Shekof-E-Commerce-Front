<template>
  <div class="flex justify-center">
    <div class="w-[70%]" dir="rtl">
      <div>
        <font-awesome-icon icon="fa-solid fa-info" />
        <span class="pr-2 text-sm font-semibold">قبلا ثبت نام کرده‌اید؟</span>
        <a class="text-ultrablue hover:underline text-sm font-semibold" href="#"
          >برای ورود اینجا را کلیک کنید</a
        >
      </div>
      <div class="w-full">
        <div class="w-[50%]">
          <p>صورت حساب و حمل و نقل</p>
          <div class="flex flex-col px-4 mb-5">
            <label
              class="text-sm text-ultrablack mb-2"
              for="Ordernumber"
              >شماره پیگیری سفارش
            </label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="text"
              id="Ordernumber"
              placeholder=" در صورت داشتن شماره پیگیری آن را وارد کنید"
            />
          </div>
        </div>
        <div class="w-[50%]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
