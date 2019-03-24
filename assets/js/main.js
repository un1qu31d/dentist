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