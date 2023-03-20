// Define constants for tax rates, NHIF and NSSF rates
const TAX_RATES = {
    range1: { rate: 0.1, threshold: 12298 },
    range2: { rate: 0.15, threshold: 23885 },
    range3: { rate: 0.2, threshold: 35472 },
    range4: { rate: 0.25, threshold: 47059 },
    range5: { rate: 0.3, threshold: 59145 },
    range6: { rate: 0.35, threshold: 70832 },
    range7: { rate: 0.4, threshold: 82519 }
  };
  
  const NHIF_RATES = {
    range1: { rate: 150, threshold: 6000 },
    range2: { rate: 300, threshold: 12000 },
    range3: { rate: 400, threshold: 18000 },
    range4: { rate: 500, threshold: 24000 },
    range5: { rate: 600, threshold: 30000 },
    range6: { rate: 750, threshold: 35000 },
    range7: { rate: 850, threshold: 40000 },
    range8: { rate: 900, threshold: 45000 },
    range9: { rate: 950, threshold: 50000 },
    range10: { rate: 1000, threshold: 55000 },
    range11: { rate: 1100, threshold: 60000 }
  };
  
  const NSSF_RATES = {
    employer: { rate: 0.06, max: 6000 },
    employee: { rate: 0.06, max: 6000 }
  };
  
  // Get user inputs for basic salary and benefits
  const basicSalary = parseFloat(prompt("Enter your basic salary: "));
  const benefits = parseFloat(prompt("Enter your benefits: "));
  
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;
  
  // Calculate tax deductions
  let payee = 0;
  for (const range in TAX_RATES) {
    if (grossSalary > TAX_RATES[range].threshold) {
      payee += (grossSalary - TAX_RATES[range].threshold) * TAX_RATES[range].rate;
      grossSalary = TAX_RATES[range].threshold;
    }
  }
  
  // Calculate NHIF deductions
  let nhifDeductions = 0;
  for (const range in NHIF_RATES) {
    if (grossSalary <= NHIF_RATES[range].threshold) {
      nhifDeductions = NHIF_RATES[range].rate;
      break;
    }
  }
  
  // Calculate NSSF deductions
  const nssfDeductions = Math.min(grossSalary * NSSF_RATES.employee.rate, NSSF_RATES.employee.max);
  
  // Calculate net salary
  const netSalary = basicSalary + benefits - payee - nhifDeductions - nssfDeductions;
  
  // Display the results
  console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
  console.log(`Payee (Tax) Deductions: ${payee.toFixed(2)}`);
  console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)}`);
  console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)}`);
  console.log(`Net Salary: ${netSalary.toFixed(2
  )}`)