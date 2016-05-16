(function () {

     var Vegetable = {
         family: 'vegetable',
         color: '',
         version: 1,
         validate : function(otherFamily) {
             if(this.family == otherFamily) {
                 return true;
             }
         }
     };

    var cucumber = Object.create(Vegetable);

    console.log(cucumber.family + " " + cucumber.version);
    console.log(cucumber.validate('vegetable'));

}());