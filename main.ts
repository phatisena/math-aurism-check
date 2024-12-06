namespace Math {

    export function CheckNumStr(numstri:string="") {
        for (let _i = 0; _i < numstri.length; _i++) {
            if (!("0123456789".includes(numstri.charAt(_i)))) {
                return false
            }
        }
        return true
    }

    //%blockid=math_aurismcheck_checknum
    //%block="Get aurism sum number $numstring mod $remnum with invert $invert and reverse $reverse||and debug mode $debug"
    //%numstring.defl="12345678901357902468"
    //%remnum.defl=10
    //%group="aurism check"
    //%weight=10
    //%inlineInputMode=inline
    export function AurismCheck(numstring:string="",remnum:number=0,invert:boolean=false,reverse:boolean=false,debug:boolean=false) {
        if (!(CheckNumStr(numstring))) { return -1 }
        let numlist: number[] = []
        for (let _i = 0; _i < numstring.length; _i++) {
            numlist.push(parseInt(numstring.charAt(_i)))
        }
        let numsum: number[] = []
        let numv = 0
        let curv = 0
        for (let _i = 0; _i < numlist.length; _i++) {
            if (invert) {
                numv -= 1
                if (numv <= 0) {curv += 1;numv = curv}
            } else {
                if (curv <= 0) {curv = 1}
                numv += 1
                if (numv > curv) {curv += 1;numv = 1}
            }
            if (reverse) {numsum.unshift(numv)} else {numsum.push(numv)}
        }
        let numcheck: number[] = []
        numv = 0
        curv = 0
        for (let _i = 0; _i < numlist.length; _i++) {
            numv = numlist[_i] * numsum[_i]
            numcheck.push(numv)
            curv += numv
        }
        if (remnum > 0) { curv = curv % remnum}
        if (debug) {
            console.log("AurismDebugCheck")
            console.log("----------------")
            console.log("numberlist: " + numlist)
            console.log("generatesum: " + numsum)
            console.log("numwithsum: " + numcheck)
            console.log("modulus: " + remnum)
            console.log("result: " + curv)
            console.log("----------------")
        }
        return curv
    }

    export function CheckCharStr(charstri:string="",stri:string="") {
        for (let _i = 0; _i < stri.length; _i++) {
            if (!(charstri.includes(stri.charAt(_i)))) {
                return false
            }
        }
        return true
    }

    //%blockid=math_aurismcheck_checkstring
    //%block="Get aurism sum sumstring $codestring in store charcter $storechar with invert $invert and reverse $reverse||and debug mode $debug"
    //%codestring.defl="makecodearcade"
    //%storechar.defl="0123456789abcdefghijklmnopqrstuvwxyz"
    //%group="aurism check"
    //%weight=5
    //%inlineInputMode=inline
    export function AurismCheckChar(codestring:string="",storechar:string="",invert:boolean=false,reverse:boolean=false,debug:boolean=false) {
        if (!(CheckCharStr(storechar,codestring))) { return "" }
        let numlist: number[] = []
        for (let _i = 0; _i < codestring.length; _i++) {
            numlist.push(storechar.indexOf(codestring.charAt(_i)))
        }
        let numsum: number[] = []
        let numv = 0
        let curv = 0
        for (let _i = 0; _i < numlist.length; _i++) {
            if (invert) {
                numv -= 1
                if (numv <= 0) {curv += 1;numv = curv}
            } else {
                if (curv <= 0) {curv = 1}
                numv += 1
                if (numv > curv) {curv += 1;numv = 1}
            }
            if (reverse) {numsum.unshift(numv)} else {numsum.push(numv)}
        }
        let numcheck: number[] = []
        numv = 0
        curv = 0
        for (let _i = 0; _i < numlist.length; _i++) {
            numv = numlist[_i] * numsum[_i]
            numcheck.push(numv)
            curv += numv
        }
        curv = curv % storechar.length
        if (debug) {
            console.log("AurismDebugCheck")
            console.log("----------------")
            console.log("numberlist: " + numlist)
            console.log("generatesum: " + numsum)
            console.log("numwithsum: " + numcheck)
            console.log("modulus: " + storechar.length)
            console.log("result: " + curv)
            console.log("----------------")
        }
        return storechar.charAt(curv)
    }
}
