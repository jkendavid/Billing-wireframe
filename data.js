var dataFields =[
    ['WESMBUYBID',],
    ['WESMSELBID',],
    ['WESMBUYMTN',],
    ['WESMSELMTN',],
    ['METERSIN',],
]


var dataContract =[
    ['PSA-GENCO1-DU01-001','PSA','GEN01','DU01',0,'2024-01','2034-12','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','PSA','GEN01','RES01',0,'2023-01','2033-12','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','RSC','RES01','CC01',0,'2024-02','2034-12','','APPROVED','Yes',''],
]

var dataFieldData =[
    ['WESMBUYBID','DU01'],
    ['WESMBUYBID','RES01'],
    ['WESMBUYBID','CC01'],
    ['WESMSELBID','GEN01'],
    ['WESMSELBID','RES01'],
    ['WESMSELMTN','05GEN01_U01'],
    ['WESMSELMTN','05GEN01_U02'],
    ['WESMBUYMTN','02DU01_L01'],
    ['WESMBUYMTN','02DU01_L02'],
    ['WESMBUYMTN','01DU02_L02'],
    ['METERSIN','200291340102'],
    ['METERSIN','200291340103'],
]

function dataFieldDataFilter(field =""){
    var arr = []
    $.each(dataFieldData, function(index, row) {
        if(row[0]== field||field=="")arr.push([row[1]]);
    });
    return arr;
}



var dataVariables = [
    ['CONTRACTS','C_CC','Contracted Capacity','kWh'],
    ['CONTRACTS','C_MEOT','Minimum Offtake Energy','kWh'],
    ['CONTRACTS','C_CRF','Capital Recovery Fee','Php/kW'],
    ['CONTRACTS','C_FOM','Fixed O&M Fee','Php/kW'],
    ['CONTRACTS','C_VOM','Variable O&M Fee','Php/kWh'],
    ['CONTRACTS','C_ER194','ER-194 Fee','Php/kWh'],
    ['CONTRACTS','C_VC','Variable Charge','Php/kWh'],
    ['CONTRACTS','C_ADMIN','Admin Charge','Php/kWh'],
    ['CONTRACTS','C_NCRCPIB','Base NCR CPI',''],
    ['CONTRACTS','C_FOREXB','Base FOREX',''],
    ['CHARGES','CRF','Capital Recovery Fee','Php'],
    ['CHARGES','FOM','Fixed O&M Fee','Php'],
    ['CHARGES','VOM','Variable  O&M Fee','Php'],
    ['CHARGES','ER194','ER-194','Php'],
    ['CHARGES','FUEL','Fuel Charge','Php'],
    ['CHARGES','VC','Variable Charge','Php'],
    ['CHARGES','ADMIN','ADMIN Charge','Php'],
    ['CHARGES','DWSA_TRANS','Transmission Charge','Php'],
    ['CHARGES','DWSA_SYSLOSS','System Loss Charge','Php'],
    ['CHARGES','DWSA_DEMAND','Demand Charge','Php'],
    ['CHARGES','DWSA_ENERGY','Energy Charge','Php'],
    ['CHARGES','DWSA_METERING','Metering Charge','Php'],
    ['CHARGES','DWSA_SUPPLY','Supply Charge','Php'],
    ['CHARGES','DWSA_PFADJ','Power Factor Adjustment','Php'],
    ['CHARGES','DWSA_CURPT','Current RPT','Php'],
    ['CHARGES','DWSA_LOCFRTAX','Local Franchise Tax','Php'],
    ['CHARGES','DWSA_LIFELINE','Lifeline Rate Subsidy','Php'],
    ['CHARGES','DWSA_SENIORDC','Senior Subsidy/Discount','Php'],
    ['CHARGES','DWSA_TRAC','TRAC','Php'],
    ['CHARGES','DWSA_MISSIO','Missionary','Php'],
    ['CHARGES','DWSA_ENVIR','Environmental Fund','Php'],
    ['CHARGES','DWSA_NPCSCC','NPC Stranded Contract Costs','Php'],
    ['CHARGES','DWSA_NPCDEBT','NPC Stranded Debts','Php'],
    ['CHARGES','DWSA_DUSCC','DU Stranded Contract Costs','Php'],
    ['CHARGES','DWSA_EQTAXROY','Equalization of Taxes and Royalties','Php'],
    ['TEXT','TXT_IDX','Indices',''],
    ['TEXT','TXT_PLNT','Plant Data',''],
    ['TEXT','TXT_QTY','Quantities',''],
    ['TEXT','TXT_RATES','Rates',''],
    ['TEXT','TXT_FXC','Fixed Charge',''],
    ['TEXT','TXT_VARC','Variable Charge',''],
    ['TEXT','TXT_GENC','Generation Charge',''],
    ['TEXT','TXT_DWSA','DWSA',''],
]

function dataVariablesFilter(table =""){
    var arr = []
    $.each(dataVariables, function(index, row) {
        if(row[0]== table||table=="")arr.push([row[1]]);
    });
    return arr;
}



var dataParties =[
    ['GEN01','Generator 1','GEN','Yes',''],
    ['DU01','Distribution Utilities 1','DU/EC','No',''],
    ['RES01','Retail Electricity Supplier 1','RES','Yes',''],
    ['CC01','Contestable Customer 1','CC','No',''],
]




var dataContractVariables =[
    ['PSA-GENCO1-DU01-001','C_CC','1','0','10','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_CC','2','0','15','2029-01','2029-12','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_MEOT','1','0','1,440,000','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_CRF','1','0','2,000','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_FOM','1','0','300','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_VOM','1','0','0.3','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_ER194','1','0','0.01','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_NCRCPIB','1','0','4.6','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','C_FOREXB','1','0','56','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','C_VARIABLE','1','0','1.45','','','APPROVED','Yes',''],
    ['PSA-GENCO1-RES01-001','C_ER194','1','0','0.01','','','APPROVED','Yes',''],
    ['PSA-GENCO1-RES01-001','C_ADMIN','1','0','0.5','','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','C_VARIABLE','1','0','1.45','','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','C_ADMIN','1','0','1','','','APPROVED','Yes',''],
]



var dataContractFields =[
    ['PSA-GENCO1-DU01-001','WESMSELBID','1','0','GEN01','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','WESMBUYBID','1','0','DU01','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','WESMSELBID','1','0','GEN01','','','APPROVED','Yes',''],
    ['PSA-GENCO1-RES01-001','WESMBUYBID','1','0','CC01','','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','METERSIN','1','0','200291340102','','','APPROVED','Yes',''],
]



var dataContractTemplates =[
    ['PSA-GENCO1-DU01-001','1','0','PSADU_V01.00','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','1','0','PSARES_V01.00','','','APPROVED','Yes',''],
    ['PSA-RESO1-CC01-001','1','0','RSC_V01.00','','','APPROVED','Yes',''],
]

var dataTemplates =[
    ['PSADU_V01.00','PSA Template for DU Version 1.0','ACTIVE'],
    ['PSARES_V01.00','PSA Template for RES Version 1.0','ACTIVE'],
    ['RSC_V01.00','RSC Template Version 1.0','ACTIVE'],
]

