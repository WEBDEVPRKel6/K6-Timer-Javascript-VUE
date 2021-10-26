<template>
  <div class="container-center-horizontal">
    <div class="layout screen">
      <div class="main-stopwatch">
        <div class="group-1">
          <div class="title-1 valign-text-middle">Title</div>
          <div class="center circle">
            <div class="overlap-group2"><h1 class="text-1">00:00:23</h1></div>
          </div>
        </div>
        <div class="buttons">
          <div class="overlap-group-1">
            <div class="continue roboto-bold-fiord-18px">Continue</div>
          </div>
          <div class="overlap-group1">
            <div class="stop roboto-bold-fiord-18px">Stop</div>
          </div>
          <div class="overlap-group1 red-font">
            <div class="delete roboto-bold-fiord-18px">Delete</div>
          </div>
        </div>
      </div>
      <div class="list-stopwatch">
        <div class="flex-row">
          <div class="flex-col">
            <div class="overlap-group-2">
              <div class="reset-all red-font">Reset All</div>
            </div>
          </div>
          <div class="add-button">
            <form class="title-2">
                <input type="text" placeholder="Give your Title">
                <button type="submit">Add</button>
            </form>
          </div>
        </div>
        <div class="rectangle">
          <div class="overlap-group">
            <div class="title newscycle-normal-black-18px">Title 5</div>
            <div class="text digitalnumbers-regular-normal-black-24px">00:00:00</div>
            <div class="start roboto-bold-fiord-18px">Start</div>
            <div class="overlap-group-3">
                <div class="evaclose-fill">
                    <div class="delete fa fa-close"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.layout {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 1024px;
  width: 1440px;
}

.main-stopwatch {
  align-items: flex-end;
  background-color: #a1d6d4;
  display: flex;
  flex-direction: column;
  min-height: 1024px;
  padding: 88px 156px;
  width: 720px;
}

.group-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 557px;
  width: 404px;
}

.title-1 {
  color: var(--black);
  font-family: var(--font-family-news_cycle);
  font-size: var(--font-size-xxl);
  height: 83px;
  letter-spacing: 0;
  margin-left: 1px;
  text-align: center;
  width: 371px;
}

.overlap-group2 {
  align-items: flex-end;
  background-image: url(ellipse-1.svg);
  background-size: 100% 100%;
  display: flex;
  height: 408px;
  margin-right: 4px;
  margin-top: 74px;
  min-width: 408px;
  padding: 152px 17px;
}

.text-1 {
  color: var(--black);
  font-family: var(--font-family-digital_numbers-regular);
  font-size: var(--font-size-xxxl);
  font-weight: 400;
  letter-spacing: 0;
  min-height: 83px;
  text-align: center;
  width: 371px;
}

.rectangle {
    background-color: #6990AF;
    border-radius: 7%;
}

.buttons {
  align-items: flex-end;
  align-self: center;
  display: flex;
  margin-top: 103px;
  min-width: 400px;
}

.overlap-group-1 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 45px;
  min-width: 105px;
  padding: 9.5px 15.3px;
}

.continue {
  letter-spacing: 0;
  min-height: 25px;
  width: 73px;
}

.overlap-group1 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 45px;
  margin-left: 43px;
  min-width: 105px;
  padding: 9.5px 15.3px;
}

.stop {
  letter-spacing: 0;
  min-height: 25px;
  text-align: center;
  width: 73px;
}

.buttonstartcont-1 {
  height: 53px;
  margin-bottom: -8px;
  margin-left: 38px;
  width: 113px;
}

.list-stopwatch {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 110px;
  margin-top: 63px;
  min-height: 833px;
  width: 512px;
}

.flex-row {
  align-items: flex-end;
  display: flex;
  height: 138px;
  min-width: 506px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 138px;
  width: 363px;
}

.overlap-group-2 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 48px;
  min-width: 225px;
  padding: 0 64px;
}

.reset-all {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  min-height: 26px;
  min-width: 89px;
}

.overlap-group1-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 48px;
  margin-top: 42px;
  min-width: 358px;
}

.title-2 {
  color: #9e9e9e;
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  min-height: 26px;
  text-align: center;
  width: 358px;
}

.add-button {
  align-items: center;
  background-color: #74b2af;
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 48px;
  margin-left: 12px;
  min-width: 131px;
  padding: 0 53px;
}

.akar-iconsplus {
  align-items: center;
  display: flex;
  height: 24px;
  padding: 0 3.5px;
  width: 24px;
}

.vector-1 {
  height: 16px;
  width: 17px;
}

.overlap-group {
  height: 113px;
  margin-top: 26px;
  position: relative;
  width: 516px;
}

.rectangle-10 {
  height: 101px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 500px;
}

.title {
  left: 20px;
  letter-spacing: 0;
  position: absolute;
  top: 24px;
}

.text {
  left: 20px;
  letter-spacing: 0;
  position: absolute;
  top: 62px;
  width: 266px;
}

.buttonstartcont {
  height: 46px;
  left: 371px;
  position: absolute;
  top: 43px;
  width: 111px;
}

.overlap-group-3 {
  align-items: flex-start;
  background-image: url(ellipse-2.svg);
  background-size: 100% 100%;
  display: flex;
  height: 32px;
  left: 484px;
  min-width: 32px;
  padding: 0 4px;
  position: absolute;
  top: 0;
}

.evaclose-fill {
  align-items: flex-end;
  display: flex;
  height: 24px;
  padding: 5px 5px;
  width: 24px;
}

.vector {
  height: 14px;
  width: 14px;
}

.overlap-group-4 {
  align-items: flex-start;
  background-image: url(ellipse-2-1.svg);
  background-size: 100% 100%;
  display: flex;
  height: 32px;
  left: 484px;
  min-width: 32px;
  padding: 0 4px;
  position: absolute;
  top: 0;
}

.buttonstartcont-2 {
  height: 46px;
  left: 371px;
  position: absolute;
  top: 44px;
  width: 111px;
}

.overlap-group-5 {
  align-items: flex-start;
  background-image: url(ellipse-2-2.svg);
  background-size: 100% 100%;
  display: flex;
  height: 32px;
  left: 484px;
  min-width: 32px;
  padding: 0 4px;
  position: absolute;
  top: 0;
}

.overlap-group-6 {
  align-items: flex-start;
  background-image: url(ellipse-2-3.svg);
  background-size: 100% 100%;
  display: flex;
  height: 32px;
  left: 484px;
  min-width: 32px;
  padding: 0 4px;
  position: absolute;
  top: 0;
}

.overlap-group-7 {
  align-items: flex-start;
  background-image: url(ellipse-2-4.svg);
  background-size: 100% 100%;
  display: flex;
  height: 32px;
  left: 484px;
  min-width: 32px;
  padding: 0 4px;
  position: absolute;
  top: 0;
}

.red-font {
    color: #db7074;
}

.circle {
    height: 150px;
    width: 150px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.center {
    margin: auto;
    padding: 10px;
}
</style>
