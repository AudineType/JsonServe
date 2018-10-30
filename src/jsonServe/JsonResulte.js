let div = document.createElement("div")
function JsonResulte(file, element){
    file = file.replace("./", "")
    fetch('/src/' + file)
        .then(response => response.json())
        .then(json =>{
            for (let elem in json.template) {
                let j = json.template[elem]
                elem = elem.replace(/:/g, "")
                    .replace(/\[/g, "")
                    .replace(/\]/g, "")
                    .replace(/\{/g, "")
                    .replace(/\}/g, "")
                    .replace(/\//g, "")
                    .replace(/\//g, "")
                    .replace(/'/g, "")
                    .replace(/'/g, "")
                    .replace(/"/g, "")
                    .replace(/"/g, "")
                    .replace(/\\/g, "")
                    .replace(/\\/g, "")
                    .replace(/\(/g, "")
                    .replace(/\)/g, "")
                    .replace(/#/g, "")
                    .replace(/\$/g, "")
                    .replace(/_/g, "")
                    .replace(/!/g, "")
                    .replace(/%/g, "")
                    .replace(/</g, "")
                    .replace(/>/g, "")
                    .replace(/ [a-zA-Z0-9]+/g, "")
                let el = document.createElement(elem)
                if(typeof j == "string") el.innerHTML = j
                else if(typeof j == "object" && j instanceof Object){
                    el.innerHTML = j.text
                    for (const attr in j.attrs) {
                        el.setAttribute(attr, j.attrs[attr])
                    }
                }
                div.appendChild(el)
            }
            element.appendChild(div)
            if(json.required != (null || undefined) && json.required instanceof Array){
                json.required.forEach((fileLink) =>{
                    fileLink = fileLink.replace("./", "")
                    JsonResulte("./components/json/" + fileLink, element)
                })
            }
        })
}
export default JsonResulte