/**
 * Created by nitiraj on 20/4/14.
 */
define([],function(){
   var Logger = {
       log : function(msg){
           if( window.console || console){
               console.log(msg);
           }
       }
   };

   return Logger;
});