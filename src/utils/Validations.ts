export const isValidEmail = (email: string) => {
  // const reg = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return reg.test(email);
};

export const isValidPassword = (password: string) => {
  if (password.length < 8) {
    return false;
  } else {
    const hasNumber =
      /^(?=.{8,}$)(?=.*?[A-Z a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/;
    return hasNumber.test(password);
  }
};

