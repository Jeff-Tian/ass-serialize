function serializeKeyValue(json, key) {
    return `${key}: ${json[key]}`
}

export default class AssSerializer {
    static serialize(input) {
        return input
    }

    static serializeHeaderInfo(json) {
        let info = json.info

        return `[Script Info]
${serializeKeyValue(info, 'Title')}
${serializeKeyValue(info, 'ScriptType')}
${serializeKeyValue(info, 'WrapStyle')}
${serializeKeyValue(info, 'PlayResX')}
${serializeKeyValue(info, 'PlayResY')}
${serializeKeyValue(info, 'ScaledBorderAndShadow')}
${serializeKeyValue(info, 'Last Style Storage')}
${serializeKeyValue(info, 'Video File')}
${serializeKeyValue(info, 'Video Aspect Ratio')}
${serializeKeyValue(info, 'Video Zoom')}
${serializeKeyValue(info, 'Video Position')}
`
    }
}
