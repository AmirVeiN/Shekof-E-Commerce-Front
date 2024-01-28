<template>
  <headerComponent />
  <div class="flex justify-center">
    <div class="w-[70%]" dir="rtl">
      <div class="my-8">
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
              <label class="text-sm text-ultrablack" for="Cmpanyname">
                نام شرکت (اختیاری)
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="Cmpanyname"
                placeholder=""
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="Addres">
                آدرس خیابان
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="Addres"
                placeholder="نام خیابان و پلاک خانه"
              />
              <input
                class="outline-none border-2 rounded-3xl w-full mt-4 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="Addres"
                placeholder="آپارتمان، مجتمع، واحد و... (اختیاری)"
              />
            </div>
            <div class="mt-2">
              <label
                class="text-sm text-ultrablack"
                for="Postalcode"
              >
                کد پستی
              </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="text"
                id="Postalcode"
                placeholder=""
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="lastname">
                استان
              </label>
              <select
                name="Waranti"
                id="city"
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
                id="city"
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
              <label class="text-sm text-ultrablack mb-2" for="phone">
                شماره تلفن
              </label>
              <input
                class="outline-none cursor-pointer block border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="number"
                id="phone"
                placeholder="09123456789"
              />
            </div>
            <div class="mt-2">
              <label class="text-sm text-ultrablack" for="email"> ایمیل </label>
              <input
                class="outline-none border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="mt-2 mb-5">
              <label class="text-sm text-ultrablack mb-2" for="nationalcode">
                کد ملی مشتری
              </label>
              <input
                class="outline-none cursor-pointer block border-2 rounded-3xl w-full mt-2 px-4 py-2 text-sm border-lightergray text-ultragray"
                type="number"
                id="nationalcode"
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
        <div class="bg-backgroundgray rounded-lg w-[50%] p-8">
          <div>
            <p class="text-xl text-center font-semibold mb-5">سفارش شما</p>
          </div>
          <div class="flex flex-col bg-purewhite rounded-lg py-4 px-2.5 mb-5">
            <div class="flex justify-between">
              <p class="px-2.5 py-4">محصول</p>
              <p class="px-2.5 py-4">جمع جزء</p>
            </div>
            <div class="divide-y-2 divide-lightergray px-1 w-full">
              <p></p>
              <p></p>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4 w-[70%]">
                گوشی موبایل سامسونگ مدل Galaxy Z Fold5 5G ظرفیت 256 گیگابایت –
                رم 12 گیگ– ویتنام - مشکی, 18 ماه گارانتی شرکتی+تضمین رجستری × 1
              </p>
              <p class="px-2.5 py-4">68,086,000 تومان</p>
            </div>
            <div class="divide-y-[1px] divide-lightergray px-1 w-full">
              <p></p>
              <p></p>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4">جمع جزء</p>
              <p class="px-2.5 py-4">68,086,000 تومان</p>
            </div>
            <div class="divide-y-[1px] divide-lightergray px-1 w-full">
              <p></p>
              <p></p>
            </div>
            <div class="flex items-center">
              <p class="px-2.5 py-4">حمل و نقل</p>
              <div class="flex flex-col w-[80%]">
                <div class="flex w-full justify-between">
                  <div class="flex text-sm">
                    <label class="cursor-pointer prevent-select" for="shiping"
                      >تحویل درب منزل:</label
                    >
                    <span class="font-semibold text-lightBlue"
                      >129,000 تومان</span
                    >
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
                  <div class="flex text-sm">
                    <label
                      class="cursor-pointer prevent-select"
                      for="shipingsnap"
                    >
                      تحویل درب انبار:</label
                    >
                    <span class="font-semibold text-lightBlue"
                      >15,000 تومان</span
                    >
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
            <div class="divide-y-[1px] divide-lightergray px-1 w-full">
              <p></p>
              <p></p>
            </div>
            <div class="flex justify-between">
              <p class="px-2.5 py-4">مجموع</p>
              <p class="px-2.5 py-4">68,215,000 تومان</p>
            </div>
          </div>
          <div class="flex flex-col justify-center mt-5">
            <div>
              <div class="flex">
                <input
                  type="radio"
                  id="paymentmethodcard"
                  :value="'cart'"
                  v-model="payment"
                />
                <label
                  class="cursor-pointer pr-2 prevent-select"
                  for="paymentmethodcard"
                >
                  کارت به کارت
                </label>
              </div>
              <div v-if="payment === 'cart'">
                <div
                  class="flex text-sm flex-col rounded-xl text-textgray p-4 mt-4 bg-purewhite"
                >
                  <div class="mb-2.5 space-y-1">
                    <strong>
                      این روش خرید شامل مبالغ خرید بالای 10 میلیون تومان نمی
                      باشد.
                    </strong>
                    <p>
                      در صورت تسویه بصورت کارت به کارت/بانکی از طریق شماره حساب
                      زیر اقدام گردد.
                    </p>
                    <p>شماره حساب نزد پست بانک: 1000152326616</p>
                    <p>شماره کارت پست بانک: 6277601255598441</p>
                    <p>بنام آقای امین کیانی</p>
                  </div>
                  <strong class="w-[30rem]">
                    بعد از پرداخت کارت به کارت رسید پرداخت را از طریق شبکه های
                    اجتماعی به شماره 09366681202 ارسال نمایید یا با یکی از شماره
                    های ما تماس حاصل فرمایید.
                  </strong>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex">
                <input
                  type="radio"
                  id="paymentotc"
                  v-model="payment"
                  :value="'otc'"
                />
                <label
                  class="cursor-pointer pr-2 prevent-select"
                  for="paymentotc"
                >
                  پرداخت در محل(فقط شهر تهران)
                </label>
              </div>
              <div v-if="payment === 'otc'">
                <div
                  class="flex text-sm flex-col rounded-xl text-textgray p-4 mt-4 bg-purewhite"
                >
                  <div class="mb-2.5 space-y-2">
                    <p class="text-center font-normal text-black">
                      پرداخت توسط کارت بانکی پس از تحویل کالا در محل.
                    </p>
                    <p>
                      (جهت قطعی شدن خریدتان، مبلغ یک میلیون تومان بیعانه به حساب
                      زیر واریز کرده و یا از طریق لینک زیر بصورت آنلاین بیعانه
                      را پرداخت نمایید.)
                    </p>
                    <p>
                      شماره کارت پست بانک:
                      <strong>6277601255598441</strong> بنام آقای
                      <strong>امین کیانی</strong>
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="text-center text-base text-lightBlue cursor-pointer font-bold bg-submitgray w-44 py-3"
                  >
                    پرداخت آنلاین بیعانه
                  </button>
                  <p class="text-textred mt-4">
                    ***اعتبار سفارش شما برای پرداخت در محل به مدت 30 دقیقه می
                    باشد. در غیر این صورت سفارش شما لغو خواهد گردید.***
                  </p>
                </div>
              </div>
            </div>
            <div class="divide-y-[1px] mt-5 divide-lightergray px-1 w-full">
              <p></p>
              <p></p>
            </div>
            <div>
              <div class="flex text-sm items-center prevent-select mt-5">
                <input
                  class="w-5"
                  type="checkbox"
                  id="news"
                  checked
                  value="1"
                />
                <label class="cursor-pointer pr-2" for="news"
                  >من
                  <a
                    href="#"
                    class="text-lightBlue font-semibold hover:underline"
                    >شرایط و مقررات</a
                  >
                  سایت را خوانده ام و آن را می پذیرم.</label
                >
              </div>
              <button
                type="submit"
                class="text-center mt-8 text-base rounded-md bg-lightBlue cursor-pointer text-purewhite font-bold w-full py-3"
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerCmponent />
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      payment: "",
    };
  },
  methods: {
    methodclick() {
      this.paymentotc ? (this.paymentotc = false) : (this.paymentotc = true);
    },
  },
};
</script>
<script setup>
import headerComponent from "@/components/headerComponent.vue";
import footerCmponent from "@/components/footerCmponent.vue";
</script>
