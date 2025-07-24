// ROI Calculator Utility for Harbor Tech Website
export interface RoiInputs {
  avgHourlyCost: number;
  monthlyRevenue: number;
  convLiftPct: number;
  basketLiftPct: number;
  grossMarginPct: number;
}

export interface RoiOutputs {
  laborSavings: number;
  revenueLift: number;
  totalBenefit: number;
  annualCost: number;
  roiPct: number;
  paybackMonths: number;
}

// ROI Calculation utility function
export const calculateROI = (inputs: RoiInputs, hoursPerMonth: number, pricePerMonth: number): RoiOutputs => {
  const laborSavings = hoursPerMonth * inputs.avgHourlyCost * 12;
  const revenueLift = inputs.monthlyRevenue * (inputs.convLiftPct + inputs.basketLiftPct) / 100 * (inputs.grossMarginPct / 100) * 12;
  const totalBenefit = laborSavings + revenueLift;
  const annualCost = pricePerMonth * 12;
  const roiPct = annualCost > 0 ? ((totalBenefit - annualCost) / annualCost) * 100 : 0;
  const paybackMonths = totalBenefit > 0 ? (annualCost / totalBenefit) * 12 : 0;

  return {
    laborSavings,
    revenueLift,
    totalBenefit,
    annualCost,
    roiPct,
    paybackMonths
  };
};

// Verification function for acceptance criteria
export const verifyAcceptanceCriteria = () => {
  const defaultInputs: RoiInputs = {
    avgHourlyCost: 18,
    monthlyRevenue: 25000,
    convLiftPct: 2,
    basketLiftPct: 4,
    grossMarginPct: 45
  };

  // Assuming 12 hours saved per month and $149/month cost (from Chatbot Pro example)
  const hoursPerMonth = 12;
  const pricePerMonth = 149;
  
  const result = calculateROI(defaultInputs, hoursPerMonth, pricePerMonth);
  
  console.log('=== ROI Calculator Verification ===');
  console.log(`Labor Savings: $${result.laborSavings.toLocaleString()} (Expected: ~$2,592)`);
  console.log(`Revenue Lift: $${result.revenueLift.toLocaleString()} (Expected: ~$8,100)`);
  console.log(`Total Benefit: $${result.totalBenefit.toLocaleString()} (Expected: ~$10,692)`);
  console.log(`Annual Cost: $${result.annualCost.toLocaleString()} (Expected: $1,788)`);
  console.log(`ROI: ${result.roiPct.toFixed(1)}% (Expected: ~498%)`);
  console.log(`Payback: ${result.paybackMonths.toFixed(1)} months (Expected: <4 months)`);
  
  // Verify acceptance criteria
  const laborSavingsValid = Math.abs(result.laborSavings - 2592) < 10;
  const revenueLiftValid = Math.abs(result.revenueLift - 8100) < 100;
  const totalBenefitValid = Math.abs(result.totalBenefit - 10692) < 100;
  const roiValid = result.roiPct > 400 && result.roiPct < 600;
  const paybackValid = result.paybackMonths < 4;
  
  console.log('\n=== Acceptance Criteria Check ===');
  console.log(`✓ Labor Savings ≈ $2,592: ${laborSavingsValid ? 'PASS' : 'FAIL'}`);
  console.log(`✓ Revenue Lift ≈ $8,100: ${revenueLiftValid ? 'PASS' : 'FAIL'}`);
  console.log(`✓ Total Benefit ≈ $10,692: ${totalBenefitValid ? 'PASS' : 'FAIL'}`);
  console.log(`✓ ROI > 400%: ${roiValid ? 'PASS' : 'FAIL'}`);
  console.log(`✓ Payback < 4 months: ${paybackValid ? 'PASS' : 'FAIL'}`);
  
  return result;
};

export default calculateROI; 