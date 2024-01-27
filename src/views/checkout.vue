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
      <div class="flex w-full ss02">
        <div class="w-[50%] mt-8">
          <p class="text-xl font-semibold mb-5">صورت حساب و حمل و نقل</p>
          <div class="flex flex-col px-4 mb-5">
            <div class="flex">
              <div class="w-full ml-5">
                <label class="text-sm text-ultrablack" for="name">نام </label>
                <input
                  class="outline-none border-2 rounded-3xl mt-2 w-full px-4 py-2 text-sm border-lightergray text-ultragray"
                  type="text"
                  id="name"
                  placeholder=""
                />
              </div>
              <div class="w-full">
                <label class="text-sm text-ultrablack" for="lastname">
                  نام خانوادگی
                </label>
                <input
                  class="outline-none border-2 rounded-3xl mt-2 w-full px-4 py-2 text-sm border-lightergray text-ultragray"
                  type="text"
                  id="lastname"
                  placeholder=""
                />
              </div>
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                نام شرکت (اختیاری)
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="lastname"
                placeholder=""
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                آدرس خیابان
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="lastname"
                placeholder="نام خیابان و پلاک خانه"
              />
              <input
                class="outline-none border-2 rounded-3xl w-full mt-4 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="lastname"
                placeholder="آپارتمان، مجتمع، واحد و... (اختیاری)"
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                نام شرکت (اختیاری)
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="lastname"
                placeholder=""
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                استان
              </label>
              <select
                name="Waranti"
                id="waranti"
                class="checkoutselect mt-2 cursor-pointer block outline-none border-2 rounded-3xl w-full p-2 text-sm border-lightergray text-ultragray"
              >
                <option value="" disabled selected hidden>
                  لطفا ابتدا استان خود را انتخاب نمایید
                </option>
                <option value="1">تهران</option>
                <option value="2">گیلان</option>
                <option value="3">آذربایجان شرقی</option>
                <option value="4">خوزستان</option>
                <option value="5">فارس</option>
                <option value="6">اصفهان</option>
                <option value="7">خراسان رضوی</option>
                <option value="8">قزوین</option>
                <option value="9">سمنان</option>
                <option value="10">قم</option>
                <option value="11">مرکزی</option>
                <option value="12">زنجان</option>
                <option value="13">مازندران</option>
                <option value="14">گلستان</option>
                <option value="15">اردبیل</option>
                <option value="16">آذربایجان غربی</option>
                <option value="17">همدان</option>
                <option value="18">کردستان</option>
                <option value="19">کرمانشاه</option>
                <option value="20">لرستان</option>
                <option value="21">بوشهر</option>
                <option value="22">کرمان</option>
                <option value="23">هرمزگان</option>
                <option value="24">چهارمحال و بختیاری</option>
                <option value="25">یزد</option>
                <option value="26">سیستان و بلوچستان</option>
                <option value="27">ایلام</option>
                <option value="28">کهگلویه و بویراحمد</option>
                <option value="29">خراسان شمالی</option>
                <option value="30">خراسان جنوبی</option>
                <option value="31">البرز</option>
              </select>
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                شهر
              </label>
              <select
                name="Waranti"
                id="waranti"
                class="checkoutselect mt-2 cursor-pointer block outline-none border-2 rounded-3xl w-full p-2 text-sm border-lightergray text-ultragray"
              >
                <option value="" disabled selected hidden>
                  لطفا شهر خود را انتخاب نمایید
                </option>
                <option value="1">احمدآبادمستوفي</option>
                <option value="2">ادران</option>
                <option value="3">اسلام آباد</option>
                <option value="4">اسلام شهر</option>
                <option value="5">آبعلي</option>
                <option value="6">آبسرد</option>
                <option value="7">اوشان</option>
                <option value="8">اميريه</option>
                <option value="9">اكبرآباد</option>
                <option value="10">بومهن</option>
                <option value="11">برغان</option>
                <option value="12">پرند</option>
                <option value="13">تهران</option>
              </select>
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack mb-2" for="phonenumber">
                شماره تلفن
              </label>
              <input
                class="outline-none cursor-pointer block border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="number"
                id="phonenumber"
                placeholder="09123456789"
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                ایمیل
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="lastname"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="mt-2 mb-5">
              <label class="text-sm text-ultrablack mb-2" for="phonenumber">
                کد ملی مشتری
              </label>
              <input
                class="outline-none cursor-pointer block border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="number"
                id="phonenumber"
                placeholder=""
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack mb-2" for="Description">
                توضیحات سفارش (اختیاری)
              </label>
              <textarea
                class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm resize-none border-lightergray text-ultragray"
                type="text"
                id="Description"
                rows="10"
                cols="40"
                aria-invalid="false"
                placeholder="یادداشت‌ها درباره سفارش شما، برای مثال نکات مهم درباره نحوه تحویل سفارش "
              />
            </div>
          </div>
        </div>
        <div class="bg-backgroundgray w-[50%] p-8">
          <div>
            <p class="text-xl text-center font-semibold mb-5">سفارش شما</p>
          </div>
          <div class="flex flex-col bg-purewhite py-4 px-2.5">
            <div class="flex justify-between">
              <p class="px-2.5 py-4">محصول</p>
              <p class="px-2.5 py-4">جمع جزء</p>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4 w-[70%]">
                گوشی موبایل سامسونگ مدل Galaxy Z Fold5 5G ظرفیت 256 گیگابایت –
                رم 12 گیگ– ویتنام - مشکی, 18 ماه گارانتی شرکتی+تضمین رجستری × 1
              </p>
              <p class="px-2.5 py-4">68,086,000 تومان</p>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4">جمع جزء</p>
              <p class="px-2.5 py-4">68,086,000 تومان</p>
            </div>
            <div class="flex items-center">
              <p class="px-2.5 py-4">حمل و نقل</p>
              <div class="flex flex-col w-[80%]">
                <div class="flex w-full justify-between">
                  <div class="flex text-sm">
                    <label class="cursor-pointer" for="shiping">تحویل درب منزل:</label>
                    <span class=" font-semibold text-lightBlue">129,000 تومان</span>
                  </div>
                  <div class="flex">
                    <input
                      type="radio"
                      id="shiping"
                      name="shiping"
                      value="shiping"
                    />
                  </div>
                </div>
                <div class="flex w-full justify-between">
                  <div class="flex  text-sm">
                    <label class="cursor-pointer" for="shipingsnap"> تحویل درب انبار:</label>
                    <span class=" font-semibold text-lightBlue">15,000 تومان</span>
                  </div>
                  <div class="flex">
                    <input
                      type="radio"
                      id="shipingsnap"
                      name="shiping"
                      value="shiping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4">مجموع</p>
              <p class="px-2.5 py-4">68,215,000 تومان</p>
            </div>
          </div>
        </div>
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
