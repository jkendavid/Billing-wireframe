

$('body').prepend(
`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Contract
              </a>
              <div class="dropdown-menu" aria-labelledby="servicesDropdown">
              <a class="dropdown-item" href="contracts.html">Contract List</a>
                  <a class="dropdown-item" href="parties.html">Parties</a>
                  <a class="dropdown-item" href="contract_variables.html">Contract Variables</a>
                  <a class="dropdown-item" href="contract_fields.html">Contract Fields</a>
                  <a class="dropdown-item" href="contract_templates.html">Contract Template</a>
              </div>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Billing
              </a>
              <div class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <a class="dropdown-item" href="billing_templates.html">Billing Templates</a>
                  <a class="dropdown-item" href="billing_calculations.html">Billing Calculations</a>
              </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Configuration
            </a>
            <div class="dropdown-menu" aria-labelledby="servicesDropdown">
                <a class="dropdown-item" href="variables.html">Variables</a>
                <a class="dropdown-item" href="field_values.html">Fields Data</a>
                <a class="dropdown-item" href="finance_accounts.html">Finance Accounts</a>
                <a class="dropdown-item" href="finance_account_link.html">Finance Accounts Link</a>
            </div>
        </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Determinants
              </a>
              <div class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <a class="dropdown-item" href="variable_data_montlyindices.html">Monthly Indices</a>
                  <a class="dropdown-item" href="variable_data_montlyplantdata.html">Monthly Plant Data</a>
                  <a class="dropdown-item" href="variable_data_montlydudata.html">Monthly DU Data</a>
              </div>
          </li>
      </ul>
      <ul class="navbar-nav ml-auto">         
          <li class="nav-item">
              <select class="form-control" id="user" required onchange="handleUserChange()">
                <option value="MKTG">MKTG</option>
                <option value="MKTGMNGR">MKTGMNGR</option>
              </select>
          </li>
      </ul>
  </div>
</nav>`
)
function handleUserChange() {}

function Arg(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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

function doesValueExistInColumn(dataTable, columnIdx, valueToCheck) {
var columnData = dataTable.column(columnIdx).data().toArray();
return columnData.includes(valueToCheck);
}


function TableRecordExist(dataTable, conditions){
    for (var i = 0; i < dataTable.rows().count(); i++) {
        var output = true;        
        for (var c = 0; c < conditions.length; c++) {
            var condition = conditions[c]
            var cell = dataTable.rows().data()[i][condition.index];
            switch (condition.cond){
                case '!=':
                    output &&= cell != condition.value
                    break;
                case '>':
                    output &&= cell > condition.value
                    break;
                case '<':
                    output &&= cell < condition.value
                    break;
                default:
                    output &&= cell == condition.value
            }
        }
        if (output == true) return true
    }
    return false
}


function periodVal(text){
    return parseInt(text.replace('-', ''))
}


function pause(n) {    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(); 
      }, n); 
    });
}


function RefCode(pref) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let referenceNumber = '';
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        referenceNumber += characters.charAt(randomIndex);
    }
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        referenceNumber += numbers.charAt(randomIndex);
    }
    return pref+referenceNumber;
}
  
function getFloat(str){
    return  parseFloat(str.toString().replace(/,/g, ''));
}

function nFormat(number,digit=null){
    number=getFloat(number==''?'0':number);
    if(digit==null){
        var numberString = number.toString();
        var match = numberString.match(/\.(\d+)/);
        digit= match==null?0:match[1].length 
        digit=digit>8?8:digit
    }
    return number.toLocaleString(undefined, {
        minimumFractionDigits: digit,
        maximumFractionDigits: digit
    });
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


function updateSelectOption(opt,data,all='',classindex = null){
    var value = opt.val();
    opt.empty();
    if(all!=''){ 
        opt.append($('<option>', {
            value: '',
            text: all
        }));
    }

    $.each(data, function(index, value) {
        opt.append($(`<option>`, {
            value: value[0],
            text: value[0],
            class: classindex!=null?value[classindex]:''
        }));
    });
    opt.val(value);
}