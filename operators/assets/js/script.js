const operatorsPagesEnglish = {
    title: 'Select Operator'
}
const operatorsPagesArabic = {
    title: 'إختر المشغل'
}
const languageButton = (language)=>{
    const lgBtn = document.querySelector('#language')
    lgBtn.innerText = `${language}`
}
const changeOperators = (language) => {
    const title = document.querySelector('#title-operators')
    title.innerText = language.title
}
languageStorage = window.sessionStorage
document.querySelector('#language').addEventListener('click', () => {
    if(languageStorage.getItem('language') === 'English'){
        document.querySelector('#operators') && changeOperators(operatorsPagesArabic)
        languageButton('ENGLISH')
        languageStorage.setItem('language', 'Arabic')
    }else{
        languageStorage.setItem('language', 'English')
        document.querySelector('#operators') && changeOperators(operatorsPagesEnglish)
        languageButton('عربي')
    }
    
})
if(languageStorage.getItem('language') === 'English'){
    document.querySelector('#operators') && changeOperators(operatorsPagesEnglish)
    languageButton('عربي')
}else{
    document.querySelector('#operators') && changeOperators(operatorsPagesArabic)
    languageButton('ENGLISH')
}
