class CustomizedFunctions{

     generateRandomString(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          result += charset[randomIndex];
        }
      
        return result;
      }


      getDynamicDate(){
        const now = new Date();
       const year = now.getFullYear();
       const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
       const day = String(now.getDate()).padStart(2, '0');
       return `${year}-${month}-${day}`;
      }

  getRandomNumber(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
  }

}

export default CustomizedFunctions;