(() => {
  let currentWidth = 0;

  let loginBorder = null;
  let loginBtn = null;
  let headerLogo = null;

  let sBtn = null;
  let sForm = null;
  let sFormInput = null;
  let sFormUnderline = null;
  let sExitBtn = null;
  let showBtn = null;
  let showBtnHide = null;
  let showBtnShow = null;

  let hdrTop = null;
  let burgerOpenBackground = null;
  let burger = null;
  let menu = null;
  let menuLinks = null;
  let tabsNav = null;
  let innerWrapper = null;
  let eventsSwiperPagination = null;
  let tippyOffset = 0;

  // let sInput = null;
  // let sUnderline = null;
  //////////////////////////////////////////
  /////////////////////////////////////////

  function initialize() {
    currentWidth = getCurrentWidth();
    // console.log(`Ширина экрана: ${currentWidth}`);

    loginBorder = document.querySelector(".header__login-wrapper");
    loginBtn = document.querySelector(".header__login");
    headerLogo = document.querySelector(".header__logo");

    submitBtn = document.querySelector(".form__btn-submit");
    sBtn = document.querySelector(".search-form__btn");
    sForm = document.querySelector(".search-form");
    sFormInput = document.querySelector(".search-form__input");
    sFormUnderline = document.querySelector(".search-form__underline");
    hdrTop = document.querySelector(".header__top");
    burgerOpenBackground = document.querySelector(".dark-bg");
    burger = document.querySelector(".burger");
    menu = document.querySelector(".nav");
    menuLinks = menu.querySelectorAll(".nav__item");
    tabsNav = document.querySelector(".tabs-nav");
    // console.log(`tabsNav: ${tabsNav}`);
    innerWrapper = document.querySelector(".inner-wrapper");
    // sInput = document.querySelector(".search-form__input");
    // sUnderline = document.querySelector(".search-form__underline");
    sExitBtn = document.querySelector(".search-form__exit");
    showBtn = document.querySelector(".show-btn");
    showBtnHide = document.querySelector(".show-btn__hide");
    showBtnShow = document.querySelector(".show-btn__show");
    eventsSwiperPagination = document.querySelector(
      ".events__swiper-pagination"
    );
  }

  function getCurrentWidth() {
    // return document.body.clientWidth;
    return window.innerWidth;
  }

  ////////////////////////////////////////////

  function toggleBurgerMenuAll() {
    document.body.classList.toggle("stop-scroll");
    burgerOpenBackground.classList.toggle("dark-bg--active");
    hdrTop.classList.toggle("header--burger-open");
    innerWrapper.classList.toggle("inner-wrapper--burger-open");
    burger.classList.toggle("burger--active");
    menu.classList.toggle("nav--active");
    loginBtn.classList.toggle("z-500");
    loginBorder.classList.toggle("header__login-wrapper--active");
    headerLogo.classList.toggle("visually-hidden");
  }

  /////////////////////////////////////////////

  function toggleBurgerMenu() {
    if (!burger.classList.contains("burger--active")) {
      headerLogo.classList.add("opacity-0");
      sForm.classList.add("opacity-0");
      setTimeout(toggleBurgerMenuAll, 300);
    } else {
      toggleBurgerMenuAll();
      setTimeout(() => {
        headerLogo.classList.remove("opacity-0");
        sForm.classList.remove("opacity-0");
      }, 300);
      // headerLogo.classList.remove("opacity-0");
    }
  }

  ///////////////////////////////////////

  function searchBtnClick() {
    // ev.preventDefault();
    if (sFormInput.value !== "") {
      alert(`Поиск-заглушка. Искомая строка: ${sFormInput.value}`);
      // sForm.submit();
    } else {
      alert("Пустой запрос");
      sFormInput.focus();
      sBtn.classList.add("no-hover");
    }
  }

  //////////////////////////////////////////////

  function showSearchForm() {
    // console.log("searchBtnClickTablen entered");
    // ev.preventDefault();
    sForm.classList.add("opacity-0");
    sFormInput.value = "";

    if (currentWidth <= 768 && !headerLogo.classList.contains("opacity-0")) {
      headerLogo.classList.add("opacity-0");
      burger.classList.add("opacity-0");
    } else {
      setTimeout(() => {
        headerLogo.classList.remove("opacity-0");
        burger.classList.remove("opacity-0");
      }, 300);
    }

    setTimeout(() => {
      sBtn.classList.toggle("visually-hidden");
      sForm.classList.toggle("search-form--tablet");
      sFormInput.classList.toggle("visually-hidden");
      sFormUnderline.classList.toggle("visually-hidden");
      sFormUnderline.classList.toggle("search-form__underline--tablet");
      // sExitBtn.classList.remove("visually-hidden");
      // showBtn.classList.toggle("d-none");
      showBtnShow.classList.toggle("visually-hidden");
      showBtnHide.classList.toggle("visually-hidden");
      sForm.classList.toggle("opacity-0");
      // sBtn.parentElement.innerHTML = sBtn.parentElement.innerHTML;
    }, 300);
  }

  ////////////////////////////////////////////

  function exitBtnClick() {
    sForm.classList.add("opacity-0");
    setInterval(() => {
      // headerLogo.classList.remove("visually-hidden");
      // burger.classList.remove("visually-hidden");
      sForm.classList.remove("search-form--tablet");
      sFormInput.classList.add("visually-hidden");

      sFormUnderline.classList.add("visually-hidden");
      sFormUnderline.classList.remove("search-form__underline--tablet");
      sExitBtn.classList.add("visually-hidden");
      sForm.classList.remove("opacity-0");
      // sBtn.remo
    }, 300);
  }

  ///////////////////////////////////////////////////////
  //====================================================
  ///////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", () => {
    initialize();

    if (currentWidth <= 1024) {
      // loginBtn.classList.add("visually-hidden");
      sFormInput.classList.add("visually-hidden");
      sFormUnderline.classList.add("visually-hidden");
      sBtn.classList.add("visually-hidden");
      showBtn.classList.remove("d-none");
      eventsSwiperPagination.classList.remove("d-none");

      if (currentWidth > 768 && currentWidth < 1023) {
        tabsNav.classList.add("column-1");
      }

      if (currentWidth < 680) submitBtn.classList.add("short-message");
    }

    // burger click
    burger.addEventListener("click", toggleBurgerMenu);

    // menu click
    menuLinks.forEach(function (elem) {
      elem.addEventListener("click", () => {
        if (currentWidth <= 1024) toggleBurgerMenu();

        burger.classList.remove("burger--active");
        menu.classList.remove("nav--active");
        document.body.classList.remove("stop-scroll");

        // switchLoginBtn();
      });
    });

    if (currentWidth > 1024) {
      tippyOffset = 13;

      sForm.addEventListener("click", () => {
        sFormInput.focus();
        sBtn.classList.add("no-hover");
      });

      sBtn.addEventListener("click", searchBtnClick);
      // sBtn.removeEventListener("click", searchBtnClickDesktop);

      sFormInput.addEventListener("click", () => {
        sBtn.classList.add("no-hover");
      });

      sFormInput.addEventListener("blur", () => {
        sBtn.classList.remove("no-hover");
      });
    } else {
      // width <= 1024;
      // console.log("enter to tablet block");

      tippyOffset = 8;
      showBtn.addEventListener("click", showSearchForm);
      sBtn.addEventListener("click", searchBtnClick);
      sFormInput.addEventListener("keydown", (ev) => {
        if (ev.keyCode === 0xd) searchBtnClick();
      });

      // sExitBtn.addEventListener("click", exitBtnClick);
    }

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////////////////////////////////////

    // hero swiper
    const heroSwiper = new Swiper(".hero__swiper", {
      slidesPerView: 1,
      // spaceBetween: 10,
      speed: 2000,
      autoplay: {
        delay: 2000,
      },
      effect: "fade",
      allowTouchMove: false,
    });
    // end hero swiper
    // -----------------------

    document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
      new SimpleBar(dropdown, {
        autoHide: false,
        scrollbarMaxSize: 25,
      });
    });

    const btns = document.querySelectorAll(".menu__btn");
    const dropdowns = document.querySelectorAll(".dropdown");
    const activeClassdropdowns = "dropdown__active";
    const activeClassbtns = "btn__active";

    btns.forEach((item) => {
      item.addEventListener("click", function () {
        let DropThis = this.parentElement.querySelector(".dropdown");
        dropdowns.forEach((el) => {
          if (el != DropThis) {
            el.classList.remove(activeClassdropdowns);
          }
        });
        btns.forEach((el) => {
          if (el != this) {
            el.classList.remove(activeClassbtns);
          }
        });
        DropThis.classList.toggle(activeClassdropdowns);
        this.classList.toggle(activeClassbtns);
      });
    });

    // custom select (galery)
    const element = document.querySelector(".galery__select");
    const choices = new Choices(element, {
      allowHTML: true,
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: "",
    });

    // swiper (galery)
    const galerySwiper = new Swiper(".galery__swiper", {
      speed: 1000,

      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,

      breakpoints: {
        577: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        // 768: {
        //   slidesPerView: 2,
        //   spaceBetween: 34,
        // },
        // when window width is >= 640px
        1025: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },
      },

      a11y: {
        prevSlideMessage: "предыдущий слайд",
        nextSlideMessage: "следующий слайд",
        itemRoleDescriptionMessage: "",
        containerMessage: "",
        slideRole: "",
      },

      navigation: {
        nextEl: ".galery__swiper-button-next",
        prevEl: ".galery__swiper-button-prev",
      },
      pagination: {
        el: ".galery__swiper-pagination",
        type: "fraction",
      },
    });

    // accordion (catalog)
    new Accordion(".catalog__accordion-container");

    // tabs (catalog)
    document.querySelectorAll(".tabs-nav__btn").forEach((tabsBtn) => {
      tabsBtn.addEventListener("click", (e) => {
        const path = e.currentTarget.dataset.path;
        const target = document.querySelector(`[data-target="${path}"]`);
        const activeItem = document.querySelector(".tabs-item--active");

        document.querySelectorAll(".tabs-nav__btn").forEach((btn) => {
          btn.classList.remove("tabs-nav__btn--active");
        });

        e.currentTarget.classList.add("tabs-nav__btn--active");

        activeItem.classList.add("tabs-item--hide");
        setTimeout(() => {
          activeItem.classList.remove("tabs-item--active");

          target.classList.add("tabs-item--active");
          setTimeout(() => {
            target.classList.remove("tabs-item--hide");
          }, 200);
        }, 100);
      });
    });

    // slider events
    const eventsSwiper = new Swiper(".events__swiper", {
      // slidesPerView: 1,
      // spaceBetween: 50,
      slidesPerGroup: 1,

      pagination: {
        el: ".events__swiper-pagination",
        clickable: true,
      },

      a11y: {
        prevSlideMessage: "предыдущий слайд",
        nextSlideMessage: "следующий слайд",
        itemRoleDescriptionMessage: "",
        containerMessage: "",
        slideRole: "",
      },

      breakpoints: {
        577: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 34,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },

      navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
      },
    });

    // tooltip projects (tippy js)
    tippy(".projects__tippy", {
      duration: 300,
      // hideOnClick: "toggle",
      // trigger: "click",
      // trigger: "mouseover",
      // trigger: "focus",
      maxWidth: 264,
      offset: [0, tippyOffset],
    });

    // slider projects
    const projectsSwiper = new Swiper(".projects__swiper", {
      // slidesPerView: 3,
      // spaceBetween: 50,

      breakpoints: {
        577: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },

      a11y: {
        prevSlideMessage: "предыдущий слайд",
        nextSlideMessage: "следующий слайд",
        itemRoleDescriptionMessage: "",
        containerMessage: "",
        slideRole: "",
      },

      navigation: {
        nextEl: ".projects__swiper-button-next",
        prevEl: ".projects__swiper-button-prev",
      },
    });

    // contacts form
    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    const validation = new JustValidate(".form", {
      errorFieldCssClass: "is-invalid",

      errorLabelCssClass: "is-label-invalid",
      errorLabelStyle: {
        color: "#d11616",
        width: "150px",
      },
    });

    validation
      .addField(".form__input-name", [
        {
          rule: "required",
          errorMessage: "Нужно ввести имя",
        },
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Не менее 3х символов",
        },
        {
          rule: "maxLength",
          value: 30,
          errorMessage: "Не более 30 символов",
        },
      ])
      .addField(".form__input-tel", [
        {
          rule: "required",
          errorMessage: "Нужно ввести телефон",
        },
        {
          validator: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
          errorMessage: "Введите телефон полностью",
        },
      ])
      .onSuccess((event) => {
        validation.form.submit();
      });

    // yandex map
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map(
        "map-1",
        {
          center: [55.75912156895556, 37.61443749999993],
          zoom: 13.5,
          controls: ["geolocationControl", "zoomControl"],
        },
        {
          geolocationControlFloat: "right",
          zoomControlPosition: { right: 30, top: 270 },
          zoomControlSize: "small",
        }
      );

      myMap.behaviors.disable("scrollZoom");

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Circle", // тип геометрии - точка
          coordinates: [55.75912156895556, 37.61443749999993], // координаты точки
          radius: 100,
        },
      });

      var myPointer = new ymaps.Placemark(
        [55.75912156895556, 37.61443749999993],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "../img/map-pointer-mobile.png",
          iconImageSize: [20, 20],
          iconImageOffset: [-10, -10],
        }
      );

      myMap.geoObjects.add(myPointer);
    }
  }); // DOMContentLoaded
})();
