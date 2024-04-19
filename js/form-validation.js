var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);

const validation = new JustValidate(".form", {
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "blue",
  },
});

validation
  .addField(".name", [
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
  .addField(".tel", [
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
  ]);
