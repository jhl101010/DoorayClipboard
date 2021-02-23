// const title = '[설계] 모모 서버 프로젝트 리팩토링'
// const value = 'abc'
// //([a-z0-9가-힣\s]*)
// const regex = new RegExp('\([[a-z0-9A-Z가-힣]*\]) ([a-z0-9가-힣\s]*)')
// const regexTest = new RegExp('ab[cde]*')

// const res = regex.test(title)
// const res2 = regexTest.test(value);


// console.log(regex.test('[이]'))
// console.log(res)
// console.log(title.replace(regex, '$2'))
// console.log("모모")

const str = '[spring application 설정 파일 디렉토리 분리/19]';

console.log(str.replace(/ /gi, '-').replace(/\[/gi, '').replace(/\]/gi, ''))