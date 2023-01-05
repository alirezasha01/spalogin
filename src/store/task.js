import {defineStore} from 'pinia';

export const useFormStore = defineStore('form', {
    state: () => {
        return {
            name: "",
            nameError: "",
            lastname: "",
            lastnameError: "",
            phoneNum: "",
            phoneNumError: "",
            phone: "",
            phoneError: "",
            address: "",
            addressError: "",
            gender: 'اقا',
        }
    },

})