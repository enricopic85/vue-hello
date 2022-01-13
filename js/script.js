new Vue({
    el:"#app",
    data:{
        message:"Hello Vue",
        src:'https://media-assets.ad-italia.it/photos/60fe88ac74e20fc41794f497/16:9/w_1280,c_limit/Sudafrica_fynbos_1.jpg',
        name:'',
        listaNomi:[]
    },
    methods:{
        saluta:function(){
            alert( "ciao " + this.name)
        },
        pushNomi:function(){
            this.listaNomi.push(this.name)
            console.log(this.listaNomi)
        }
    }
})