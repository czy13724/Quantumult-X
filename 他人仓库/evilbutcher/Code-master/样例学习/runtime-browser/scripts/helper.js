export const noop = () => {}
export function minifyCode(code) {
    const minifiedCode = code.replace(/\t/g, ' '.repeat(2)).replace(/\s\(0x\w+\)/g, '')
    return minifiedCode.includes('<NSObject:') ? minifiedCode : minifiedCode.replace(/in NSObject:[\s\S]*/g, '')
}

export function getMethodDescription(name) {
    const instance = $objc(name)
    if (!instance.__clsName) {
        return
    }
    const description = instance.$__methodDescription()
    if (!description) {
        return
    }
    return minifyCode(description.jsValue().toString())
}




























// Adding a dummy plugin commit(11)
// Adding a dummy stoverride commit(8)
// Adding a dummy sgmodule commit(14)
