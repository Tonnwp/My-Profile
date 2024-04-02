<template>
  
  <nav class="bg-white sticky top-0 z-50 border-b border-pink">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-6"
    >
      <div
        class="w-full flex items-center justify-center md:w-auto mx-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex md:p-0 border-gray-100 rounded-lg flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <button
              @click="ClickToAbout"
              :class="{ 'active-button': activeSection === 'about-me' }"
              class="block py-2 px-3 {{ aboutButtonColor }} text-gray-900 hover:text-pink rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              About
            </button>
          </li>
          <li>
            <button
              @click="ClickToTools"
              :class="{ 'active-button': activeSection === 'tools' }"
              class="block py-2 px-3 {{ toolsButtonColor }} text-gray-900 hover:text-pink rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Tools
            </button>
          </li>
          <li>
            <button
              @click="ClickToProjects"
              :class="{ 'active-button': activeSection === 'projects' }"
              class="block py-2 px-3 {{ projectsButtonColor }} text-gray-900 hover:text-pink rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              @click="ClickToContact"
              :class="{ 'active-button': activeSection === 'contact' }"
              class="block py-2 px-3 {{ contactButtonColor }} text-gray-900 hover:text-pink rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="bg-background pt-20 w-full" id="about-me">
    <div class="max-w-7xl mx-auto px-10">
      <div class="md:flex justify-evenly pt-10 items-center">
        <div class="space-y-2 text-white">
          <h1 class="font-lato text-4xl text-pink text-center">
            HI, I'm <br />
            Ton Nawapon
          </h1>
          <p class="text-center">
            I am Computer Science Student.<br />I'm interest intership in
            Software Engineering.
          </p>
        </div>
        <img src="../assets/images/ton.png" class="mt-10 md:mt-0" alt="" />
      </div>
    </div>
  </header>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#364F6B"
      fill-opacity="1"
      d="M0,256L20,250.7C40,245,80,235,120,218.7C160,203,200,181,240,181.3C280,181,320,203,360,224C400,245,440,267,480,245.3C520,224,560,160,600,160C640,160,680,224,720,224C760,224,800,160,840,160C880,160,920,224,960,250.7C1000,277,1040,267,1080,234.7C1120,203,1160,149,1200,122.7C1240,96,1280,96,1320,106.7C1360,117,1400,139,1420,149.3L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
    ></path>
  </svg>

  <!-- Language and Tools -->
  <div class="mb-24 "  id="tools"></div>

  <section class="max-w-7xl mx-auto px-10 mt-10" >
    <p class="text-center text-4xl text-blue">
      Language <span class="text-slate-600 dark:text-white">And</span>
      <span class="text-pink"> DevTools</span>
    </p>
    <div class="flex items-center justify-center">
      <div class="grid mx-auto md:grid-cols-4 grid-cols-2 gap-12 mt-20">
        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/java.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Java</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/python.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Python</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/html.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">HTML</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/css.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">CSS</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/typescript.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">TypeScript</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/tailwind.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Tailwind</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/cpp.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">C/C++</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/sql.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">My SQL</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/laravel.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Laravel</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/vue.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">VueJs</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/github.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Github</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/postman.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Postman</p>
          </div>
        </div>

        <div
          class="transform flex items-center justify-center rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-md shadow-blue dark:shadow-pin transition duration-300 hover:-translate-y-4 dark:bg-slate-50 dark:text-black dark:shadow-pink"
        >
          <div class="">
            <img
              class="md:w-24 md:h-24 mx-auto w-16 h-16"
              src="../assets/images/icons/docker.svg"
              alt=""
            />
            <p class=" text-center mt-4 font-bold md:text-2xl text-xl">Docker</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Language and Tools End -->

  <!-- Project -->
  <div class="" ></div>
  <!-- First Project -->
  <section class="bg-gray-50 dark mt-32" id="projects">
    <div
      class="pb-52  max-w-7xl mx-auto px-10 pt-20"
      v-motion-slide-visible-once-bottom
      :delay="500"
    >
      <p class="text-center text-4xl text-blue font-black mt-10">PROJECTS</p>
      <div class="md:flex justify-between mt-32 md:space-x-10 w-full">
        <div class="md:w-1/2 mb-10 space-y-2 dark:text-black">
          <h1 class="text-2xl text-pink font-extrabold">JAVA PROJECT</h1>
          <h3 class="text-lg">
            This project involves creating a complaint application by Java and
            Scene Builder
          </h3>

          <ul class="list-disc space-y-2 max-w-xl ml-4">
            <li>
              Planning tasks and allocating them to team members is crucial to
              ensure that the work is completed efficiently within the
              designated timeframe. Holding progress meetings periodically
              allows team members to have a clear understanding of the task.
            </li>
            <li>
              Designing a user interface (UI) that is user-friendly,
              incorporates all necessary functions, and complements the overall
              theme is crucial. It's important to gather feedback from team
              members and use it in the design process before moving on to
              implementation.
            </li>
            <li class="">
              Write code to save data to a CSV file for data storage, and create
              models and various functions to be used for displaying on the UI.
            </li>
          </ul>
        </div>

        <div
          id="default-carousel"
          class="relative md:w-1/2"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/java_1.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/java_2.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/java_3.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/java_4.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End First Project -->

  <!-- Second Project -->
  <section>
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-52 md:space-x-10 w-full">
        <div
          id="default-carousel"
          class="relative md:w-1/2"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/webapp/nakmuay/web_1.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/webapp/nakmuay/web_2.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/webapp/nakmuay/web_3.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/webapp/nakmuay/web_4.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div class="md:w-1/2 mt-10 md:mt-0 space-y-2 dark:text-slate-300">
          <h1 class="text-2xl text-pink font-extrabold">
            WEB APPLICATION PROJECT
          </h1>
          <h3 class="text-lg">
            This web application project involves creating a event management
            system by Laravel
          </h3>

          <ul class="list-disc space-y-2 max-w-xl ml-4">
            <li>
              Design the UI to be intuitive for users, presenting information in
              a clear and concise manner. Arrange the layout in a way that it
              doesn't appear cluttered.
            </li>
            <li>
              Design user and staff ID validations with distinct displays on the
              UI. Implement theme changes based on day and night to harmonize
              with the environment.
            </li>
            <li class="">
              Write a function to retrieve data from the backend and display it
              on the UI. Also, design a database to ensure complete data
              storage.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Second Project -->

  <!-- Third Project -->
  <section class="bg-gray-50 dark">
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-52 md:space-x-10 w-full">
        <div class="md:w-1/2 mb-10 space-y-2 dark:text-black">
          <h1 class="text-2xl text-pink font-extrabold">
            WEB APPLICATION PROJECT
          </h1>
          <h3 class="text-lg">
            This web application project involves creating a pawn shop system by
            Nuxt3 Vue3 Tailwind Laravel MySQL and Postman(API).
          </h3>

          <ul class="list-disc space-y-2 max-w-xl ml-4">
            <li>Design and develop a modern and minimalist UI</li>
            <li>
              Utilize Postman to retrieve data from the backend and display it
              on the UI.
            </li>
            <li class="">
              Check for bugs and validate the connection between frontend and
              backend to ensure the application functions according to the
              planned design.
            </li>
          </ul>
        </div>

        <div
          id="default-carousel"
          class="relative md:w-1/2"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_5.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_6.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_7.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_8.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_9.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_10.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 6"
              data-carousel-slide-to="5"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End Third Project -->

  <!-- Fourth Project -->
  <section>
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-32 md:space-x-10 w-full">
        <div
          id="default-carousel"
          class="relative md:w-1/2"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/kuhackathon/certificate.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/kuhackathon/kuhack_1.png"
                class="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="../assets/images/projects/webapp/kuhackathon/kuhack_2.png"
                class="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/kuhackathon/kuhack_3.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/kuhackathon/kuhack_4.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/kuhackathon/kuhack_5.png"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0 space-y-2 dark:text-slate-300">
          <h1 class="text-2xl text-pink">KU HACKATHON</h1>
          <h3 class="text-lg">
            Design and Develope a KU Nisit application by Figma and VueJS
          </h3>

          <ul class="list-disc space-y-2 max-w-xl ml-4">
            <li>Design a KU Nisit application</li>
            <li>Create more features that useful for Nisit KU</li>
            <li class="">Pitching</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- final project -->
  <section class="bg-gray-50 dark">
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-52 md:space-x-10 w-full">
        <div class="md:w-1/2 mb-10 space-y-2 dark:text-black">
          <h1 class="text-2xl text-pink font-extrabold">
            WEB APPLICATION FINAL PROJECT
          </h1>
          <h3 class="text-lg">
            Under Development
          </h3>

          <!-- <ul class="list-disc space-y-2 max-w-xl ml-4">
            <li>Design and develop a modern and minimalist UI</li>
            <li>
              Utilize Postman to retrieve data from the backend and display it
              on the UI.
            </li>
            <li class="">
              Check for bugs and validate the connection between frontend and
              backend to ensure the application functions according to the
              planned design.
            </li>
          </ul> -->
          
        </div>

        <div
          id="default-carousel"
          class="relative md:w-1/2"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_5.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_6.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_7.png"
                class="absolute block w-full h-full object-fill rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_8.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_9.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src=" ../assets/images/projects/webapp/goldenTiara/web_10.png"
                class="absolute block w-full h-full object-fill -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 6"
              data-carousel-slide-to="5"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <!-- End Fourth Project -->

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#364F6B"
      fill-opacity="1"
      d="M0,256L20,250.7C40,245,80,235,120,218.7C160,203,200,181,240,181.3C280,181,320,203,360,224C400,245,440,267,480,245.3C520,224,560,160,600,160C640,160,680,224,720,224C760,224,800,160,840,160C880,160,920,224,960,250.7C1000,277,1040,267,1080,234.7C1120,203,1160,149,1200,122.7C1240,96,1280,96,1320,106.7C1360,117,1400,139,1420,149.3L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
    ></path>
  </svg>

  <!-- Footer -->

  <footer class="bg-background">
    <div
      class="container grid gap-8 px-6 py-32 mx-auto lg:grid-cols-3"
      id="contact"
    >
      <div>
        <p class="font-medium text-pink text-lg">Contact Me</p>

        <h1 class="mt-2 text-2xl font-semibold text-white md:text-6xl">
          Get In touch
        </h1>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
        <div class="p-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
          <span class="inline-block p-3 text-blue-500 rounded-lg bg-pink/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FC5185"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>

          <h2
            class="mt-4 text-base font-medium text-gray-800 dark:text-gray-300"
          >
            Contact by Gmail
          </h2>

          <a
            href="mailto:tonnawapon.l@gmail.com?subject = Feedback&body = Message"
            class="mt-2 text-sm text-blue-500 dark:text-blue-400"
          >
            tonnawapon.l@gmail.com
          </a>
        </div>

        <div class="p-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
          <span class="inline-block p-3 text-blue-500 rounded-lg bg-pink/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FC5185"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>

          <h2
            class="mt-4 text-base font-medium text-gray-800 dark:text-gray-300"
          >
            Contact by Tels
          </h2>

          <a
            href="tel:097-136-0391"
            class="mt-2 text-sm text-blue-500 dark:text-blue-400"
          >
            097-136-0391
          </a>
        </div>

        <div class="p-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
          <span class="inline-block p-3 text-blue-500 rounded-lg bg-pink/30">
            <svg
              class="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.192"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                  fill="#FC5185"
                />
              </g>

              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                  fill="#FC5185"
                />
              </g>
            </svg>
          </span>

          <h2
            class="mt-4 text-base font-medium text-gray-800 dark:text-gray-300"
          >
            Facebook
          </h2>

          <a
            href="https://www.facebook.com/profile.php?id=100010132532262"
            class="mt-2 text-sm text-blue-500 dark:text-blue-400"
            target="”_blank"
          >
            ต้น ณวพน
          </a>
        </div>

        <div class="p-4 rounded-lg bg-white md:p-6 dark:bg-gray-800">
          <span class="inline-block p-3 text-blue-500 rounded-lg bg-pink/30">
            <img
              src="../assets/images/icons/line-svg.svg"
              class="w-8 h-8"
              alt=""
            />
          </span>

          <h2
            class="mt-4 text-base font-medium text-gray-800 dark:text-gray-300"
          >
            Line
          </h2>

          <a
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            class="mt-2 cursor-pointer text-sm text-blue-500 dark:text-blue-400"
          >
            Click For QR
          </a>
        </div>
        
      </div>
    </div>
  </footer>

  <!-- Modal -->
  <div
    id="popup-modal"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <img src="../assets/images/line-qr.png" class="pt-20 px-20 py-10" />
        <div class="flex items-center justify-center">
          <button
            type="button"
            class="py-2 px-14 mb-6 bg-pink rounded-lg text-slate-200"
            data-modal-hide="popup-modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->

  <!-- End Footer -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeSection = ref(""); // Add a reactive variable to track the active section

const ClickToAbout = () => {
  scrollToSection("about-me");
  activeSection.value = "about-me"; // Update the active section
};

const ClickToTools = () => {
  scrollToSection("tools");
  activeSection.value = "tools"; // Update the active section
};

const ClickToProjects = () => {
  scrollToSection("projects");
  activeSection.value = "projects"; // Update the active section
};

const ClickToContact = () => {
  scrollToSection("contact");
  activeSection.value = "contact"; // Update the active section
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Add styles for the active button */
.active-button {
  color: #ff007f; /* Change this to your desired active color */
}
</style>
