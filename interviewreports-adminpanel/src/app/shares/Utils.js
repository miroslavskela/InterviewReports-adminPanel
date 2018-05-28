class Utils{

    static checkArray = (array, arrElement) => {
        var str1 = JSON.stringify(arrElement);
        for(let i = 0; i < array.length; i++){
            var element = array[i]; 
            var str2 = JSON.stringify(element);
            if (str1 === str2) {
                return true;
            }
        }
    
        return false;
    }

    static checkPass = (array, arrElement, arrElement1) => {
        var str1 = JSON.stringify(arrElement);
        var str2 = JSON.stringify(arrElement1);
        let exist = false;
        let exist1 = false;
       
        for(let i = 0; i < array.length; i++){
            var element = array[i]
            var strElement = JSON.stringify(element)
                if(str1 === strElement){
                    exist = true
                }else{
                    exist = false
                }
            }
         for(let i = 0; i < array.length; i++){
            var element = array[i]
            var strElement = JSON.stringify(element)
                if(str2 === strElement){
                     exist1 = true
                }else{
                    exist1 = false
                }
            }
        if(exist && exist1){
            return true
        }else{
            return false
        }
        }

        static validateEmail = (email) => {
            const re = /\S+@\S+\.\S+/;
               return re.test(email);
           }
           
         static validatePass = (password) => {
              
                   const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
                   return re.test(password);
               
           
       }
    }
    
    
    
    export default Utils
        