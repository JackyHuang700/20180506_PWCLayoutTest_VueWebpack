<template>
  <div>
    <!-- <ol class="breadcrumb">
      <li class="breadcrumb-item">Home</li>
      <li class="breadcrumb-item">
        <a href="#">Index</a>
      </li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol> -->
    <div class="container-fluid">
      <div class="row cards">
        <div class="col-md-3 col-sm-6 col-12">
          <div class="card card--oil">
            <div class="card__svg-container">
              <div class="card__svg-wrapper img-position">
                <i class="icon-speedometer"></i>
              </div>
            </div>
            <div class="card__count-container p-2">
              <div class="card__count-text">
                <span class="card__count-text--big">250</span>
                <p class="card__content">拋轉異常訂單</p>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                  <path fill="#6a7a87" d="M9.4,2L9.2,2.3v0.4v7.6v0.4L9.4,11H3.6l0.3-0.3v-0.4V2.7V2.3L3.6,2H9.4 M12,1H1l1.8,1.7v7.6L1,12h11l-1.8-1.7V2.7L12,1L12,1z" />
                  <line fill="none" stroke="#6a7a87" class="st0" x1="3" y1="6.5" x2="10" y2="6.5" />
                </svg>
              </div>
              <div class="card__stuff-text">
                <a href="" class="link-style"> 查看詳細信息 </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-12">
          <div class="card card--tree">
            <div class="card__svg-container">
              <div class="card__svg-wrapper img-position">
                <i class="icon-speedometer"></i>
              </div>
            </div>
            <div class="card__count-container p-2">
              <div class="card__count-text">
                <span class="card__count-text--big">10</span>
                <p class="card__content">已取消明細</p>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                  <polygon fill="none" stroke="#6a7a87" points="3.5,1.5 5.5,1.5 5.5,5 9.5,1.5 9.5,9 11,11.5 2,11.5 3.5,9 " />
                </svg>
              </div>
              <div class="card__stuff-text">
                <a href="" class="link-style"> 查看詳細信息 </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-12">
          <div class="card card--water">
            <div class="card__svg-container">
              <div class="card__svg-wrapper img-position">
                <i class="icon-speedometer"></i>
              </div>
            </div>
            <div class="card__count-container p-2">
              <div class="card__count-text">
                <span class="card__count-text--big">20</span>
                <p class="card__content">待沖帳收款單</p>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                  <path fill="none" stroke="#6a7a87" d="M1,1.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                  <path fill="none" stroke="#6a7a87" d="M1,5.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                  <path fill="none" stroke="#6a7a87" d="M1,9.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                </svg>
              </div>
              <div class="card__stuff-text">
                <a href="" class="link-style"> 查看詳細信息 </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-12">
          <div class="card card--water">
            <div class="card__svg-container">
              <div class="card__svg-wrapper img-position">
                <i class="icon-speedometer"></i>
              </div>
            </div>
            <div class="card__count-container p-2">
              <div class="card__count-text">
                <span class="card__count-text--big">20</span>
                <p class="card__content">待處理客訴單</p>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                  <path fill="none" stroke="#6a7a87" d="M1,1.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                  <path fill="none" stroke="#6a7a87" d="M1,5.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                  <path fill="none" stroke="#6a7a87" d="M1,9.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2" />
                </svg>
              </div>
              <div class="card__stuff-text">
                <a href="" class="link-style"> 查看詳細信息 </a>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-sm-12 card card--water mt-5">
          <section class="title chart-title-position chart-title-style">
            <p class="mb-0 p-2">系統信息</p>
          </section>
          <div class="mt-5">
            chart
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homeindex2',
  data () {
    return {}
  },
  created () { },
  mounted () { },
  methods: {},
  components: {}
}
</script>
<style lang="css">
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;

  box-sizing: border-box;

  margin: 0;

  padding: 0;
}

html,
body {
  font-size: 62.5%;
}

.forhtml {
  background: radial-gradient(to top, #aac1c7, #f7fbfb 80%) no-repeat center
    center fixed;

  background-size: cover;
}

body {
  overflow-x: hidden;

  min-height: 100vh;

  color: #686e74;
}

section {
  margin: 0 auto;

  min-width: 58.9rem;

  max-width: 64rem;

  width: 80vw;
}

.title {
  padding-top: 10vh;

  font-size: 12.5px;
}

.title:after {
  display: block;

  width: 6rem;

  height: 0.3rem;

  background-color: #fbcd8a;

  content: '';

  -webkit-transform: translate(0.3rem, 2rem);

  transform: translate(0.3rem, 2rem);
}

.cards {
  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-pack: justify;

  -ms-flex-pack: justify;

  justify-content: space-between;

  padding-top: 6rem;
}

.icon-speedometer {
  font-size: 40px;
}

.card {
  position: relative;

  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-orient: vertical;

  -webkit-box-direction: normal;

  -ms-flex-direction: column;

  flex-direction: column;

  margin-bottom: 3rem;

  min-width: 25%;

  width: 100%;

  height: 220px;

  border-style: none;

  border-radius: 6px;

  background-color: #f9fbfb;

  -webkit-box-shadow: 0 2rem 4rem #aac1c7;

  box-shadow: 0 2rem 4rem #aac1c7;

  color: #5a6c7a;

  letter-spacing: 0.05rem;

  font-size: 1rem;
}

.card__svg-container {
  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-align: end;

  align-items: flex-end;

  -ms-flex-align: end;

  -webkit-box-pack: center;

  -ms-flex-pack: center;

  justify-content: center;

  height: 50%;
}

.card__svg-wrapper {
  width: unset;
}

.card__count-container {
  position: relative;

  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-align: center;

  align-items: center;

  -ms-flex-align: center;

  -webkit-box-flex: 1;

  -ms-flex-positive: 1;

  flex-grow: 1;

  -webkit-box-pack: center;

  -ms-flex-pack: center;

  justify-content: center;
}

.card__count-text {
  padding-top: 30px;

  width: 100%;

  text-align: center;

  letter-spacing: 5px;

  line-height: 100px;

  -webkit-transform: translate(0, -0.5rem);

  transform: translate(0, -0.5rem);
}

.card__count-text--big {
  display: inline-block;

  float: left;

  margin: 0 auto;

  width: 50.5%;

  height: 40px;

  text-transform: uppercase;

  font-weight: 700;

  font-size: 50px;

  line-height: 40px;
}

.card__content {
  display: inline-block;

  float: left;

  margin: 0 auto;

  padding-top: 20px;

  width: 49.5%;

  height: 20px;

  /* text-align: justify; */
  font-weight: 500;

  line-height: 20px;
}

.card__stuff-container {
  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-align: center;

  align-items: center;

  -ms-flex-align: center;

  -webkit-box-pack: center;

  -ms-flex-pack: center;

  justify-content: center;

  margin: 0 auto;

  width: 90%;

  height: 15%;

  border-top: 2px solid #e7edef;
}

.card__stuff-icon,
.card__stuff-text {
  display: inline-block;

  height: 35px;

  line-height: 35px;
}

.card__stuff-icon {
  padding-top: 5px;

  width: 14.5px;

  -webkit-transform: translate(0, -0.3rem);

  transform: translate(0, -0.3rem);
}

.card__stuff-text {
  margin-left: 0.7rem;

  text-transform: uppercase;

  -webkit-transform: translate(0, -0.2rem);

  transform: translate(0, -0.2rem);
}

.card:after {
  position: absolute;

  top: 0;

  left: 0;

  display: block;

  width: 16rem;

  height: 5.625rem;

  content: '';

  -webkit-transform: translate(1.5rem, 22.5rem);

  transform: translate(1.5rem, 22.5rem);
}

.card--oil:after {
  background-image: radial-gradient(
    to bottom,
    rgba(106, 122, 135, 0.5),
    transparent 70%
  );
}

.card--tree:after {
  background-image: radial-gradient(
    to bottom,
    rgba(106, 191, 96, 0.5),
    transparent 70%
  );
}

.card--water:after {
  background-image: radial-gradient(
    to bottom,
    rgba(96, 203, 231, 0.5),
    transparent 70%
  );
}

.card {
  border-style: none;
}

.img-style {
  box-shadow: 0 12px 20px -10px rgba(6, 8, 8, 0.28),
    0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);
}

.link-style {
  color: rgba(0, 209, 178, 0.8);
}

.link-style:hover {
  color: rgb(0, 188, 160);
}

.title {
  position: relative;

  padding-top: 0;
}

.chart-title-position {
  position: absolute;

  top: -23px;

  left: calc(100%/8);
}

.chart-title-style {
  border-radius: 7px;

  background-color: rgba(0, 209, 178, 0.7);

  box-shadow: 0 12px 20px -10px rgba(6, 8, 8, 0.28),
    0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);
}

.chart-title-style > p {
  color: white;
}

.title:after {
  position: absolute;

  top: 27px;
}

.card__svg-container {
  position: relative;
}

.img-position {
  position: absolute;

  top: 8px;

  right: 4px;
}

.card__svg-container {
  height: 22%;
}

.link-style {
  color: rgba(19, 133, 218, 0.7294117647058823);

  font-weight: 600;
}

@media screen and (max-width: 620px) {
  html,
  body {
    font-size: 45%;
  }
}

@media screen and (max-width: 480px) {
  html,
  body {
    font-size: 70%;
  }
}

@media screen and (max-width: 480px) {
  section {
    min-width: 19rem;
  }
}

@media screen and (max-width: 480px) {
  .title {
    position: relative;

    padding-top: 6vh;

    text-align: center;

    font-size: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .title:after {
    position: absolute;

    left: 50%;

    -webkit-transform: translate(-50%, 2rem);

    transform: translate(-50%, 2rem);
  }
}

@media screen and (max-width: 480px) {
  .cards {
    -webkit-box-align: center;

    align-items: center;

    -ms-flex-align: center;

    -webkit-box-orient: vertical;

    -webkit-box-direction: normal;

    -ms-flex-direction: column;

    flex-direction: column;
  }
}

@media screen and (max-width: 480px) {
  .card {
    margin-bottom: 3rem;

    width: 387px;
  }
}

@media (max-width: 480px) {
  section {
    min-width: 12vh;

    max-width: 12vh;

    width: 12vh;
  }
}

@media (min-width: 481px) and (max-width: 575px) {
  section {
    min-width: 25vh;

    max-width: 25vh;

    width: 25vh;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  section {
    min-width: 20vh;

    max-width: 20vh;

    width: 20vh;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  section {
    min-width: 33vh;

    max-width: 33vh;

    width: 33vh;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  section {
    min-width: 40vh;

    max-width: 40vh;

    width: 40vh;
  }
}

@media (min-width: 1283px) {
  .card__count-text {
    padding-top: 67px;
  }
}

@media screen and (max-width: 1282px) {
  .card__count-text--big,
  .card__content {
    width: 100%;

    text-align: center;
  }
}

@media screen and (max-width: 1200px) {
  section {
    min-width: 54vh;

    max-width: 54vh;

    width: 54vh;
  }
  .card__stuff-icon,
  .card__stuff-text {
    letter-spacing: 7.5px;
  }
  .card__count-text {
    top: 45px;
  }

  .card__stuff-icon,
  .card__stuff-text {
    letter-spacing: 6.5px;
  }
  .card__count-text {
    padding-left: 10px;

    text-align: left;
  }

  .card__count-text--big,
  .card__content {
    width: 100%;

    text-align: left;
  }
}

@media screen and (max-width: 1023px) {
  .card__stuff-icon,
  .card__stuff-text {
    letter-spacing: 4px;
  }
  .card__content {
    display: block;
  }
  .card__count-text {
    text-align: left;
  }
}

@media screen and (max-width: 767px) {
  .card__stuff-icon,
  .card__stuff-text {
    letter-spacing: 2px;
  }

  .card__count-text--big,
  .card__content {
    text-align: center;
  }

  .card__count-text {
    letter-spacing: 2px;
  }
  .card__content {
    display: inline-block;
  }
}

@media screen and (max-width: 480px) {
  .card {
    width: 100%;
  }
  .cards {
    padding-top: 1rem;
  }
  .card__stuff-icon,
  .card__stuff-text {
    letter-spacing: 7px;
  }
  .icon-speedometer {
    font-size: 50px;
  }
  .card__count-text {
    padding-top: 67px;

    width: 100%;

    text-align: center;

    letter-spacing: 2px;
  }

  .card__count-text--big,
  .card__content {
    width: 50%;
  }

  .card__count-text--big {
    text-align: center;
  }

  .img-position {
    position: absolute;

    top: 8px;

    left: 45%;

    padding-top: 23px;

    width: 50%;
  }
}

@media screen and (max-width: 327px) {
  .card {
    width: 201px;
  }
  .img-position {
    left: 41%;
  }
  .card__count-text {
    padding-top: 30px;
  }
  .card__count-text--big {
    width: 100%;
  }
  .card__content {
    width: 100%;

    text-align: center;
  }
}
</style>