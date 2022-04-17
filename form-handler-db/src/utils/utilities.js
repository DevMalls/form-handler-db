export const isEmpty = (value) => value.trim() === '';
export const isEmail = (value) => !value.includes('@');
export const isCenter = (value) => value.length !==2;
export const isExpierence = (value) => +value <= 1 ;

export const isBirthYear = (value) => {
    const birthYear = new Date(value);
    return birthYear.getFullYear() > 2021 };

export const hasNoError = (value) => value.name.error === false && value.email.error === false &&
     value.address.error === false && value.blood.error === false && value.gender.error === false && 
     value.center.error === false && value.expierence.error === false && value.dateOfBirth.error === false ;

export const getAction = (inputId) => {
    if(inputId  !== null) {
        return { 
            url: `https://form-inputs-8f8ee-default-rtdb.firebaseio.com/inputs/${inputId}.json`,
            method:'PUT',
            value:'Update'} 
    }
    else{
        return { 
            url: `https://form-inputs-8f8ee-default-rtdb.firebaseio.com/inputs/.json`,
            method:'POST',
            value:'Add'} 
    }
}