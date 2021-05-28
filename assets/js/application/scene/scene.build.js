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
        this.currentKey = 0

        this.throttle = 1000

        this.modules = {
            first: FIRST, 
            second: SECOND, 
            third: THIRD
        }

        this.style = {
            transition: 'transform 0.6s',
            transform: 'translate(0, 0)'
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
        const {deltaY} = e

        if(deltaY < 0){
            this.currentKey -= 1
            this.currentKey = Math.max(0, this.currentKey)
        }else{
            this.currentKey += 1
            this.currentKey = Math.min(this.group.length - 1, this.currentKey)
        }

        this.onWheelChangeStyle()
    }
    onWheelChangeStyle(){
        const y = this.currentKey * (-100 / this.group.length)
        this.style.transform = `translate(0, ${y}%)`
    }


    // on click button
    click(key){
        const y = key * (-100 / this.group.length)
        this.style.transform = `translate(0, ${y}%)`

        this.currentKey = key
    }
}