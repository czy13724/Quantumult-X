import React from 'react'

function Input({ frame, onChange = () => {} }) {
    return (
        <input
            id="input"
            frame={frame}
            type={$kbType.ascii}
            placeholder="输入类名如: UIView"
            events={{
                returned: onChange,
                didBeginEditing(sender) {
                    sender.ocValue().invoke('selectAll')
                }
            }}
        />
    )
}

export default Input







































// Adding a dummy sgmodule commit(17)
// Adding a dummy plugin commit(15)
// Adding a dummy stoverride commit(12)
