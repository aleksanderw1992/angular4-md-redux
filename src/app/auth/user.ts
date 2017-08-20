export class User {
   username: string;
   hashedPassword: string;
   firstname: string;
   surname: string;

   static getDisplayName(user){
     var capitalizeFirstLetter=function (str) {
       return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
     }
     return capitalizeFirstLetter(user.firstname)+' '+ capitalizeFirstLetter(user.surname)
   }

}
