const express = require('express');
const router = express.Router();
const { 
    getBudgetCount, 
    getUpvibhagCounts, 
    getUniqueYears, 
    getUniqueHeadNames, 
    getBudgetSummaryByYear, 
    getBudgetDetailsByYearAndHead ,
    BudgetMaster2515,
    BudgetMasterNABARD,
    BudgetMasterMP,
    BudgetMasterMLA,
    BudgetMasterGAT_FBC,
    BudgetMasterGAT_D,
    BudgetMasterGAT_A,
    BudgetMasterDPDC,
    BudgetMasterDepositFund,
    BudgetMasterCRF,
    BudgetMasterBuilding,
    BudgetMasterAunty,
    Cont2515,
    ContAnnuity,
    ContBuilding,
    ContNABARD,
    ContSHDOR,
    ContCRF,
    ContMLA,
    ContMP,
    ContDPDC,
    ContGAT_A,
    ContGAT_FBC,
    ContDepositFund,
    ContGAT_D,
    ContResidentialBuilding2216,
    ContNonResidentialBuilding2909
} = require('../controllers/budgetController');

// Route to get budget count
router.post('/count', getBudgetCount);

// Route to get Upvibhag counts from all budget tables
router.post('/upvibhag-counts', getUpvibhagCounts);

// Route to get unique years from provision tables
router.post('/unique-years', getUniqueYears); // Requires office

// Route to get unique head names from master tables
router.post('/unique-head-names', getUniqueHeadNames); // Requires office

// Route to get budget summary by year
router.post('/summary-by-year', getBudgetSummaryByYear); // Requires office, year

// Route to get budget details by year and head name
router.post('/details-by-year-head', getBudgetDetailsByYearAndHead); // Requires office, year, headName

router.post('/BudgetMaster2515', BudgetMaster2515); // Requires office, year, headName
router.post('/BudgetMasterNABARD', BudgetMasterNABARD); // Requires office, year, headName
router.post('/BudgetMasterMP', BudgetMasterMP); // Requires office, year, headName
router.post('/BudgetMasterMLA', BudgetMasterMLA); // Requires office, year, headName
router.post('/BudgetMasterGAT_FBC', BudgetMasterGAT_FBC); // Requires office, year, headName
router.post('/BudgetMasterGAT_D', BudgetMasterGAT_D); // Requires office, year, headName
router.post('/BudgetMasterGAT_A', BudgetMasterGAT_A); // Requires office, year, headName
router.post('/BudgetMasterDPDC', BudgetMasterDPDC); // Requires office, year, headName
router.post('/BudgetMasterDepositFund', BudgetMasterDepositFund); // Requires office, year, headName
router.post('/BudgetMasterCRF', BudgetMasterCRF); // Requires office, year, headName
router.post('/BudgetMasterBuilding', BudgetMasterBuilding); // Requires office, year, headName
router.post('/BudgetMasterAunty', BudgetMasterAunty); // Requires office, year, headName


router.post('/Cont2515', Cont2515);
router.post('/ContAnnuity', ContAnnuity);
router.post('/ContBuilding', ContBuilding);
router.post('/ContNABARD', ContNABARD);
router.post('/ContSHDOR', ContSHDOR);
router.post('/ContCRF', ContCRF);
router.post('/ContMLA', ContMLA);
router.post('/ContMP', ContMP);
router.post('/ContDPDC', ContDPDC);
router.post('/ContGAT_A', ContGAT_A);
router.post('/ContGAT_FBC', ContGAT_FBC);
router.post('/ContDepositFund', ContDepositFund);
router.post('/ContGAT_D', ContGAT_D);
router.post('/ContResidentialBuilding2216', ContResidentialBuilding2216);
router.post('/ContNonResidentialBuilding2909', ContNonResidentialBuilding2909);

module.exports = router; 