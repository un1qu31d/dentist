const languages = [
  {
    name: 'en',
    content: {
      headerUserFromInputUserRequiredTitle: '',
      headerUserFromInputUserRequiredContent: 'user name field is required',
      headerUserFromInputPasswordRequiredTitle: '',
      headerUserFromInputPasswordRequiredContent: 'password field is required',
      contactUsFromInputNameRequiredTitle: '',
      contactUsFromInputNameRequiredContent: 'name field is required',
      contactUsFromInputEmailRequiredTitle: '',
      contactUsFromInputEmailRequiredContent: 'email field is required',
      contactUsFromInputSubjectRequiredTitle: '',
      contactUsFromInputSubjectRequiredContent: 'subject field is required',
      contactUsFromInputMessageRequiredTitle: '',
      contactUsFromInputMessageRequiredContent: 'message field is required'
    }
  },
  {
    name: 'ar',
    content: {
      headerUserFromInputUserRequiredTitle: '',
      headerUserFromInputUserRequiredContent: 'حقل اسم المستخدم مطلوب',
      headerUserFromInputPasswordRequiredTitle: '',
      headerUserFromInputPasswordRequiredContent: 'حقل كلمة المرور مطلوب',
      contactUsFromInputNameRequiredTitle: '',
      contactUsFromInputNameRequiredContent: 'حقل الاسم مطلوب',
      contactUsFromInputEmailRequiredTitle: '',
      contactUsFromInputEmailRequiredContent: 'حقل البريد الالكترونى مطلوب',
      contactUsFromInputSubjectRequiredTitle: '',
      contactUsFromInputSubjectRequiredContent: 'حقل عنوان الرسالة مطلوب',
      contactUsFromInputMessageRequiredTitle: '',
      contactUsFromInputMessageRequiredContent: 'حقل الرسالة مطلوب'
    }
  }
];
const language = languages.find(language => language.name === document.querySelector('html').getAttribute('lang')).content;