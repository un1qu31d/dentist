window.addEventListener('click', function(event) {
  if(selectorGEFELBCWISC(selectorSAEFTPU(event.target, []), 'header-switcher', 'header-switcher')) {
    document.querySelector('.component.type--header').classList.toggle('status--active-user');
  }
});

const sysMessages = [...document.querySelectorAll('.component.type--sys-messages')].map(element => new Messages({selector: element}));
sysMessages.forEach(messages => messages.init());

[...document.querySelectorAll('.component.type--header .user .form')].forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const elements = [
      {
        selector: form.querySelector('input[name="user"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.headerUserFromInputUserRequiredTitle, content: language.headerUserFromInputUserRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="password"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.headerUserFromInputPasswordRequiredTitle, content: language.headerUserFromInputPasswordRequiredContent}
          }
        ]
      }
    ];
    const messages = [];
    sysMessages.forEach(messages => messages.clear());
    elements.forEach(element => {
      element.selector.classList.remove('error');
    });
    elements.forEach(element => {
      element.rules.forEach(rule => {
        if(!rule.expression(element.selector.value)) {
          element.selector.classList.add('error');
          messages.push(rule.message);
        }
      });
    });
    messages.forEach(message => sysMessages.forEach(messages => messages.add(message.type, message.title, message.content)));
    messages.length && event.preventDefault();
  });
});

const formMessages = [...document.querySelectorAll('.component.type--form-messages')].map(element => new Messages({selector: element}));
formMessages.forEach(messages => messages.init());

[...document.querySelectorAll('.component.type--contact-us-form .form')].forEach(form => {
  form.addEventListener('submit', function(event) {
    const elements = [
      {
        selector: form.querySelector('input[name="name"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.contactUsFromInputNameRequiredTitle, content: language.contactUsFromInputNameRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="email"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.contactUsFromInputEmailRequiredTitle, content: language.contactUsFromInputEmailRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="subject"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.contactUsFromInputSubjectRequiredTitle, content: language.contactUsFromInputSubjectRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('textarea[name="message"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.contactUsFromInputMessageRequiredTitle, content: language.contactUsFromInputMessageRequiredContent}
          }
        ]
      }
    ];
    const messages = [];
    formMessages.forEach(messages => messages.clear());
    elements.forEach(element => {
      element.selector.classList.remove('error');
    });
    elements.forEach(element => {
      element.rules.forEach(rule => {
        if(!rule.expression(element.selector.value)) {
          element.selector.classList.add('error');
          messages.push(rule.message);
        }
      });
    });
    messages.forEach(message => formMessages.forEach(messages => messages.add(message.type, message.title, message.content)));
    messages.length && event.preventDefault();
  });
});

[...document.querySelectorAll('.component.type--main-slider')].map(element => new Slider({selector: element})).forEach(slider => slider.init());

window.addEventListener('click', function(event) {
  const input = selectorGEFELBCWISC(selectorSAEFTPU(event.target, []), 'image-input', 'image-input');
  if(input) {
    input.parentElement.querySelector('input[type="file"]').dispatchEvent(new MouseEvent('click'));
  }
});

const registrationFormMessages = [...document.querySelectorAll('.component.type--registration-form-messages')].map(element => new Messages({selector: element}));
registrationFormMessages.forEach(messages => messages.init());

window.addEventListener('change', function(event) {
  const input = selectorGEFELBCWISC(selectorSAEFTPU(event.target, []), 'image-input-field', 'image-input-field');
  if(input) {
    const messages = [];
    registrationFormMessages.forEach(messages => messages.clear());
    input.parentElement.classList.remove('error');
    input.parentElement.classList.remove('warning');
    if (input.files && input.files[0] && ['gif', 'png', 'jpeg', 'jpg'].includes((input.value.split('.').pop()))) {
      const reader = new FileReader();
      function readerLoad(event) {
        input.parentElement.querySelector('.image-input').innerHTML = `<img src="${event.target.result}" alt="" />`;
        window.clearTimeout(readerLoadTimeout);
      }
      reader.addEventListener('load', readerLoad);
      const readerLoadTimeout = window.setTimeout(function() {
        reader.removeEventListener('load', readerLoad);
        messages.push({type: 'warning', title: language.registrationFromInputImageTimeoutTitle, content: language.registrationFromInputImageTimeoutContent});
        input.parentElement.classList.add('warning');
        messages.forEach(message => registrationFormMessages.forEach(messages => messages.add(message.type, message.title, message.content)));
      }, 20000);
      reader.readAsDataURL(input.files[0]);
    } else {
      input.parentElement.querySelector('.image-input').innerHTML = '';
      messages.push({type: 'warning', title: language.registrationFromInputImageWrongExtTitle, content: language.registrationFromInputImageWrongExtContent});
      input.parentElement.classList.add('warning');
    }
    messages.forEach(message => registrationFormMessages.forEach(messages => messages.add(message.type, message.title, message.content)));
  }
});

[...document.querySelectorAll('.component.type--registration-form .form')].forEach(form => {
  form.addEventListener('submit', function(event) {
    const elements = [
      {
        selector: form.querySelector('input[name="user"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.registrationFromInputUserRequiredTitle, content: language.registrationFromInputUserRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="password"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.registrationFromInputPasswordRequiredTitle, content: language.registrationFromInputPasswordRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="password-confirm"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.registrationFromInputPasswordConfirmRequiredTitle, content: language.registrationFromInputPasswordConfirmRequiredContent}
          }
        ]
      },
      {
        selector: form.querySelector('input[name="email"]'),
        rules: [
          {
            expression: new Function('value', 'return value'),
            message: {type: 'danger', title: language.registrationFromInputEmailRequiredTitle, content: language.registrationFromInputEmailRequiredContent}
          }
        ]
      }
    ];
    const messages = [];
    registrationFormMessages.forEach(messages => messages.clear());
    form.querySelector('input[name="image"]').parentElement.classList.remove('error');
    form.querySelector('input[name="image"]').parentElement.classList.remove('warning');
    elements.forEach(element => {
      element.selector.parentElement.classList.remove('error');
    });
    if(!(form.querySelector('input[name="image"]').files && form.querySelector('input[name="image"]').files[0] && ["gif", "png", "jpeg", "jpg"].includes((form.querySelector('input[name="image"]').value.split(".").pop())))) {
      form.querySelector('input[name="image"]').parentElement.classList.add('error');
      messages.push({type: 'danger', title: language.registrationFromInputImageRequiredTitle, content: language.registrationFromInputImageRequiredContent});
    }
    elements.forEach(element => {
      element.rules.forEach(rule => {
        if(!rule.expression(element.selector.value)) {
          element.selector.parentElement.classList.add('error');
          messages.push(rule.message);
        }
      });
    });
    messages.forEach(message => registrationFormMessages.forEach(messages => messages.add(message.type, message.title, message.content)));
    messages.length && event.preventDefault();
  });
});