<template>
  <nav class="bg-white sticky top-0 z-50 border border-red-500">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-6"
    >
      <div class="w-full flex items-center justify-center md:w-auto mx-auto" id="navbar-default">
        <ul
          class="font-medium flex md:p-0 border-gray-100 rounded-lg flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <button
              @click="ClickToAbout"
              class="block py-2 px-3 text-gray-900 hover:text-hover rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              About
            </button>
          </li>
          <li>
            <button
              @click="ClickToTools"
              class="block py-2 px-3 text-gray-900 hover:text-hover rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Tools
            </button>
          </li>
          <li>
            <button
              @click="ClickToProjects"
              class="block py-2 px-3 text-gray-900 hover:text-hover rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Project
            </button>
          </li>
          <li>
            <button
              @click="ClickToAbout"
              class="block py-2 px-3 text-gray-900 hover:text-hover rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="bg-background pt-20 w-full" id="about-me">
    <header class="max-w-7xl mx-auto px-10">
      <div class="md:flex justify-evenly pt-10 items-center ">
        <div class="space-y-2   text-white">
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
    </header>
  </section>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#364F6B"
      fill-opacity="1"
      d="M0,256L20,250.7C40,245,80,235,120,218.7C160,203,200,181,240,181.3C280,181,320,203,360,224C400,245,440,267,480,245.3C520,224,560,160,600,160C640,160,680,224,720,224C760,224,800,160,840,160C880,160,920,224,960,250.7C1000,277,1040,267,1080,234.7C1120,203,1160,149,1200,122.7C1240,96,1280,96,1320,106.7C1360,117,1400,139,1420,149.3L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
    ></path>
  </svg>

  <!-- Language and Tools -->
  <section class="py-10 mt-8 max-w-7xl mx-auto px-10" id="tools">
    <p class="text-center text-4xl">Language And Tools</p>
    <div class="md:flex items-center justify-evenly">
      <div
        class="space-y-6 mt-14 text-xl md:px-32 py-10 rounded-xl shadow-blue shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <div class="flex justify-center w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/java.svg" alt="" />
          <p class="my-auto mx-auto">Java</p>
        </div>

        <div class="flex justify-between w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/html.svg" alt="" />
          <p class="my-auto mx-auto">HTML</p>
        </div>

        <div class="flex justify-between w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/cpp.svg" alt="" />
          <p class="my-auto mx-auto">C/C++</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img
            class="w-16 h-16"
            src="../assets/images/icons/laravel.svg"
            alt=""
          />
          <p class="my-auto mx-auto">Laravel</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img
            class="w-16 h-16"
            src="../assets/images/icons/github.svg"
            alt=""
          />
          <p class="my-auto mx-auto">Github</p>
        </div>
      </div>

      <div
        class="space-y-6 mt-14 text-lg rounded-xl md:px-32 py-10 shadow-pink shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <div class="flex justify-between w-40 mx-auto">
          <img
            class="w-16 h-16"
            src="../assets/images/icons/python.svg"
            alt=""
          />
          <p class="my-auto mx-auto">Python</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/css.svg" alt="" />
          <p class="my-auto mx-auto">CSS</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/sql.svg" alt="" />
          <p class="my-auto mx-auto">SQL</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img class="w-16 h-16" src="../assets/images/icons/vue.svg" alt="" />
          <p class="my-auto mx-auto">VueJS</p>
        </div>
        <div class="flex justify-between w-40 mx-auto">
          <img
            class="w-16 h-16"
            src="../assets/images/icons/postman.svg"
            alt=""
          />
          <p class="my-auto mx-auto">Postman</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Language and Tools End -->

  <!-- Project -->
  <!-- First Project -->
  <section class="bg-gray-50" id="projects">
    <div
      class="py-10 max-w-7xl mx-auto px-10 mt-20"
      v-motion-slide-visible-once-bottom
    >
      <p class="text-center text-4xl">PROJECTS</p>
      <div class="md:flex justify-between mt-20 md:space-x-10 w-full">
        <div class="md:w-1/2 mb-10 space-y-2">
          <h1 class="text-xl">JAVA PROJECT</h1>
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

        <div class="carousel md:w-1/2 rounded-lg">
          <div id="slide1" class="carousel-item relative w-full rounded-lg">
            <img src="../assets/images/projects/java_1.png" class="w-full" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide4" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full rounded-lg">
            <img src="../assets/images/projects/java_2.png" class="w-full" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full rounded-lg">
            <img src="../assets/images/projects/java_3.png" class="w-full" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full rounded-lg">
            <img src="../assets/images/projects/java_4.png" class="w-full" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End First Project -->

  <!-- Second Project -->
  <section>
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-32 md:space-x-10 w-full">
        <div class="carousel md:w-1/2 rounded-lg">
          <div
            id="slide1-nakmuay"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/nakmuay/web_1.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide4-nakmuay" class="btn btn-circle">❮</a>
              <a href="#slide2-nakmuay" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide2-nakmuay"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/nakmuay/web_2.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide1-nakmuay" class="btn btn-circle">❮</a>
              <a href="#slide3-nakmuay" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide3-nakmuay"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/nakmuay/web_3.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide2-nakmuay" class="btn btn-circle">❮</a>
              <a href="#slide4-nakmuay" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide4-nakmuay"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/nakmuay/web_4.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide3-nakmuay" class="btn btn-circle">❮</a>
              <a href="#slide1-nakmuay" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

        <div class="md:w-1/2 mt-10 md:mt-0 space-y-2">
          <h1 class="text-xl">WEB APPLICATION PROJECT</h1>
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
  <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-32 md:space-x-10 w-full">
        <div class="md:w-1/2 mb-10 space-y-2">
          <h1 class="text-xl">WEB APPLICATION PROJECT</h1>
          <h3 class="text-lg">
            This web application project involves creating a pawn shop system by
            Nuxt3 Vue3 Tailwind Laravel SQL and Postman(API).
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
        <div class="carousel md:w-1/2 rounded-lg">
          <div
            id="slide1-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_5.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide4-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide2-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide2-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_6.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide1-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide3-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide3-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_7.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide2-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide4-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide4-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_8.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide3-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide5-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide5-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_9.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide4-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide6-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide6-goldenTiara"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/goldenTiara/web_10.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide5-goldenTiara" class="btn btn-circle">❮</a>
              <a href="#slide1-goldenTiara" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Third Project -->

  <!-- Fourth Project -->
  <section>
    <div class="max-w-7xl mx-auto px-10" v-motion-slide-visible-once-bottom>
      <div class="md:flex justify-between py-32 md:space-x-10 w-full">
        <div class="carousel md:w-1/2 rounded-lg">
          <div
            id="slide1-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/certificate.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide5-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide2-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide2-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/kuhack_1.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide1-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide3-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide3-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/kuhack_2.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide2-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide4-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide4-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/kuhack_3.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide3-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide5-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide5-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/kuhack_4.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide4-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide6-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div
            id="slide6-hackaton"
            class="carousel-item relative w-full rounded-lg"
          >
            <img
              src="../assets/images/projects/webapp/kuhackathon/kuhack_5.png"
              class="w-full"
            />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2 opacity-60"
            >
              <a href="#slide5-hackaton" class="btn btn-circle">❮</a>
              <a href="#slide1-hackaton" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0 space-y-2">
          <h1 class="text-xl">KU Hackathon</h1>
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
  <!-- End Fourth Project -->

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#364F6B"
      fill-opacity="1"
      d="M0,256L20,250.7C40,245,80,235,120,218.7C160,203,200,181,240,181.3C280,181,320,203,360,224C400,245,440,267,480,245.3C520,224,560,160,600,160C640,160,680,224,720,224C760,224,800,160,840,160C880,160,920,224,960,250.7C1000,277,1040,267,1080,234.7C1120,203,1160,149,1200,122.7C1240,96,1280,96,1320,106.7C1360,117,1400,139,1420,149.3L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ClickToAbout = () => {
  const aboutSection = document.getElementById("about-me");

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const ClickToTools = () => {
  const aboutSection = document.getElementById("tools");

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const ClickToProjects = () => {
  const aboutSection = document.getElementById("projects");

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
