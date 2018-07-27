import moment from 'moment'

function serializeKeyValue(json, key) {
    return `${key}: ${json[key]}`
}

export default class AssSerializer {
    static serialize(json) {
        return AssSerializer.serializeHeaderInfo(json) + AssSerializer.serializeV4Styles(json) + AssSerializer.serializeEvents(json)
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

    static serializeV4Styles(json) {
        let v4Styles = json.styles

        return `[V4+ Styles]
Format: ${v4Styles.format.join(', ')}
${v4Styles.style.map(s => `Style: ${s.join(',')}`).join('\n')}

`
    }

    static serializeEvents(json) {
        let events = json.events

        return `[Events]
Format: ${events.format.join(', ')}
${events.comment.map(d => AssSerializer.serializeComment(d)).join('\n')}
${events.dialogue ? events.dialogue.map(d => AssSerializer.serializeDialogue(d)).join('\n') + '\n' : ''}`
    }

    static serializeTime(number) {
        let milli = String(number).split('.')[1]

        return moment().startOf('day').seconds(number).format('H:mm:ss') + '.' + (milli || '').padEnd(2, '0')
    }

    static serializeDialogueItem(d) {
        return `${d.Layer},${AssSerializer.serializeTime(d.Start)},${AssSerializer.serializeTime(d.End)},${d.Style ? d.Style : ''},${d.Name ? d.Name : ''},${String(d.MarginL).padStart(4, '0')},${String(d.MarginR).padStart(4, '0')},${String(d.MarginV).padStart(4, '0')},${d.Effect ? d.Effect : ''},${d.Text.raw}`
    }

    static serializeDialogue(d) {
        return `Dialogue: ${AssSerializer.serializeDialogueItem(d)}`
    }

    static serializeComment(d) {
        return `Comment: ${AssSerializer.serializeDialogueItem(d)}`
    }
}
