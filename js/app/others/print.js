/**
 * Created by nitiraj on 20/4/14.
 */

define(["Log"], function(logger){
    function print(msg){
        logger.log(msg);
    }

    return print;
});