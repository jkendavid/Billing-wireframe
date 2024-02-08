


var dataContract =[
    ['PSA-GENCO1-DU01-001','PSA','GEN01','DU01',0,'2024-01','2034-12','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','PSA','GEN01','RES01',0,'2023-01','2033-12','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','RSC','RES01','CC01',0,'2024-02','2034-12','','APPROVED','Yes',''],
]

var dataFieldData =[
    ['wesmbuybid','DU01','Yes'],
    ['wesmbuybid','RES01','Yes'],
    ['wesmbuybid','CC01','Yes'],
    ['wesmselbid','GEN01','Yes'],
    ['wesmselbid','RES01','Yes'],
    ['wesmselmtn','05GEN01_U01','Yes'],
    ['wesmselmtn','05GEN01_U02','Yes'],
    ['wesmbuymtn','02DU01_L01','Yes'],
    ['wesmbuymtn','02DU01_L02','Yes'],
    ['wesmbuymtn','01DU02_L02','Yes'],
    ['metersin','200291340102','Yes'],
    ['metersin','200291340103','Yes'],
    ['plant','GEN01','Yes'],
]

var dataRoundingRule =[
    ['RR_AMOUNT','Amount Rounding Rule','2','RND'],
    ['RR_MW','MW Rounding Rule','4','RND'],
    ['RR_KWH','KWH Rounding Rule','7','RND'],
    ['RR_PKWH','PHP/KWH Rounding Rule','4','RND'],
    ['RR_PKW','PHP/KW Rounding Rule','4','RND'],
    ['RR_INDEX','INDEX Rounding Rule','4','RND'],
]

var dataVariableTables = [
    ['**FIELDS','**Fields Table','','','','No'],
    ['**FUNCTIONS','**Function Table','','','','No'],
    ['**TEXT','**Text Table','','','','No'],
    ['**CHARGES','**Charge Table','','','','No'],
    ['CONTRACTS','Contract data','dbo.vw_contracs','periodfrom|periodto|contract','Yes','Yes'],
    ['DWSA','DWSA data','dbo.vw_dwsa','period|metersin','Yes','Yes'],
    ['STLBID','Settlement Data Per Billing ID','dbo.vw_stlbid','interval5m|wesmbuybid|wesmsellbid','Yes','Yes'],
    ['STLSEIN','Settlement Data Per SEIN','dbo.vw_stlsein','interval5m|metersin','Yes','Yes']
]


var dataVariables = [
    ['**FIELDS','contract','Contract','','','','No','Yes'],
    ['**FIELDS','periodfrom','Period From','','','','No','Yes'],
    ['**FIELDS','periodto','Period From','','','','No','Yes'],
    ['**FIELDS','period','Period','','','','No','Yes'],
    ['**FIELDS','deldate','Delivery Date','','','','No','Yes'],
    ['**FIELDS','delhour','Delivery Hour','','','','No','Yes'],
    ['**FIELDS','interval5m','5-minute Interval','','','','No','Yes'],
    ['**FIELDS','interval1h','Hourly Interval','','','','No','Yes'],
    ['**FIELDS','plant','Plant','','','','Yes','Yes'],
    ['**FIELDS','wesmbuybid','Buyer WESM Billing ID','','','','Yes','Yes'],
    ['**FIELDS','wesmselbid','Seller WESM Billing ID','','','','Yes','Yes'],
    ['**FIELDS','wesmbuymtn','Buyer WESM MTN','','','','Yes','Yes'],
    ['**FIELDS','wesmselmtn','Seller WESM MTN','','','','Yes','Yes'],
    ['**FIELDS','metersin','Meter SIN','','','','Yes','Yes'],
    ['CONTRACTS','C_CC','Contracted Capacity','MW','RR_MW','','Yes','Yes'],
    ['CONTRACTS','C_MEOT','Minimum Offtake Energy','kWh','RR_KWH','','Yes','Yes'],
    ['CONTRACTS','C_CRF','Capital Recovery Fee','Php/kW','RR_KWH','','Yes','Yes'],
    ['CONTRACTS','C_FOM','Fixed O&M Fee','Php/kW','RR_PKW','','Yes','Yes'],
    ['CONTRACTS','C_VOM','Variable O&M Fee','Php/kWh','RR_PKWH','','Yes','Yes'],
    ['CONTRACTS','C_ER194','ER-194 Fee','Php/kWh','RR_PKWH','','Yes','Yes'],
    ['CONTRACTS','C_VC','Variable Charge','Php/kWh','RR_PKWH','','Yes','Yes'],
    ['CONTRACTS','C_ADMIN','Admin Charge','Php/kWh','RR_PKWH','','Yes','Yes'],
    ['CONTRACTS','C_NCRCPIB','Base NCR CPI','','RR_INDEX','','Yes','Yes'],
    ['CONTRACTS','C_FOREXB','Base FOREX','','RR_INDEX','','Yes','Yes'],
    ['**CHARGES','CRF','Capital Recovery Fee','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','FOM','Fixed O&M Fee','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','VOM','Variable  O&M Fee','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','ER194','ER-194','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','FUEL','Fuel Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','VC','Variable Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','ADMIN','ADMIN Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSATRANS','Transmission Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSASYSLOSS','System Loss Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSADEMAND','Demand Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAENERGY','Energy Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAMETERING','Metering Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSASUPPLY','Supply Charge','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAPFADJ','Power Factor Adjustment','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSACURPT','Current RPT','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSALOCFRTAX','Local Franchise Tax','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSALIFELINE','Lifeline Rate Subsidy','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSASENIORDC','Senior Subsidy/Discount','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSATRAC','TRAC','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAMISSIO','Missionary','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAENVIR','Environmental Fund','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSANPCSCC','NPC Stranded Contract Costs','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSANPCDEBT','NPC Stranded Debts','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSADUSCC','DU Stranded Contract Costs','Php','RR_AMOUNT','','Yes','Yes'],
    ['**CHARGES','DWSAEQTAXROY','Equalization of Taxes and Royalties','Php','RR_AMOUNT','','Yes','Yes'],
    ['**FUNCTIONS','FX_IX', 'Index','','RR_INDEX','','Yes','Yes'],
    ['**FUNCTIONS','FX_ENBILLED', 'Billed Energy','kWh','RR_KWH','','Yes','Yes'],
    ['**FUNCTIONS','FX_FUELR', 'Fuel Rate','Php/kWh','RR_PKWH','','Yes','Yes'],
    ['**TEXT','TXT_IDX','Indices','','','','Yes','Yes'],
    ['**TEXT','TXT_PLNT','Plant Data','','','','Yes','Yes'],
    ['**TEXT','TXT_QTY','Quantities','','','','Yes','Yes'],
    ['**TEXT','TXT_RATES','Rates','','','','Yes','Yes'],
    ['**TEXT','TXT_FXC','Fixed Charge','','','','Yes','Yes'],
    ['**TEXT','TXT_VARC','Variable Charge','','','','Yes','Yes'],
    ['**TEXT','TXT_GENC','Generation Charge','','','','Yes','Yes'],
    ['**TEXT','TXT_DWSA','DWSA','','','','Yes','Yes'],    
    ['DWSA','DWSA_TRANS_B','Transmission Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SYSLOSS_B','System Loss Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DEMAND_B','Demand Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENERGY_B','Energy Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_METERING_B','Metering Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SUPPLY_B','Supply Charge Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_PFADJ_B','Power Factor Adjustment Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_CURPT_B','Current RPT Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LOCFRTAX_B','Local Franchise Tax Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LIFELINE_B','Lifeline Rate Subsidy Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SENIORDC_B','Senior Subsidy/Discount Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRAC_B','TRAC Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_MISSIO_B','Missionary Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENVIR_B','Environmental Fund Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCSCC_B','NPC Stranded Contract Costs Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCDEBT_B','NPC Stranded Debts Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DUSCC_B','DU Stranded Contract Costs Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_EQTAXROY_B','Equalization of Taxes and Royalties Base','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRANS_R','Transmission Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SYSLOSS_R','System Loss Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DEMAND_R','Demand Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENERGY_R','Energy Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_METERING_R','Metering Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SUPPLY_R','Supply Charge Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_PFADJ_R','Power Factor Adjustment Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_CURPT_R','Current RPT Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LOCFRTAX_R','Local Franchise Tax Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LIFELINE_R','Lifeline Rate Subsidy Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SENIORDC_R','Senior Subsidy/Discount Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRAC_R','TRAC Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_MISSIO_R','Missionary Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENVIR_R','Environmental Fund Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCSCC_R','NPC Stranded Contract Costs Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCDEBT_R','NPC Stranded Debts Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DUSCC_R','DU Stranded Contract Costs Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_EQTAXROY_R','Equalization of Taxes and Royalties Rate','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRANS_A','Transmission Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SYSLOSS_A','System Loss Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DEMAND_A','Demand Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENERGY_A','Energy Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_METERING_A','Metering Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SUPPLY_A','Supply Charge Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_PFADJ_A','Power Factor Adjustment Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_CURPT_A','Current RPT Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LOCFRTAX_A','Local Franchise Tax Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LIFELINE_A','Lifeline Rate Subsidy Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SENIORDC_A','Senior Subsidy/Discount Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRAC_A','TRAC Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_MISSIO_A','Missionary Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENVIR_A','Environmental Fund Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCSCC_A','NPC Stranded Contract Costs Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCDEBT_A','NPC Stranded Debts Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DUSCC_A','DU Stranded Contract Costs Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_EQTAXROY_A','Equalization of Taxes and Royalties Amount','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRANS_V','Transmission Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SYSLOSS_V','System Loss Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DEMAND_V','Demand Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENERGY_V','Energy Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_METERING_V','Metering Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SUPPLY_V','Supply Charge VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_PFADJ_V','Power Factor Adjustment VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_CURPT_V','Current RPT VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LOCFRTAX_V','Local Franchise Tax VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_LIFELINE_V','Lifeline Rate Subsidy VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_SENIORDC_V','Senior Subsidy/Discount VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_TRAC_V','TRAC VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_MISSIO_V','Missionary VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_ENVIR_V','Environmental Fund VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCSCC_V','NPC Stranded Contract Costs VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_NPCDEBT_V','NPC Stranded Debts VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_DUSCC_V','DU Stranded Contract Costs VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['DWSA','DWSA_EQTAXROY_V','Equalization of Taxes and Royalties VAT','Php','RR_AMOUNT','','Yes','Yes'],
    ['PLANTMD','PL_GEN','Plant Generation','kWh','RR_KWH','','Yes','Yes'],
    ['PLANTMD','PL_COALMT','Coal Consumption','kWh','RR_MT','','Yes','Yes'],
    ['PLANTMD','PL_DCP','Delivered Coal Price','Php/MT','RR_PMT','','Yes','Yes'],
    ['STLBID','STL_BCQPRE','Settlement BCQ Prelim','','RR_KWH','','Yes','Yes'],
    ['STLBID','STL_BCQFNL','Settlement BCQ Final','','RR_KWH','','Yes','Yes'],
    ['STLSEIN','STL_MQPRE','Settlement BCQ Prelim','','RR_KWH','','Yes','Yes'],
    ['STLSEIN','STL_MQFNL','Settlement BCQ Final','','RR_KWH','','Yes','Yes'],
]

function dataVariablesFilter(tables = [],include=true) {
    var arr = [];    
    $.each(dataVariables, function(index, row) {
        var check =tables.includes(row[0])
        if (!include) check=!check;
        if (check||tables.length === 0) {
            arr.push([row[1]]);
        }
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
    ['PSA-GENCO1-DU01-001','plant','1','0','GEN01','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','wesmselbid','1','0','GEN01','','','NEW','No',''],
    ['PSA-GENCO1-DU01-001','wesmbuybid','1','0','DU01','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','plant','1','0','GEN01','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','wesmselbid','1','0','GEN01','','','APPROVED','Yes',''],
    ['PSA-GENCO1-RES01-001','wesmbuybid','1','0','CC01','','','APPROVED','Yes',''],
    ['PSA-RESO1-CC01-001','plant','1','0','GEN01','','','NEW','No',''],
    ['RSC-RESO1-CC01-001','metersin','1','0','200291340102','','','APPROVED','Yes',''],
]



var dataContractTemplates =[
    ['PSA-GENCO1-DU01-001','1','0','PSADU_V01.00','','','NEW','No',''],
    ['PSA-GENCO1-RES01-001','1','0','PSARES_V01.00','','','APPROVED','Yes',''],
    ['RSC-RESO1-CC01-001','1','0','RSC_V01.00','','','APPROVED','Yes',''],
]

var dataTemplates =[
    ['PSADU_V01.00','PSA Template for DU Version 1.0','ACTIVE'],
    ['PSARES_V01.00','PSA Template for RES Version 1.0','ACTIVE'],
    ['RSC_V01.00','RSC Template Version 1.0','ACTIVE'],
]



var dataTemplateVariables =[
    ['PSADU_V01.00',1,'---Indices---','','Print'],
    ['PSADU_V01.00',2,'[IX_FOREX] FOREX, Usd/Php','','Print'],
    ['PSADU_V01.00',3,'[C_FOREXB] Base FOREX, Usd/Php','','Print'],
    ['PSADU_V01.00',4,'[IX_NCRCPI] NCR CPI','','Print'],
    ['PSADU_V01.00',5,'[C_NCRCPIB] Base NCR CPI,','','Print'],
    ['PSADU_V01.00',6,'[V_IX] Index,','ROUND([IX_NCRCPI]/[C_NCRCPIB]*[IX_FOREX]/[C_FOREXB],6)','Print'],
    ['PSADU_V01.00',7,'---Plant Data---','','Print'],
    ['PSADU_V01.00',8,'[PL_GEN] Plant Generation, kWh','','Print'],
    ['PSADU_V01.00',9,'[PL_COALMT] Coal Consumption, MT','','Print'],
    ['PSADU_V01.00',10,'[PL_DCP] Delivered Coal Price, Php/MT','','Print'],
    ['PSADU_V01.00',11,'---Quantities---','',''],
    ['PSADU_V01.00',12,'[C_CC] Contracted Capacity, MW','','Print'],
    ['PSADU_V01.00',13,'[STL_BCQ] Settlement Data BCQ, kWh','','Save'],
    ['PSADU_V01.00',14,'[V_EN] Energy Delivered, kWh','SUM([STL_BCQ])','Print'],
    ['PSADU_V01.00',15,'---Rates---','',''],
    ['PSADU_V01.00',16,'[C_CRF] Capital Recovery Fee, Php/kWh','','Print'],
    ['PSADU_V01.00',17,'[C_FOM] Fixed O&M Fee, Php/MW','','Print'],
    ['PSADU_V01.00',18,'[C_VOM] Variable O&M Fee, Php/kWh','','Print'],
    ['PSADU_V01.00',19,'[C_ER194] ER-194, Php/kWh','','Print'],
    ['PSADU_V01.00',20,'[V_FUELR] Fuel Rate, Php/kWh','[PL_DCP]*[PL_COALMT]/[PL_GEN]','Print'],
    ['PSARES_V01.00',1,'---Plant Data---','','Print'],
    ['PSARES_V01.00',2,'[PL_GEN] Plant Generation, kWh','','Print'],
    ['PSARES_V01.00',3,'[PL_COALMT] Coal Consumption, MT','','Print'],
    ['PSARES_V01.00',4,'[PL_DCP] Delivered Coal Price, Php/MT','','Print'],
    ['PSARES_V01.00',5,'---Quantities---','',''],
    ['PSARES_V01.00',6,'[STL_BCQ] Settlement Data BCQ, kWh','','Save'],
    ['PSARES_V01.00',7,'[V_EN] Energy Delivered, kWh','SUM([STL_BCQ])','Print'],
    ['PSARES_V01.00',8,'---Rates---','',''],
    ['PSARES_V01.00',9,'[C_VC] Variable Charge, Php/kWh','','Print'],
    ['PSARES_V01.00',10,'[C_ADMIN] Admin Charge, Php/kWh','','Print'],
    ['PSARES_V01.00',11,'[C_ER194] ER-194, Php/kWh','','Print'],
    ['PSARES_V01.00',12,'[V_FUELR] Fuel Rate, Php/kWh','[PL_DCP]*[PL_COALMT]/[PL_GEN]','Print'],
]

var dataTemplateCharges = [
    ['PSADU_V01.00',1,'---Fixed Charge---','','','',''],
    ['PSADU_V01.00',2,'[CRF]Capital Recovery Fee, PHP','[C_CC]*1000','[C_CRF]*[V_IX]','ROUND([A]*[B],2)','[C]*[VAT]'],
    ['PSADU_V01.00',3,'[FOM]Fixed O&M Fee, PHP','[C_CC]*1000','[C_CRF]','ROUND([A]*[B],2)','[C]*[VAT]'],
    ['PSADU_V01.00',4,'---Generation Charge---','','','',''],
    ['PSADU_V01.00',5,'[FUEL] Fuel Charge, Php','[V_EN]','[V_FUELR]','ROUND([A]*[B],2)	','[C]*[VAT]'],
    ['PSADU_V01.00',6,'[VOM] Variable O&M Fee, PHP','[V_EN]','[C_VOM]-[C_ER194]','ROUND([A]*[B],2)','[C]*[VAT]'],
    ['PSADU_V01.00',7,'[ER194] ER-194, PHP','[V_EN]','[C_ER194]','ROUND([A]*[B],2)','0'],
]


var dataFinanceAccount = [
    ['CRFEV','CRF Expense Vatable','','Yes'],
    ['CRFRV','CRF Revenue Vatable','','Yes'],
    ['ER194ENV','ER-194 Expense Non-Vatable','','Yes'],
    ['ER194RNV','ER-194 Revenue Non-Vatable','','Yes'],
    ['FOMEV','Fixed O&M Expense Vatable','','Yes'],
    ['FOMRV','Fixed O&M Revenue Vatable','','Yes'],
    ['FUELEV','Fuel Expense Vatable','','Yes'],
    ['FUELRV','Fuel Revenue Vatable','','Yes'],
    ['RESSUPEV','RES Supply Expense Vatable','','Yes'],
    ['RESSUPRV','RES Supply Revenue Vatable','','Yes'],
    ['RESVATEV','RES VAT Expense Vatable','','Yes'],
    ['RESVATRV','RES VAT Revenue Vatable','','Yes'],
    ['GENVATEV','Gen VAT Expense Vatable','','Yes'],
    ['GENVATRV','Gen VAT Revenue Vatable','','Yes'],
    ['VOMEV','Variable O&M Expense Vatable','','Yes'],
    ['VOMRV','Variable O&M Revenue Vatable','','Yes'],
]


var dataFinanceAccountLink =[
    ['GEN01','SELLER','CRF[BASE]','CRFRV','CRFEV'],
    ['GEN01','SELLER','FOM[BASE]','FOMRV','FOMEV'],
    ['GEN01','SELLER','VOM[BASE]','VOMRV','VOMEV'],
    ['GEN01','SELLER','ER194[BASE]','ER194RNV','ER194ENV'],
    ['GEN01','SELLER','FUEL[BASE]','FUELRV','FUELEV'],
    ['GEN01','SELLER','CRF[VAT]|FOM[VAT]|VOM[VAT]|ER194[VAT]|FUEL[VAT]','GENVATRV','GENVATEV'],
    ['RES01','BUYER','CRF[VAT]|FOM[VAT]|VOM[VAT]|ER194[VAT]|FUEL[VAT]','RESVATEV','RESVATRV'],
    ['RES01','BUYER','CRF[BASE]|FOM[BASE]|VOM[BASE]|ER194[BASE]|FUEL[BASE]','RESVATEV','RESVATRV'],
]