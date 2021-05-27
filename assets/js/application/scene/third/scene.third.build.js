export default class{
    constructor(){
        this.init()
        this.create()
    }


    // init
    init(){
    }


    // create
    create(){
        this.element = {
            name: 'third',
            _class: 'scene-third',
            style: {
                background: 'hsl(220, 100%, 90%)'
            }
        }
    }


    // get
    get(){
        return this.element
    }
}