<template>
  <headerComponent />
  <div class="w-full h-full flex justify-center items-center">
    <div dir="rtl" class="p-3 ss02 w-[70%] min-w-[1000px]">
      <div class="flex justify-center items-center">
        <P class="text-center text-gray text-sm">
          <br />
          ای نور ما ای سور ما ای دولت منصور ما <br />جوشی بنه در شور ما تا می
          شود انگور ما <br />
          ای دلبر و مقصود ما ای قبله و معبود ما <br />آتش زدی در عود ما نظاره کن
          در دود ما <br />ای یار ما عیار ما دام دل خمار ما <br />
          پا وامکش از کار ما بستان گرو دستار ما
          <br />
          (مولانا)
        </P>
      </div>
      <div class="text-right mb-5">
        <p class="text-2xl font-medium text-ultrablue mb-5">
          خوشحالیم که ما را انتخاب کرده‌اید​
        </p>
        <p class="text-gray text-sm">
          اگر سؤال یا مشکلی یا شکایتی دارید، خوشحال می‌شویم که با ما در تماس
          باشید. شکاف هرروز هفته از ساعت 9 تا 21 به همه سؤالات شما پاسخگوست. در
          صورت عدم پاسخگویی تماس تلفنی، می‌توانید از طریق ایمیل یا فرم ارتباطی
          زیر درخواست خود را ارسال کرده تا در اسرع وقت با شما تماس گرفته شود.
        </p>
      </div>
      <p class="text-right text-2xl font-medium text-ultrablue mb-5">
        آدرس های شکاف​
      </p>
      <div class="text-right flex mb-5">
        <div class="w-[50%]">
          <p class="text-2xl font-medium text-ultrablue mb-5">دفتر مرکزی</p>
          <p class="text-gray text-sm">تهران، میدان ولی‌عصر، خیابان رودسر</p>
          <div>
            <NeshanMap
              ref="mapRef"
              :mapKey="mapKey"
              :serviceKey="serviceKey"
              :center="{
                latitude: 35.69672648316882,
                longitude: 51.36281969540723,
              }"
              :zoom="12"
              :scale="0.8"
            />
          </div>
        </div>
        <div class="w-[50%]">
          <p class="text-2xl font-medium text-ultrablue mb-5">توزیع و پخش</p>
          <p class="text-gray text-sm">
            تهران- مهرآباد جنوبی-خیابان توکلی- خیابان میرقادری – پلاک 19 واحد 3
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-2xl font-medium text-ultrablue mb-5">
          تماس با ما از طریق ایمیل:
        </p>
        <p class="text-gray text-sm mb-5">
          اگر تمایل به ارسال مستقیم ایمیل دارید، می‌توانید از طریق ایمیل‌های زیر
          با ما در ارتباط باشید.
        </p>
        <p class="text-gray text-sm mb-5">
          در صورت خرید محصولات سایت
          <a href="#" class="text-ultrablue">شکاف</a> ، جهت تسریع در پاسخ‌گویی
          لطفاً شماره سفارش (پیگیری) را در ایمیل خود ذکر کنید.
        </p>
        <p class="text-gray text-sm mb-5">ایمیل مدیریت: info@shekaf.org</p>
        <p class="text-gray text-sm mb-5">ایمیل پشتیبانی: support@shekaf.org</p>
        <p class="text-gray text-sm mb-5">ایمیل فروشگاه: sale@shekaf.org</p>
      </div>
      <div class="flex flex-col dir">
        <p class="text-2xl font-medium text-ultrablue mb-5">
          تماس با ما از طریق تماس تلفنی:
        </p>
        <p class="text-gray text-sm mb-5">
          لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا پرسش‌‌های متداول را
          مشاهده کنید.
        </p>
        <div
          class="text-sm font-semibold flex flex-row space-x-1 justify-center text-blue mb-5"
        >
          <p class="">خط ویژه پشتیبانی</p>
          <p class="pr-1">۰۲۱-۶۶۶-۸۸-۷۴۰</p>
          <img class="w-3" src="/footer/Iconly-Bold-Calling.svg" alt="" />
        </div>
        <div
          class="text-sm font-semibold flex flex-row space-x-1 justify-center text-blue mb-5"
        >
          <p class="">خط ویژه پشتیبانی</p>
          <p class="pr-1">0939-863-1919</p>
          <img class="w-3" src="/footer/Iconly-Bold-Calling.svg" alt="" />
        </div>
        <div
          class="text-sm font-semibold flex flex-row space-x-1 justify-center text-blue mb-5"
        >
          <p class="">ارتباط با مدیریت</p>
          <p class="pr-1">0936-668-1202</p>
          <img class="w-3" src="/footer/Iconly-Bold-Calling.svg" alt="" />
        </div>
      </div>
      <div class="mb-5">
        <p class="text-2xl font-medium text-ultrablue mb-5">
          تماس با ما از طریق شبکه های اجتماعی:
        </p>
        <p class="text-gray text-sm mb-5">ما را در شبکه های اجتماعی ببینید.</p>
        <div
          dir="ltr"
          class="flex flex-row space-x-6 justify-center items-center"
        >
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-youtube"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-twitter"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-pinterest"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-linkedin"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-facebook"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-telegram"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-whatsapp"
          />
          <font-awesome-icon
            class="text-4xl cursor-pointer text-blue/70 hover:text-blue"
            icon="fa-brands fa-instagram"
          />
        </div>
      </div>
      <div>
        <p class="text-2xl font-medium text-ultrablue mb-5">
          تماس با ما از طریق فرم تماس:
        </p>
        <p class="text-gray text-sm mb-5">
          در صورت نیاز به ارتباط سریع‌تر با ما می‌توانید از طریق فرم زیر درخواست
          خود را ارسال نمایید.
        </p>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col px-4 mb-5">
            <label class="text-sm mb-2" for="name">نام</label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="text"
              id="name"
              placeholder="نام"
            />
          </div>
          <div class="flex flex-col px-4 mb-5">
            <label class="text-sm text-ultrablack mb-2" for="lastname"
              >نام خانوادگی
            </label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="text"
              id="lastname"
              placeholder=" نام خانوادگی"
            />
          </div>
          <div class="flex flex-col px-4 mb-5">
            <label class="text-sm text-ultrablack mb-2" for="phonenumber">
              شماره تلفن
            </label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="number"
              id="phonenumber"
              placeholder="09123456789"
            />
          </div>
          <div class="flex flex-col px-4 mb-5">
            <label class="text-sm text-ultrablack mb-2" for="email"
              >ایمیل شما
            </label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="text"
              id="email"
              placeholder="ایمیل"
            />
          </div>
          <div class="flex flex-col px-4 mb-5">
            <label class="text-sm text-ultrablack mb-2" for=""
              >بخش مربوطه
            </label>
            <select
              id=""
              class="cursor-pointer block outline-none border-2 rounded-3xl w-full p-2 text-sm border-lightergray text-ultragray contactUsSelect"
            >
              <option value="Maneger" selected>مدیریت</option>
              <option value="" class="">پشتیبانی</option>
              <option value="" class="">فروشگاه</option>
            </select>
          </div>
          <div class="flex flex-col px-4 mb-5">
            <label
              class="text-sm text-ultrablack mb-2"
              for="Ordernumber
"
              >شماره پیگیری سفارش
            </label>
            <input
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm border-lightergray text-ultragray"
              type="text"
              id="Ordernumber
"
              placeholder=" در صورت داشتن شماره پیگیری آن را وارد کنید"
            />
          </div>
          <div class="flex flex-col px-4 mb-5 col-span-2">
            <label class="text-sm text-ultrablack mb-2" for="Description"
              >پیام شما
            </label>
            <textarea
              class="outline-none cursor-pointer block border-2 rounded-3xl w-full px-4 py-2 text-sm resize-none border-lightergray text-ultragray"
              type="text"
              id="Description"
              rows="10"
              cols="40"
              aria-invalid="false"
              placeholder="پیام شما"
            />
          </div>
        </div>
        <div class="flex items-center cursor-pointer mb-2">
          <input class="w-5 mx-2" type="checkbox" id="news" checked value="1" />
          <label class="cursor-pointer prevent-select" for="news"
            >من را در خبرنامه ثبت نام کن!
          </label>
        </div>
        <div class="flex flex-col px-4 mb-5">
          <p class="text-sm text-ultrablack mb-1">سوال امنیتی</p>
          <label class="text-sm text-ultrablack mb-2" for="question"
            >حاصل جمع 2 + 1
          </label>
          <input
            class="outline-none cursor-pointer block border-2 rounded-3xl w-[50%] px-4 py-2 text-sm border-lightergray text-ultragray mb-5"
            type="text"
            id="question"
            placeholder=""
          />
          <button
            type="submit"
            class="text-center cursor-pointer text-sm bg-submitgray w-20 px-5 py-2"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  </div>
  <footerCmponent />
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<script setup lang="ts">
import headerComponent from "../components/headerComponent.vue";
import footerCmponent from "../components/footerCmponent.vue";
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
import { ref, watch } from "vue";
const mapKey = "web.593931940c0e4d448cd74fd171201a11";
const serviceKey = "service.06992fe3024746b5a96671386714b76e";
const mapRef = ref<InstanceType<typeof NeshanMap>>();
watch(
  () => mapRef.value?.state.map,
  (nv, ol) => {
    if (ol) return;
    setTimeout(() => {
      mapRef.value?.state.map?.setMapType("standard-night");
      if (mapRef.value?.state.mapType)
        mapRef.value.state.mapType = "standard-night";
    }, 2000);
    setTimeout(() => {
      mapRef.value?.search({
        term: "ولی عصر",
        coords: [51.36281969540723, 35.69672648316882],
      });
    }, 3000);
  }
);
</script>
