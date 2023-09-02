/* eslint-disable no-useless-escape */
export const PASSWORD_REGEX = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&-]).{8,30}$/
);

export const EMAIL_REGEX = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);

export const FULLNAME_REGEX = RegExp(
  /^(?=.{1,20}$)[A-Za-z]+(?:['_.\s][A-Za-z]+)*$/
);

export const PHONE_NUMBER_REGEX = RegExp(
  /^\+?([0-9]{2,3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/
);

export const URL_REGEX = RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
);
export const ONLY_NUMBER_REGEX = RegExp(/^[0-9]*$/);

export const IS_STRING_REGEX = /[a-zA-Z]/g;

export const STRING_AND_NUMBER = RegExp(/^[a-z0-5_.]+$/);
