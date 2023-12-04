import React, { memo } from 'react'

function CodeView({
    frame,
    content,
    theme = 'nord',
    language = 'objectivec',
    fontSize = 12,
    fontFamily = 'iosevka',
    lineBreakMode = 0,
    ...rest
}) {
    const key = $text.SHA1([theme, language, fontSize, fontFamily, lineBreakMode].join())

    return (
        <code
            key={key}
            frame={frame}
            text={content}
            theme={theme}
            language={language}
            font={$font(fontFamily, fontSize)}
            lineBreakMode={lineBreakMode}
            editable={false}
            keys={['']}
            inputAccessoryView={null}
            {...rest}
        />
    )
}

export default memo(CodeView)
