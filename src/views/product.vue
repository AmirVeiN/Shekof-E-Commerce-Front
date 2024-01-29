<template>
  <headerComponent />
  <div class="flex flex-col h-full w-full justify-center items-center mt-16">
    <div class="flex flex-row-reverse w-[68%] min-w[1000px]">
      <div class="w-[38%] h-full flex flex-col space-y-6">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
        >
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div
              class="carousel__item relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            >
              <img
                :src="'/product/' + slide"
                alt=""
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          :items-to-show="3"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="slide in imageUrl()" :key="slide">
            <div class="carousel__item" @click="slideTo(slide - 1)">
              <img :src="'/product/' + slide" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div
        class="w-[70%] justify-between h-full mr-6 items-end flex flex-col shadow-md rounded-lg shadow-[lightgray] px-8 pt-7 pb-4 space-y-6 text-right"
      >
        <p class="font-bold pname text-lg">{{ product.Name }}</p>
        <div class="font-bold text-blue text-[21px] flex flex-row space-x-1">
          <p class="">تومان</p>
          <p class="">{{ Intl.NumberFormat("fa").format(product.Price) }}</p>
        </div>
        <p class="text-sm font-bold">ویزگی ها</p>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.InternalMemory }}</p>
          </div>
          <p>: حافظه داخلی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>گیگابایت</p>
            <p>{{ product.Ram }}</p>
          </div>
          <p>: Ram مقدار</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>اینچ</p>
            <p>{{ product.Screen }}</p>
          </div>
          <p>: بازه‌ی اندازه صفحه نمایش</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: شبکه های ارتباطی</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>مگاپیکسل</p>
            <p>{{ product.PictureRes }}</p>
          </div>
          <p>: رزولوشن عکس</p>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
        <div class="flex flex-col space-y-2">
          <p>رنگ ها</p>
          <div class="productColor flex flex-row space-x-2">
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileBlack rounded-full shadow-md"
                v-if="colorList().includes('Black')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileOlive rounded-full shadow-md"
                v-if="colorList().includes('Olive')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobilePurple rounded-full shadow-md"
                v-if="colorList().includes('Purple')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileWhite rounded-full shadow-md"
                v-if="colorList().includes('White')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileCream rounded-full shadow-md"
                v-if="colorList().includes('Cream')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-gray rounded-full shadow-md"
                v-if="colorList().includes('Gray')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-Sierrablue rounded-full shadow-md"
                v-if="colorList().includes('Sierrablue')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileBlue rounded-full shadow-md"
                v-if="colorList().includes('Blue')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-mobileGreen rounded-full shadow-md"
                v-if="colorList().includes('Green')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-Burgundy rounded-full shadow-md"
                v-if="colorList().includes('Burgundy')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-Beige rounded-full shadow-md"
                v-if="colorList().includes('Beige')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-brown rounded-full shadow-md"
                v-if="colorList().includes('Brown')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-lime rounded-full shadow-md"
                v-if="colorList().includes('Lime')"
              ></button>
            </div>
            <div class="hover:border-b-2 hover:border-blue h-[30px]">
              <button
                class="w-[24px] h-[24px] bg-silver rounded-full shadow-md"
                v-if="colorList().includes('Silver')"
              ></button>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <label for="waranti">: گارانتی </label>
          <div>
            <select
              name="Waranti"
              id="waranti"
              class="prudoctselect cursor-pointer block outline-none border-2 rounded-3xl w-72 p-2 text-sm border-lightergray text-ultragray"
            >
              <option value="" disabled selected hidden>
                یک گزینه را انتخاب کنید
              </option>
              <option value="waranti18" class="">
                18 ماه گارانتی شرکتی + تضمین رجستری
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-5 items-center pt-4">
          <button
            class="px-6 py-3 bg-lightBlue font-semibold rounded-lg text-white"
          >
            افزودن به سبد خرید
          </button>
          <div class="flex justify-center items-center">
            <button
              @click="counter('+')"
              class="p-2 border-gray border-2 rounded-l-3xl hover:bg-blue hover:border-blue hover:transition-all hover:text-white"
            >
              +
            </button>
            <p class="py-2 border-y-2 border-gray w-8 text-center">
              {{ count }}
            </p>
            <button
              @click="counter('-')"
              class="p-2 border-gray border-2 rounded-r-3xl hover:bg-blue hover:border-blue hover:transition-all hover:text-white"
            >
              -
            </button>
          </div>
        </div>
        <div class="flex flex-row items-center justify-around w-full py-8">
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">پرداخت آنلاین امن</p>
              <p class="text-gray text-[10px]">پرداخت با کارت های شتاب</p>
            </div>
            <img src="/footer/SafePayment.svg" class="w-[40px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">ارسال سریع</p>
              <p class="text-gray text-[10px]">ارسال در کوتاه ترین زمان</p>
            </div>
            <img src="/footer/FastSending.svg" class="w-[45px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">ضمانت بازگشت کالا</p>
              <p class="text-gray text-[10px]">ضمانت تا حداکثر 7 روز</p>
            </div>
            <img src="/footer/Guarantee.svg" class="w-[35px]" alt="" />
          </div>
          <div class="flex flex-row gap-4 justify-center items-center">
            <div class="text-right w-full flex space-y-3 flex-col">
              <p class="text-blue font-bold text-sm">پشتیبانی پاسخ گو</p>
              <p class="text-gray text-[10px]">پشتیبانی و مشاوره فروش</p>
            </div>
            <img src="/footer/Calling.svg" class="w-[35px]" alt="" />
          </div>
        </div>
        <div class="flex flex-row-reverse gap-4">
          <div
            class="flex flex-row-reverse text-[15px] items-center gap-1 font-semibold hover:text-gray cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid  fa-shuffle" class="" />
            <p>مقایسه</p>
          </div>
          <div
            class="flex flex-row-reverse text-[15px] items-center gap-1 font-semibold hover:text-gray cursor-pointer"
          >
            <font-awesome-icon icon="fa-regular fa-heart" class="" />
            <p>افزودن به علاقه مندی</p>
          </div>
        </div>
        <div
          class="w-full py-4 px-5 bg-lightWhite rounded-2xl flex flex-row-reverse"
        >
          <div>10</div>
          <p class="pname">نفر در حال مشاهده این محصول هستند!</p>
        </div>
        <div class="divide-y-2 divide-lightgray w-full">
          <p></p>
          <p></p>
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Slug }}</p>
          </div>
          <p>: شناسه محصول</p>
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: شبکه های ارتباطی</p>
        </div>
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Category }}</p>
          </div>
          <p>: دسته</p>
        </div>
        <!-- <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 text-blue">
            <p>{{ product.Networks }}</p>
          </div>
          <p>: برچسب</p>
        </div> -->
        <div
          class="flex flex-row space-x-3 justify-center items-center font-bold text-sm"
        >
          <div class="flex flex-row space-x-1 gap-3">
            <font-awesome-icon
              class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-telegram"
            />
            <font-awesome-icon
              class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-linkedin-in"
            />
            <font-awesome-icon
              class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-pinterest"
            />
            <font-awesome-icon
              class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-twitter"
            />
            <font-awesome-icon
              class="text-base text-midgray/70 cursor-pointer hover:text-midgray"
              icon="fa-brands fa-facebook-f"
            />
          </div>
          <p>: اشتراک گذاری</p>
        </div>
      </div>
    </div>
  </div>
  <div class="divide-y-[1px] pt-9 divide-lightgray">
    <p></p>
    <p></p>
  </div>
  <div class="flex justify-center items-center h-full {{ activeCount() }}">
    <div
      class="flex flex-row-reverse w-[70%] gap-8 items-center pt-7 font-bold text-lightgray"
    >
      <button
        @click="ChangeActive('توضیحات')"
        :class="
          countdesc === 'توضیحات'
            ? 'text-blue border-b-2 border-blue'
            : 'text-gray'
        "
        class="text-lg transition duration-300 ease-in-out cursor-pointer"
      >
        <p>توضیحات</p>
      </button>
      <button
        @click="ChangeActive('مشخصات')"
        :class="
          countdesc === 'مشخصات'
            ? 'text-blue border-b-2 border-blue'
            : 'text-gray'
        "
        class="text-lg transition duration-300 ease-in-out cursor-pointer"
      >
        مشخصات کلی
      </button>
      <button
        @click="ChangeActive('نظرات')"
        :class="
          countdesc === 'نظرات'
            ? 'text-blue border-b-2 border-blue'
            : 'text-gray'
        "
        class="text-lg transition duration-300 ease-in-out cursor-pointer"
      >
        نظرات (0)
      </button>
      <button
        @click="ChangeActive('گارانتی')"
        :class="
          countdesc === 'گارانتی'
            ? 'text-blue border-b-2 border-blue'
            : 'text-gray'
        "
        class="text-lg transition duration-300 ease-in-out cursor-pointer"
      >
        شرایط گارانتی
      </button>
    </div>
  </div>
  <div class="w-full h-full ss02 flex justify-center items-center pt-5">
    <div
      class="w-[70%] h-full text-right text-lg text-black"
      v-if="countdesc === 'توضیحات'"
    >
      {{ product.Description }}
    </div>
    <div
      class="w-[70%] h-full text-right text-lg text-black"
      v-if="countdesc === 'مشخصات'"
    >
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue mb-3">اطلاعات پایه</h3>
        <productDetail
          v-if="product.ModelNumbers !== '0' && product.ModelNumbers !== ''"
          title="مدل‌‌ نامبرهای این محصول"
          :desc="product.ModelNumbers"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.PriceRelease !== '0' && product.PriceRelease !== ''"
          title="حدود قیمت در زمان عرضه	"
          :desc="product.PriceRelease"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Announced !== '0' && product.Announced !== ''"
          title="تاریخ معرفی"
          :desc="product.Announced"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Supplystatus !== ''"
          title="وضعیت عرضه"
          :desc="product.Supplystatus === '0' ? 'عرضه نشده' : 'عرضه شده'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Releasedate !== '0' && product.Releasedate !== ''"
          title="تاریخ عرضه	"
          :desc="product.Releasedate"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.SAR !== '0' && product.SAR !== ''"
          title="نرخ مخصوص جذب (SAR)"
          :desc="product.SAR"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.SAREU !== '0' && product.SAREU !== ''"
          title="نرخ مخصوص جذب (SAR EU)"
          :desc="product.SAREU"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Os !== '0' && product.Os !== ''"
          title="نوع سیستم‌عامل	"
          :desc="product.Os"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.OsInRelease !== '0' && product.OsInRelease !== ''"
          title="سیستم‌عامل در زمان عرضه	"
          :desc="product.Os + product.OsInRelease"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Descriptionos !== '0' && product.Descriptionos !== ''"
          title="توضیحات سیستم‌عامل	"
          :desc="product.Descriptionos"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">طراحی</h3>
        <productDetail
          v-if="product.Dimensions !== '0' && product.Dimensions !== ''"
          title="ابعاد"
          :desc="product.Dimensions"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Weight !== '0' && product.Weight !== ''"
          title="وزن"
          :desc="product.Weight + 'گرم'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Backmaterial !== '0' && product.Backmaterial !== ''"
          title="جنس پشت"
          :desc="product.Backmaterial"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Frontmaterial !== '' && productDetail.Frontmaterial !== '0'
          "
          title="جنس جلو"
          :desc="product.Frontmaterial"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Framematerial !== '0' && product.Framematerial !== ''"
          title="جنس فریم	"
          :desc="product.Framematerial"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Colors !== '0' && product.Colors !== ''"
          title="رنگ های تولید شده	"
          :desc="product.Colors"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">نمایشگر</h3>
        <productDetail
          v-if="product.Screen !== '0' && product.Screen !== ''"
          title="ابعاد نمایشگر"
          :desc="product.Screen + 'اینچ'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.DisplayType !== '0' && product.DisplayType !== ''"
          title="نوع نمایشگر"
          :desc="product.DisplayType"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Backmaterial !== '0' && product.Backmaterial !== ''"
          title="جنس پشت"
          :desc="product.Backmaterial"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Refreshrate !== '' && productDetail.Refreshrate !== '0'"
          title="حداکثر نرخ نوسازی"
          :desc="product.Refreshrate"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Resolation !== '0' && product.Resolation !== ''"
          title="رزولوشن"
          :desc="product.Resolation"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Pixeldensity !== '0' && product.Pixeldensity !== ''"
          title="تراکم پیکسلی	"
          :desc="product.Pixeldensity"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Screentobodyratio !== '0' &&
            product.Screentobodyratio !== ''
          "
          title="نسبت نمایشگر به بدنه	"
          :desc="product.Screentobodyratio"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.AspectRatio !== '0' && product.AspectRatio !== ''"
          title="نسبت تصویر	"
          :desc="product.AspectRatio"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.HDR !== '0' && product.HDR !== ''"
          title="استانداردهای HDR	"
          :desc="product.HDR"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Maximumbrightness !== '0' &&
            product.Maximumbrightness !== ''
          "
          title="حداکثر روشنایی	"
          :desc="product.Maximumbrightness"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.OtherDisplay !== '0' && product.OtherDisplay !== ''"
          title="سایر مشخصات نمایشگر	"
          :desc="product.OtherDisplay"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">تراشه</h3>
        <productDetail
          v-if="product.Chipmodel !== '0' && product.Chipmodel !== ''"
          title="مدل تراشه"
          :desc="product.Chipmodel"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Chipprocess !== '0' && product.Chipprocess !== ''"
          title="فرآیند ساخت تراشه	"
          :desc="product.Chipprocess"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Numbercores !== '0' && product.Numbercores !== ''"
          title="تعداد هسته پردازنده	"
          :desc="product.Numbercores"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Coredetails !== '' && productDetail.Coredetails !== '0'"
          title="مشخصات هسته‌ها"
          :desc="product.Coredetails"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.GPU !== '' && productDetail.GPU !== '0'"
          title="پردازنده گرافیکی"
          :desc="product.GPU"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Specificationschip !== '0' &&
            productDetail.Specificationschip !== ''
          "
          title="مشخصات تراشه"
          :desc="product.Specificationschip"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">حافظه و رم</h3>
        <productDetail
          v-if="product.Storageram !== '0' && product.Storageram !== ''"
          title="ترکیب حافظه داخلی و رم"
          :desc="product.Storageram"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Rams !== '0' && product.Rams !== ''"
          title="رم"
          :desc="product.Rams + 'گیگابایت رم'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Storagetype !== '0' && product.Storagetype !== ''"
          title="نوع حافظه داخلی	"
          :desc="product.Storagetype"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Microsd !== '' && productDetail.Microsd !== '0'"
          title="درگاه کارت حافظه	"
          :desc="product.Microsd === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Typemicrosd !== '0' && productDetail.Typemicrosd !== ''"
          title="نوع درگاه کارت حافظه"
          :desc="product.Typemicrosd"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">دوربین پشت</h3>
        <productDetail
          v-if="
            product.Rearcameraconfiguration !== '0' &&
            product.Rearcameraconfiguration !== ''
          "
          title="پیکربندی دوربین پشت"
          :desc="product.Rearcameraconfiguration"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Maincamera !== '0' && product.Maincamera !== ''"
          title="دوربین اصلی - واید/استاندارد	"
          :desc="product.Maincamera + 'مگاپیکسل'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Descriptionmaincamera !== '0' &&
            product.Descriptionmaincamera !== ''
          "
          title="مشخصات دوربین اصلی - واید/استاندارد	"
          :desc="product.Descriptionmaincamera"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Secondcamera !== '' && productDetail.Secondcamera !== '0'
          "
          title="دوربین اولتراواید	"
          :desc="product.Secondcamera + 'مگاپیکسل'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Descriptionsecondcamera !== '0' &&
            productDetail.Descriptionsecondcamera !== ''
          "
          title="مشخصات دوربین اولتراواید	"
          :desc="product.Descriptionsecondcamera"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Thirdcamera !== '' && productDetail.Thirdcamera !== '0'"
          title="دوربین تله‌‌فوتو"
          :desc="product.Thirdcamera + 'مگاپیکسل'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Descriptionthirdcamera !== '0' &&
            productDetail.Descriptionthirdcamera !== ''
          "
          title="مشخصات دوربین تله‌فوتو	"
          :desc="product.Descriptionthirdcamera"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Maximumvideores !== '' &&
            productDetail.Maximumvideores !== '0'
          "
          title="حداکثر رزولوشن فیلم‌برداری دوربین‌ پشت	"
          :desc="product.Maximumvideores"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Resoltionvideo !== '0' &&
            productDetail.Resoltionvideo !== ''
          "
          title="رزولوشن و نرخ فریم ویدئو	"
          :desc="product.Resoltionvideo"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Filmingdescription !== '0' &&
            productDetail.Filmingdescription !== ''
          "
          title="توضیحات فیلم‌برداری	"
          :desc="product.Filmingdescription"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">دوربین سلفی</h3>
        <productDetail
          v-if="
            product.Frontmaincamera !== '0' && product.Frontmaincamera !== ''
          "
          title="دوربین سلفی اصلی"
          :desc="product.Frontmaincamera + 'مگاپیکسل'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Frontdescriptionmaincamera !== '0' &&
            product.Frontdescriptionmaincamera !== ''
          "
          title="مشخصات دوربین سلفی اصلی"
          :desc="product.Frontdescriptionmaincamera"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Maximumfrontvideores !== '0' &&
            product.Maximumfrontvideores !== ''
          "
          title="حداکثر رزولوشن فیلم‌برداری دوربین‌ سلفی"
          :desc="product.Maximumfrontvideores"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Resoltionfrontvideo !== '' &&
            productDetail.Resoltionfrontvideo !== '0'
          "
          title="رزولوشن و نرخ فریم ویدئو سلفی"
          :desc="product.Resoltionfrontvideo"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Descriptionvideofront !== '0' &&
            productDetail.Descriptionvideofront !== ''
          "
          title="توضیحات فیلم‌برداری سلفی	"
          :desc="product.Descriptionvideofront"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">باتری و شارژ</h3>
        <productDetail
          v-if="
            product.Batterycapacity !== '0' && product.Batterycapacity !== ''
          "
          title="دوربین سلفی اصلی"
          :desc="product.Batterycapacity + 'میلی‌آمپر ساعت'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Batterycapacityclass !== '0' &&
            product.Batterycapacityclass !== ''
          "
          title="کلاس ظرفیت باتری"
          :desc="product.Batterycapacityclass"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Batterytype !== '0' && product.Batterytype !== ''"
          title="نوع باتری"
          :desc="product.Batterytype"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.ReplaceableBattery !== '' &&
            productDetail.ReplaceableBattery !== '0'
          "
          title="تعویض‌ پذیری باتری"
          :desc="
            product.ReplaceableBattery === 0
              ? 'غیر قابل تعویض توسط کاربر'
              : 'قابل تعویض توسط کاربر'
          "
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Maxchargingpower !== '' &&
            productDetail.Maxchargingpower !== '0'
          "
          title="حداکثر توان شارژ پشتیبانی شده	"
          :desc="product.Maxchargingpower + 'وات'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Fastchargesupport !== '' &&
            productDetail.Fastchargesupport !== '0'
          "
          title="پشتیبانی از شارژ سریع	"
          :desc="product.Fastchargesupport === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Wirelesscharge !== '' &&
            productDetail.Wirelesscharge !== '0'
          "
          title="پشتیبانی از شارژ بی‌سیم	"
          :desc="product.Wirelesscharge === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Maxwirelesschargingpower !== '' &&
            productDetail.Maxwirelesschargingpower !== '0'
          "
          title="حداکثر توان شارژ بی‌سیم	"
          :desc="product.Maxwirelesschargingpower + 'وات'"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Timeforcharging !== '0' && product.Timeforcharging !== ''
          "
          title="زمان موردنیاز برای شارژ"
          :desc="product.Timeforcharging"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Batteryfeatures !== '0' && product.Batteryfeatures !== ''
          "
          title="سایر ویژگی‌های شارژ و باتری"
          :desc="product.Batteryfeatures"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Connectionport !== '0' && product.Connectionport !== ''"
          title="درگاه اتصال"
          :desc="product.Connectionport"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Otgsupport !== '0' && product.Otgsupport !== ''"
          title="پشتیبانی از OTG"
          :desc="product.Otgsupport === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">صدا</h3>
        <productDetail
          v-if="product.SpeakerType !== '0' && product.SpeakerType !== ''"
          title="استریو (دوگانه)"
          :desc="product.SpeakerType"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Jack !== '0' && product.Jack !== ''"
          title="جک 3.5 میلی‌متری"
          :desc="product.Jack === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.AudioFeatures !== '0' && product.AudioFeatures !== ''"
          title="ویژگی‌‌های صوتی"
          :desc="product.AudioFeatures"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col space-y-1">
        <h3 class="text-xl text-textlightblue my-3">ارتباطات و سنسورها</h3>
        <productDetail
          v-if="product.Sensors !== '0' && product.Sensors !== ''"
          title="حسگرها"
          :desc="product.Sensors"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Sensorstype !== '0' && product.Sensorstype !== ''"
          title="نوع حسگر اثر انگشت	"
          :desc="product.Sensorstype"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.WiFi !== '0' && product.WiFi !== ''"
          title="Wi-Fi"
          :desc="product.WiFi"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Desciptionwifi !== '0' && product.Desciptionwifi !== ''"
          title='توضیحات Wi-Fi	'
          :desc="product.Desciptionwifi"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Bluetooth !== '0' && product.Bluetooth !== ''"
          title='بلوتوث'
          :desc="product.Bluetooth"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Bluetoothdescription !== '0' &&
            product.Bluetoothdescription !== ''
          "
          title='توضیحات بلوتوث	'
          :desc="product.Bluetoothdescription"
          class="w-full h-full"
        />
        <productDetail
          v-if="
            product.Communicationtechnology !== '0' &&
            product.Communicationtechnology !== ''
          "
          title='فناوری‌ ارتباطی'
          :desc="product.Communicationtechnology"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Support5g !== '0' && product.Support5g !== ''"
          title='پشتیبانی از 5G	'
          :desc="product.Support5g === 0 ? 'ندارد' : 'دارد'"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Simcard !== '0' && product.Simcard !== ''"
          title='سیم‌کارت	'
          :desc="product.Simcard"
          class="w-full h-full"
        />
        <productDetail
          v-if="product.Gps !== '0' && product.Gps !== ''"
          title='مسیریابی و GPS	'
          :desc="product.Gps"
          class="w-full h-full"
        />
      </div>
    </div>
    <div
      class="w-[70%] h-full text-right text-lg text-black"
      v-if="countdesc === 'نظرات'"
    ></div>
    <div
      class="w-[70%] h-full text-right text-lg text-black"
      v-if="countdesc === 'گارانتی'"
    ></div>
  </div>

  <footerCmponent />
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
    StarRating,
  },
  data: () => ({
    currentSlide: 0,
    product: [],
    count: 1,
    countdesc: "توضیحات",
  }),
  mounted() {
    this.getProduct();
    this.imageUrl();
    this.colorList();
    this.ChangeActive();
    this.activeCount();
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    async getProduct() {
      const product_slug = this.$route.params.product_slug;

      await axios
        .get(`/api/v1/products/${product_slug}`)
        .then((response) => {
          this.product = response.data;

          document.title = this.product.Slug + " | شکاف";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    imageUrl() {
      const images = String(this.product.Image);
      const list = images.split(",");
      return list;
    },
    colorList() {
      const colors = String(this.product.InStockColor);
      const colorList = colors.split(",");
      return colorList;
    },
    counter(arg) {
      if (arg === "+") this.count++;
      else this.count >= 2 ? this.count-- : 0;
    },
    activeCount() {
      this.countdesc = "توضیحات";
    },
    ChangeActive(number) {
      this.countdesc = number;
    },
  },
});
</script>

<script setup>
import productDetail from "@/components/productDetail.vue";
import headerComponent from "../components/headerComponent.vue";
import footerCmponent from "@/components/footerCmponent.vue";
</script>
