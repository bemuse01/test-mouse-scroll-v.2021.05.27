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
            name: 'second',
            _class: 'scene-second',
            style: {
                background: 'hsl(130, 100%, 90%)'
            }
        }
    }


    // get
    get(){
        return this.element
    }
}