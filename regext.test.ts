const postNumber = 12
const title = '[기타] 아하 개발'
const regex = /(\[[a-z0-9A-Z가-힣]*\]) ([a-z0-9가-힣\s]*)/
const commitMessage = `[${title.replace(regex, '$2')}/${postNumber}]`

const regexBlank = /[ ]/g
const regexSquareBracket = /[\[\]]/g
const branchName = commitMessage.replace(regexBlank, '-').replace(regexSquareBracket, '')

console.log(commitMessage, branchName)
