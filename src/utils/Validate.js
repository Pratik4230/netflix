 export const checkValidData = (email,password) => {

    const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValidate) return " email is not valid ";
    if(!isPasswordValid) return "password is not valid";
   

  return null;
}

export const checkValidName = (name) => {

    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    
    if(!isNameValid) return "name is not valid";
    

  return null;
}

