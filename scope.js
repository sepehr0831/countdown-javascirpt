this.name = "ehsan";

const me = {
    name :"hasan"
    ,
    getnamewithnormal: function(){
        console.log("name",this.name)
    }
    ,
    getnamewitharrow:() => {
        console.log("name",this.name)
    }

}

me.getnamewithnormal()
me.getnamewitharrow()