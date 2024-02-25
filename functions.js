function timeStamp(){
    return new Date().getTime();
}


var modal 

function modalShow(title,body){
    $('.modal').remove();
    var modalId = `modal${timeStamp()}`
    var htmlModal = `    
    <div class="modal" id="${modalId}" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable" role="document"   style="min-width: max-content;">
            <div class="modal-content">
                <div class="modal-header">   
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">${body}</div>
        </div>
        </div>
    </div>`
    $('#container').append(htmlModal);
    var modal = $('#'+modalId)
    modal.modal('show');
    return modal
}

function getOptionDomain(variable){
    var options = []    
    switch (variable) {
        case 'buyer':
            parties.forEach(x => options.push({value:x.code,text:x.code}));
            break;
        case 'seller':
            parties.forEach(x => options.push({value:x.code,text:x.code}));
            break;
        case 'contract':
            contracts.forEach(x => options.push({value:x.code,text:x.code}));
            break;
        case 'billing_template':
            billing_templates.forEach(x => options.push({value:x.code,text:x.code}));
            break;
        case 'rounding':
            rounding_rules.forEach(x => options.push({value:x.code,text:x.text}));
            break;
        case 'approval':
            approval_rules.forEach(x => options.push({value:x.code,text:x.text}));
            break;
        case 'regex':
            regex_validation.forEach(x => options.push({value:x.code,text:x.code}));
            break;
        case 'bool':
            options.push({value:1,text:'Yes'})
            options.push({value:0,text:'No'})
            break;
        default:
            variable_domain_codes.filter(x => x.variable === variable).forEach(x => options.push({value:x.code,text:x.code}));
    }
    return options
}

function htmlControlFormat(type,cotrol,label,required){
    var html = ''
    switch (type) {
        case 'form':
            html =  `
            <div class="form-group row">
                    <label for="newCode" class="col-md-4 col-form-label">${label}${required?'<span class="required">*</span>':''}</label>
                    <div class="col-md-8">${cotrol}</div>
                </div>`
            break;
        default:
            html = cotrol
    }
    return html;
}

function htmlControlText(type,id,label,value,required,readonly){
    var strValue = value?`value="${value}"`:''
    return htmlControlFormat(type,`<input prevval="${value}" type="text" ${strValue} class="form-control" val="${id}" ${required?'required':''}  ${readonly?'readonly':''}>`,label,required) 
}

function htmlControlNumber(type,id,label,value,required,readonly,step){
    var strValue = value?`value="${value}"`: id=='index'?'value="1"':''
    var style = id=='index'?'style="max-width:80px"':''
    return htmlControlFormat(type,`<input ${style} prevval="${value}" type="number" step="${step}" ${strValue} class="form-control" val="${id}" ${required?'required':''}  ${readonly?'readonly':''}>`,label,required) 
}


function htmlControlPeriod(type,id,label,value,required,readonly){
    var strValue = value?`value="${value}"`:''
    return htmlControlFormat(type,`<input prevval="${value}" type="month" ${strValue} class="form-control" val="${id}" ${required?'required':''}  ${readonly?'readonly':''}>`,label,required) 
}

function htmlControlOption(type,id,label,value,required,readonly,options,multiple){
    var htmlOption = []
    htmlOption.push(`<option value=""></option>`);
    if(options){
        options.map(option=> {
            var selected = value==option.value?'selected':''
            htmlOption.push(`<option value="${option.value}" ${selected}>${option.text}</option>`)
        })
    }
    return htmlControlFormat(type,`<select class="form-control" prevval="${value}" val="${id}" ${required?'required':''}  ${readonly?'readonly':''} ${multiple?'multiple':''}>${htmlOption}</select>`,label,required) 
}


function htmlControl(obj,readonly=false){
    switch (obj.type) {
        case 'text':
            return htmlControl_Text(obj,readonly)
        case 'code':
            return htmlControl_Code(obj,readonly)
        case 'domain':
            return htmlControl_Option(obj,readonly)
        case 'number':
            return htmlControl_Number(obj,readonly)
        case 'period':
            return htmlControl_Period(obj,readonly)
        case 'bool':
            obj.options=[{value:'true',text:'Yes'},{value:'false',text:'No'}]
            return htmlControl_Option(obj,readonly)
        default:
    }
}


function htmlControl_Code(obj,readonly=false){
    return htmlControlFormat(obj.selector,`<textarea ${obj.extension} prevval="${obj.value}" type="text" class="form-control" val="${obj.code}" ${obj.required?'required':''}  ${obj.readonly&&readonly?'readonly':''}>${obj.value??''}</textarea>`,obj.text,obj.required) 
}

function htmlControl_Text(obj,readonly=false){
    var strValue = obj.value?`value="${obj.value}"`:''
    return htmlControlFormat(obj.selector,`<input ${obj.extension} prevval="${obj.value}" type="text" ${strValue} class="form-control" val="${obj.code}" ${obj.required?'required':''}  ${obj.readonly&&readonly?'readonly':''}>`,obj.text,obj.required) 
}

function htmlControl_Number(obj,readonly=false){
    var strValue = obj.value!=undefined?`value="${obj.value}"`: obj.id=='index'?'value="1"':''    
    console.log(obj)
    var strMin = obj.min!=undefined?`min="${obj.min}"`:''
    var strMax = obj.max!=undefined?`max="${obj.max}"`:''
    return htmlControlFormat(obj.selector,`<input ${strMin} ${strMax} ${obj.extension} prevval="${obj.value}" type="number" step="${obj.step}" ${strValue} class="form-control" val="${obj.code}" ${obj.required?'required':''}  ${obj.readonly&&readonly?'readonly':''}>`,obj.text,obj.required) 
}

function htmlControl_Period(obj,readonly=false){
    var strValue = obj.value?`value="${obj.value}"`:''
    return htmlControlFormat(obj.selector,`<input ${obj.extension} prevval="${obj.value}" type="month" ${strValue} class="form-control" val="${obj.code}" ${obj.required?'required':''}  ${obj.readonly&&readonly?'readonly':''}>`,obj.text,obj.required) 
}


function htmlControl_Option(obj,readonly=false){
    var htmlOption = []
    htmlOption.push(`<option value=""></option>`);
    if(!obj.options)obj.options = getOptionDomain(obj.code)
    obj.options.map(option=> {
        var selected = obj.value==option.value?'selected':''
        htmlOption.push(`<option value="${option.value}" ${selected}>${option.text}</option>`)
    })  
    return htmlControlFormat(obj.selector,`<select ${obj.extension} class="form-control" prevval="${obj.value}" val="${obj.code}" ${obj.required?'required':''}  ${obj.readonly&&readonly?'readonly':''} ${obj.multiple?'multiple':''}>${htmlOption}</select>`,obj.text,obj.required) 
}

function getUser(){
    return document.getElementById("user").value;
}

function getCurrentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
}  

function getLast(obj){
    return obj?obj[obj.length-1]:null
}

if (typeof JSON === 'undefined') {
    JSON = {
      stringify: function (obj) {
        var seen = [];
        return JSON.stringify(obj, function (key, val) {
          if (typeof val === 'object' && val !== null) {
            if (seen.indexOf(val) !== -1) {
              return;
            }
            seen.push(val);
          }
          return val;
        });
      },
      parse: function (str) {
        return JSON.parse(str);
      }
    };
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}


function getVariable(code){
   return deepCopy(variables).filter(x=> x.code == code)[0]
}


function getGroupLast(data, groupFields) {
    var latestItems = {};  
    data.forEach(function (item) {
      var groupKey = groupFields.map(field => item[field]).join('|');  
      item.groupKey = groupKey
      latestItems[groupKey] = item;
    });  
    return Object.values(latestItems);
}

function getSplitKey(split,splitfields){
    var obj = {}
    split.map(x=>{obj[x.field] = x.value})
    return splitfields.map(x => obj[x]).filter(x=> x!='').join('|');       
}


function showPromptRemarks(required=false){
    var remarks = prompt(`Remarks${required?'*':''}`);
    if(required&&String(remarks).trim() == "") {
        alert("Remarks Required")
        remarks = null
    }
    return {ok:remarks!=null, text:remarks};
}

const hasDuplicates = array => new Set(array).size !== array.length;

function testRegex(pattern, text) {
    const regex = new RegExp(pattern);
    return regex.test(text);
}


function fieldValidation(variable, value){
    //required check
    if (variable.required && !value) return({ok:false, message:`${variable.text} [required]`})

    //regex check
    if (value&&variable.regex) {     
        var regex = regex_validations.filter(x=> x.code == variable.regex)[0]
        var validationResult = testRegex(regex.pattern,value)
        if(!validationResult) return({ok:false, message:`${variable.text} [Error on "${value}", ${regex.text}]`})
    }
    
    //min max check
    if (value < variable.min) return({ok:false, message:`${variable.text} [Min value is ${variable.min}]`})
    if (value > variable.max) return({ok:false, message:`${variable.text} [Max value is ${variable.max}]`})

    //code check
    if(variable.code_structure=='regex'){
        const isRegexPattern = str => { try { new RegExp(str); return true; } catch (error) { return false; } };
        if(!isRegexPattern(value)) return({ok:false, message:`${variable.text} [Error on ${value}, invalid regex pattern]`})
    }

    return {ok:true}
}


var xx
var x1
var x2
var x3
var x4