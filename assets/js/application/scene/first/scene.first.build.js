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
            name: 'first',
            _class: 'scene-first',
            style: {
                background: 'hsl(0, 100%, 90%)'
            }
        }
    }


    // get
    get(){
        return this.element
    }
}