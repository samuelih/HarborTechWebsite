"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { X, ShoppingCart, Clock, DollarSign, ChevronUp, ChevronDown, Calculator, TrendingUp, Info, Calendar, Download } from 'lucide-react';
import { useQuote } from '../../lib/hooks/useQuote';

// TypeScript types for ROI Calculator
interface RoiInputs {
  avgHourlyCost: number;
  monthlyRevenue: number;
  convLiftPct: number;
  basketLiftPct: number;
  grossMarginPct: number;
}

interface RoiOutputs {
  laborSavings: number;
  revenueLift: number;
  totalBenefit: number;
  annualCost: number;
  roiPct: number;
  paybackMonths: number;
}

interface ValidationError {
  field: string;
  message: string;
}

interface ScenarioData {
  name: string;
  laborSavings: number;
  revenueLift: number;
  totalBenefit: number;
  roiPct: number;
}

// Field constraints for validation
const FIELD_CONSTRAINTS = {
  avgHourlyCost: { min: 14, max: 40, default: 18 },
  monthlyRevenue: { min: 5000, max: 200000, default: 25000 },
  convLiftPct: { min: 0, max: 10, default: 2 },
  basketLiftPct: { min: 0, max: 20, default: 4 },
  grossMarginPct: { min: 20, max: 80, default: 45 }
};

export default function QuotePanel() {
  const { items, removeFromQuote, clearQuote, totalCost, totalTimeSaved } = useQuote();
  const [isMinimized, setIsMinimized] = useState(false);
  const [showROI, setShowROI] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const calculationTimeoutRef = useRef<NodeJS.Timeout>();

  // ROI Calculator state with defaults
  const [roiInputs, setRoiInputs] = useState<RoiInputs>({
    avgHourlyCost: FIELD_CONSTRAINTS.avgHourlyCost.default,
    monthlyRevenue: FIELD_CONSTRAINTS.monthlyRevenue.default,
    convLiftPct: FIELD_CONSTRAINTS.convLiftPct.default,
    basketLiftPct: FIELD_CONSTRAINTS.basketLiftPct.default,
    grossMarginPct: FIELD_CONSTRAINTS.grossMarginPct.default
  });

  const [roiOutputs, setRoiOutputs] = useState<RoiOutputs>({
    laborSavings: 0,
    revenueLift: 0,
    totalBenefit: 0,
    annualCost: 0,
    roiPct: 0,
    paybackMonths: 0
  });

  // Validation function
  const validateInputs = (inputs: RoiInputs): ValidationError[] => {
    const errors: ValidationError[] = [];
    
    Object.entries(inputs).forEach(([field, value]) => {
      const constraints = FIELD_CONSTRAINTS[field as keyof typeof FIELD_CONSTRAINTS];
      if (value < constraints.min || value > constraints.max) {
        errors.push({
          field,
          message: `Must be between ${constraints.min.toLocaleString()} and ${constraints.max.toLocaleString()}`
        });
      }
    });
    
    return errors;
  };

  // ROI Calculation utility
  const calculateROI = useCallback((inputs: RoiInputs, hoursPerMonth: number, pricePerMonth: number): RoiOutputs => {
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
  }, []);

  // Debounced calculation effect
  useEffect(() => {
    if (calculationTimeoutRef.current) {
      clearTimeout(calculationTimeoutRef.current);
    }

    calculationTimeoutRef.current = setTimeout(() => {
      const errors = validateInputs(roiInputs);
      setValidationErrors(errors);
      
      if (errors.length === 0) {
        const newOutputs = calculateROI(roiInputs, totalTimeSaved, totalCost);
        setRoiOutputs(newOutputs);
      }
    }, 300);

    return () => {
      if (calculationTimeoutRef.current) {
        clearTimeout(calculationTimeoutRef.current);
      }
    };
  }, [roiInputs, totalTimeSaved, totalCost, calculateROI]);

  // Scenario calculations
  const scenarioData = useMemo((): ScenarioData[] => {
    if (validationErrors.length > 0) return [];

    const scenarios = [
      {
        name: 'Low',
        convAdjustment: -1,
        basketAdjustment: -2
      },
      {
        name: 'Likely',
        convAdjustment: 0,
        basketAdjustment: 0
      },
      {
        name: 'High',
        convAdjustment: 2,
        basketAdjustment: 4
      }
    ];

    return scenarios.map(scenario => {
      const adjustedInputs = {
        ...roiInputs,
        convLiftPct: Math.max(0, roiInputs.convLiftPct + scenario.convAdjustment),
        basketLiftPct: Math.max(0, roiInputs.basketLiftPct + scenario.basketAdjustment)
      };
      
      const outputs = calculateROI(adjustedInputs, totalTimeSaved, totalCost);
      
      return {
        name: scenario.name,
        laborSavings: outputs.laborSavings,
        revenueLift: outputs.revenueLift,
        totalBenefit: outputs.totalBenefit,
        roiPct: outputs.roiPct
      };
    });
  }, [roiInputs, totalTimeSaved, totalCost, calculateROI, validationErrors.length]);

  // Calculate panel positioning
  useEffect(() => {
    const adjustPosition = () => {
      if (!panelRef.current) return;

      requestAnimationFrame(() => {
        if (!panelRef.current) return;
        
        const panel = panelRef.current;
        const panelHeight = panel.offsetHeight;
        const viewportHeight = window.innerHeight;
        const maxAllowedHeight = viewportHeight - 32;
        
        if (panelHeight > maxAllowedHeight) {
          const newBottomOffset = Math.max(16, viewportHeight - panelHeight - 16);
          setBottomOffset(newBottomOffset);
        } else {
          setBottomOffset(16);
        }
      });
    };

    const timeoutId = setTimeout(adjustPosition, 50);
    const handleResize = () => {
      clearTimeout(timeoutId);
      setTimeout(adjustPosition, 50);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [items.length, isMinimized, showROI]);

  if (items.length === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatTimeSaved = (hours: number) => {
    if (hours === 1) return '1 hour';
    return `${hours} hours`;
  };

  const updateROIInput = (field: keyof RoiInputs, value: number) => {
    setRoiInputs(prev => ({ ...prev, [field]: value }));
  };

  const getFieldError = (field: string) => {
    return validationErrors.find(error => error.field === field);
  };

  const maxScenarioValue = Math.max(...scenarioData.map(s => s.totalBenefit));

  return (
    <div 
      ref={panelRef}
      className={`fixed z-50 transition-all duration-300 ease-out max-h-[calc(100vh-2rem)] ${
        // Mobile: full width at bottom, Desktop: fixed width on right
        'bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto sm:w-[420px] sm:max-w-[calc(100vw-2rem)]'
      }`}
    >
      <div className="bg-white sm:rounded-lg shadow-2xl border border-neutral-gull/20 overflow-hidden max-h-full flex flex-col">
        {/* Header */}
        <div className="bg-primary-blue text-white p-3 sm:p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-semibold text-sm sm:text-base">Your Quote</h3>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {items.length}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label={isMinimized ? "Expand quote panel" : "Minimize quote panel"}
              >
                {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <button
                onClick={clearQuote}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close quote panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable content */}
        <div 
          className={`transition-all duration-300 ${
            isMinimized ? 'max-h-0 opacity-0' : 'max-h-[80vh] sm:max-h-[calc(100vh-8rem)] opacity-100'
          } overflow-hidden flex flex-col`}
        >
          {/* Quote items */}
          <div className="overflow-y-auto flex-grow p-3 sm:p-4 space-y-3 max-h-[40vh] sm:max-h-none">
            {items.map((item) => (
              <div key={item.solution.id} className="flex items-start justify-between bg-neutral-mist/50 p-3 rounded-lg">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-neutral-800 truncate">{item.solution.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-neutral-600 mt-1">
                    <span className="flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {formatPrice(item.solution.price)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatTimeSaved(item.solution.timeSavedPerMonth)}/mo
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromQuote(item.solution.id)}
                  className="ml-2 p-1 text-neutral-400 hover:text-red-500 transition-colors flex-shrink-0"
                  aria-label={`Remove ${item.solution.name} from quote`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border-t border-neutral-gull/10 bg-neutral-mist/30 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg sm:text-xl font-bold text-primary-navy">{formatPrice(totalCost)}</div>
                <div className="text-xs text-neutral-600">Total Cost</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-primary-blue">{formatTimeSaved(totalTimeSaved)}</div>
                <div className="text-xs text-neutral-600">Time Saved/Month</div>
              </div>
            </div>
          </div>

          {/* ROI Calculator Toggle */}
          <div className="border-t border-neutral-gull/10">
            <button
              onClick={() => setShowROI(!showROI)}
              className="w-full flex items-center justify-center space-x-2 text-primary-blue hover:text-primary-blue/80 text-sm font-medium py-3 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>{showROI ? 'Hide' : 'Show'} ROI Calculator</span>
              {showROI ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* ROI Calculator - Optimized for mobile */}
          <div 
            className={`transition-all duration-300 ease-out ${
              showROI ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden border-t border-neutral-gull/10`}
          >
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-800">ROI Analysis</h4>
                </div>
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onTouchStart={() => setShowTooltip(!showTooltip)}
                    className="p-1 text-neutral-500 hover:text-neutral-700 transition-colors touch-manipulation"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-6 bg-neutral-800 text-white text-xs p-2 rounded-md w-64 sm:w-auto max-w-[calc(100vw-2rem)] z-10">
                      <p className="mb-1"><strong>Labor Savings:</strong> hoursSaved × hourlyCost × 12</p>
                      <p className="mb-1"><strong>Revenue Lift:</strong> monthlyRevenue × (convLift + basketLift) × grossMargin × 12</p>
                      <p><strong>ROI:</strong> (totalBenefit - annualCost) / annualCost × 100</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ROI Inputs - Mobile optimized */}
              <div className="bg-neutral-mist/30 rounded-lg p-3 mb-4">
                <h5 className="font-medium text-xs text-neutral-700 mb-3">Business Inputs</h5>
                <div className="space-y-3">
                  {/* Row 1: Hourly Cost and Monthly Revenue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1">
                        Avg Hourly Cost ($)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.avgHourlyCost}
                        onChange={(e) => updateROIInput('avgHourlyCost', Number(e.target.value))}
                        className={`w-full px-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary-blue touch-manipulation ${
                          getFieldError('avgHourlyCost') ? 'border-red-500 bg-red-50' : 'border-neutral-gull/30'
                        }`}
                        min={FIELD_CONSTRAINTS.avgHourlyCost.min}
                        max={FIELD_CONSTRAINTS.avgHourlyCost.max}
                      />
                      {getFieldError('avgHourlyCost') && (
                        <p className="text-xs text-red-600 mt-1">{getFieldError('avgHourlyCost')?.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-600 mb-1">
                        Monthly Revenue ($)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlyRevenue}
                        onChange={(e) => updateROIInput('monthlyRevenue', Number(e.target.value))}
                        className={`w-full px-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary-blue touch-manipulation ${
                          getFieldError('monthlyRevenue') ? 'border-red-500 bg-red-50' : 'border-neutral-gull/30'
                        }`}
                        min={FIELD_CONSTRAINTS.monthlyRevenue.min}
                        max={FIELD_CONSTRAINTS.monthlyRevenue.max}
                      />
                      {getFieldError('monthlyRevenue') && (
                        <p className="text-xs text-red-600 mt-1">{getFieldError('monthlyRevenue')?.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Advanced options toggle */}
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="w-full text-xs text-primary-blue hover:text-primary-blue/80 transition-colors flex items-center justify-center py-2"
                  >
                    {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                    {showAdvanced ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                  </button>

                  {/* Advanced options */}
                  {showAdvanced && (
                    <div className="space-y-3 pt-2 border-t border-neutral-gull/20">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">
                            Conv. Lift (%)
                          </label>
                          <input
                            type="number"
                            value={roiInputs.convLiftPct}
                            onChange={(e) => updateROIInput('convLiftPct', Number(e.target.value))}
                            className={`w-full px-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary-blue touch-manipulation ${
                              getFieldError('convLiftPct') ? 'border-red-500 bg-red-50' : 'border-neutral-gull/30'
                            }`}
                            min={FIELD_CONSTRAINTS.convLiftPct.min}
                            max={FIELD_CONSTRAINTS.convLiftPct.max}
                            step="0.1"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">
                            Basket Lift (%)
                          </label>
                          <input
                            type="number"
                            value={roiInputs.basketLiftPct}
                            onChange={(e) => updateROIInput('basketLiftPct', Number(e.target.value))}
                            className={`w-full px-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary-blue touch-manipulation ${
                              getFieldError('basketLiftPct') ? 'border-red-500 bg-red-50' : 'border-neutral-gull/30'
                            }`}
                            min={FIELD_CONSTRAINTS.basketLiftPct.min}
                            max={FIELD_CONSTRAINTS.basketLiftPct.max}
                            step="0.1"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-600 mb-1">
                            Gross Margin (%)
                          </label>
                          <input
                            type="number"
                            value={roiInputs.grossMarginPct}
                            onChange={(e) => updateROIInput('grossMarginPct', Number(e.target.value))}
                            className={`w-full px-2 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary-blue touch-manipulation ${
                              getFieldError('grossMarginPct') ? 'border-red-500 bg-red-50' : 'border-neutral-gull/30'
                            }`}
                            min={FIELD_CONSTRAINTS.grossMarginPct.min}
                            max={FIELD_CONSTRAINTS.grossMarginPct.max}
                            step="1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ROI Results - Mobile optimized */}
              {validationErrors.length === 0 && (
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <h5 className="font-medium text-xs text-green-800 mb-3">Annual ROI Projections</h5>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-700">{formatPrice(roiOutputs.laborSavings)}</div>
                      <div className="text-green-600">Labor Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-700">{formatPrice(roiOutputs.revenueLift)}</div>
                      <div className="text-green-600">Revenue Lift</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-green-800">{roiOutputs.roiPct.toFixed(0)}%</div>
                      <div className="text-green-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-orange-600">
                        {roiOutputs.paybackMonths > 0 ? `${roiOutputs.paybackMonths.toFixed(1)}mo` : 'N/A'}
                      </div>
                      <div className="text-green-600">Payback</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Validation Errors */}
              {validationErrors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <h5 className="font-medium text-xs text-red-800 mb-2">Please Fix:</h5>
                  <ul className="text-xs text-red-700 space-y-1">
                    {validationErrors.map((error, index) => (
                      <li key={index}>• {error.message}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-neutral-500 text-center italic">
                Estimates only; actual results vary.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-3 sm:p-4 bg-neutral-mist/30 border-t border-neutral-gull/10 flex-shrink-0">
            <div className="space-y-2">
              <button className="w-full btn-accent text-sm py-3 font-semibold flex items-center justify-center space-x-2 touch-manipulation">
                <Calendar className="w-4 h-4" />
                <span>Book a 15-min ROI consult</span>
              </button>
              <div className="flex space-x-2">
                <button 
                  disabled
                  className="flex-1 flex items-center justify-center space-x-2 text-neutral-400 text-sm py-2 border border-neutral-300 rounded transition-colors cursor-not-allowed touch-manipulation"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button 
                  onClick={clearQuote}
                  className="flex-1 text-neutral-600 hover:text-neutral-800 text-sm py-2 transition-colors touch-manipulation"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 