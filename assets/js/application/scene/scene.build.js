import FIRST from './first/scene.first.build.js' 
import SECOND from './second/scene.second.build.js' 
import THIRD from './third/scene.third.build.js' 

export default class{
    constructor(){
        this.init()
        this.create()
    }


    // init
    init(){
        this.throttle = 1000

        this.modules = {
            first: FIRST, 
            second: SECOND, 
            third: THIRD
        } 

        this.group = []

        this.registerEvent()
    }
    registerEvent(){
        window.addEventListener('wheel', _.throttle((e) => this.onWheel(e), this.throttle, {'trailing': false}))
    }


    // create
    create(){
        for(const module in this.modules){
            this.group.push(new this.modules[module]())
        }
    }


    // on mouse wheel
    onWheel(e){
        console.log('work')
    }
}