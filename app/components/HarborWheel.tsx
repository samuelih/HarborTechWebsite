"use client";

import { useState, useRef, useEffect, useCallback } from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Let's Talk Shop",
    description: "Over coffee at Johan's or right on your sales floor…"
  },
  {
    id: 2,
    title: "Shop Walk-through",
    description: "We swing by in person and cover eight key areas—POS, inventory, customer data, and more…"
  },
  {
    id: 3,
    title: "Your Harbor Plan",
    description: "You get a clear one-pager: what we heard, the upgrades and workflows we recommend…"
  },
  {
    id: 4,
    title: "Install & Training",
    description: "We work around your hours—before open, after close, whenever. Keep your systems running while we train your crew and get your upgrade fully implemented."
  },
  {
    id: 5,
    title: "Payment",
    description: "Pay all at once or spread it over 24 months; either way, the number we quote is the number you pay. No surprise add-ons, ever."
  }
];

interface HarborWheelProps {
  isVisible?: boolean;
}

const HarborWheel: React.FC<HarborWheelProps> = ({ isVisible = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastRotation, setLastRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasJavaScript, setHasJavaScript] = useState(false);

  const wheelRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  // Enable JavaScript features after hydration
  useEffect(() => {
    setHasJavaScript(true);
  }, []);

  // Calculate angle for each step (72 degrees apart)
  const getStepAngle = (index: number) => (index * 72) - 90; // Start at top

  // Calculate the nearest step based on rotation
  const getNearestStep = (currentRotation: number) => {
    const normalizedRotation = ((currentRotation % 360) + 360) % 360;
    const stepAngle = 72;
    const nearestStepIndex = Math.round(normalizedRotation / stepAngle) % 5;
    return nearestStepIndex;
  };

  // Snap to nearest step
  const snapToStep = useCallback((targetStep: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Calculate the shortest rotation path
    const currentNormalized = ((rotation % 360) + 360) % 360;
    const targetAngle = targetStep * 72;
    
    // Calculate the difference in both directions
    let clockwiseDiff = (targetAngle - currentNormalized + 360) % 360;
    let counterClockwiseDiff = (currentNormalized - targetAngle + 360) % 360;
    
    // Choose the shorter path
    let targetRotation;
    if (clockwiseDiff <= counterClockwiseDiff) {
      targetRotation = rotation + clockwiseDiff;
    } else {
      targetRotation = rotation - counterClockwiseDiff;
    }
    
    setRotation(targetRotation);
    setActiveStep(targetStep);
    setLastRotation(targetRotation);

    // Reset animation flag after transition
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, rotation]);

  // Handle mouse/touch start
  const handlePointerStart = (e: React.PointerEvent) => {
    if (!hasJavaScript || isAnimating) return;
    
    setIsDragging(true);
    const rect = wheelRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setDragStart({ x: e.clientX - centerX, y: e.clientY - centerY });
    }
  };

  // Handle mouse/touch move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !hasJavaScript || isAnimating) return;

    const rect = wheelRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const currentX = e.clientX - centerX;
      const currentY = e.clientY - centerY;

      // Calculate angle difference
      const startAngle = Math.atan2(dragStart.y, dragStart.x);
      const currentAngle = Math.atan2(currentY, currentX);
      const angleDiff = (currentAngle - startAngle) * (180 / Math.PI);

      setRotation(lastRotation + angleDiff);
    }
  };

  // Handle mouse/touch end
  const handlePointerEnd = () => {
    if (!isDragging || !hasJavaScript) return;
    
    setIsDragging(false);
    const nearestStep = getNearestStep(rotation);
    snapToStep(nearestStep);
  };

  // Handle step click/tap
  const handleStepClick = (stepIndex: number) => {
    if (!hasJavaScript || isAnimating) return;
    snapToStep(stepIndex);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!hasJavaScript || isAnimating) return;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        snapToStep((activeStep - 1 + 5) % 5);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        snapToStep((activeStep + 1) % 5);
        break;
      case 'Home':
        e.preventDefault();
        snapToStep(0);
        break;
      case 'End':
        e.preventDefault();
        snapToStep(4);
        break;
    }
  };

  // Throttle pointer events to prevent jank
  const throttledPointerMove = useCallback(
    ((fn: (e: React.PointerEvent) => void) => {
      let lastCall = 0;
      return (e: React.PointerEvent) => {
        const now = Date.now();
        if (now - lastCall > 16) { // ~60fps
          lastCall = now;
          fn(e);
        }
      };
    })(handlePointerMove),
    [handlePointerMove]
  );

  // No-JavaScript fallback
  if (!hasJavaScript) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-lg p-6 shadow-lg border border-neutral-gull/30">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-navy rounded-full mr-4">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-navy">
                  {step.title}
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative">
        {/* Main wheel container */}
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {/* Wheel SVG */}
          <div
            ref={wheelRef}
            className={`absolute inset-0 cursor-grab ${isDragging ? 'cursor-grabbing' : ''} transition-transform duration-500 ease-out`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onPointerDown={handlePointerStart}
            onPointerMove={throttledPointerMove}
            onPointerUp={handlePointerEnd}
            onPointerLeave={handlePointerEnd}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="tablist"
            aria-label="Harbor workflow steps"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{ touchAction: 'none' }}
            >
              {/* Define gradients and effects */}
              <defs>
                <radialGradient id="buoyGradient" cx="0.3" cy="0.3">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f0f0f0" />
                </radialGradient>
                <radialGradient id="centerGradient" cx="0.3" cy="0.3">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f8f9fa" />
                </radialGradient>
                <filter id="buoyShadow">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2"/>
                </filter>
              </defs>

              {/* Main buoy ring - white base */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="url(#buoyGradient)"
                stroke="#d1d5db"
                strokeWidth="2"
                filter="url(#buoyShadow)"
              />
              
              {/* Inner circle cutout */}
              <circle
                cx="200"
                cy="200"
                r="100"
                fill="white"
                stroke="none"
              />

              {/* Blue bands - creating the classic life preserver look */}
              {[0, 1, 2, 3].map((bandIndex) => {
                const startAngle = (bandIndex * 90 - 25) * Math.PI / 180;
                const endAngle = (bandIndex * 90 + 25) * Math.PI / 180;
                
                const x1 = 200 + 100 * Math.cos(startAngle);
                const y1 = 200 + 100 * Math.sin(startAngle);
                const x2 = 200 + 180 * Math.cos(startAngle);
                const y2 = 200 + 180 * Math.sin(startAngle);
                const x3 = 200 + 180 * Math.cos(endAngle);
                const y3 = 200 + 180 * Math.sin(endAngle);
                const x4 = 200 + 100 * Math.cos(endAngle);
                const y4 = 200 + 100 * Math.sin(endAngle);

                const pathData = `M ${x1} ${y1} L ${x2} ${y2} A 180 180 0 0 1 ${x3} ${y3} L ${x4} ${y4} A 100 100 0 0 0 ${x1} ${y1}`;

                return (
                  <path
                    key={bandIndex}
                    d={pathData}
                    fill="#0E2A47"
                    className="opacity-90"
                  />
                );
              })}

              {/* Interactive step areas - invisible clickable zones */}
              {steps.map((step, index) => {
                const angle = getStepAngle(index);
                const isActive = index === activeStep;
                
                // Create larger clickable areas around each step
                const clickAngleStart = (angle - 36) * Math.PI / 180;
                const clickAngleEnd = (angle + 36) * Math.PI / 180;
                
                const x1 = 200 + 90 * Math.cos(clickAngleStart);
                const y1 = 200 + 90 * Math.sin(clickAngleStart);
                const x2 = 200 + 190 * Math.cos(clickAngleStart);
                const y2 = 200 + 190 * Math.sin(clickAngleStart);
                const x3 = 200 + 190 * Math.cos(clickAngleEnd);
                const y3 = 200 + 190 * Math.sin(clickAngleEnd);
                const x4 = 200 + 90 * Math.cos(clickAngleEnd);
                const y4 = 200 + 90 * Math.sin(clickAngleEnd);

                const clickPathData = `M ${x1} ${y1} L ${x2} ${y2} A 190 190 0 0 1 ${x3} ${y3} L ${x4} ${y4} A 90 90 0 0 0 ${x1} ${y1}`;

                return (
                  <g key={step.id}>
                    {/* Invisible clickable area */}
                    <path
                      d={clickPathData}
                      fill="transparent"
                      className="cursor-pointer"
                      onClick={() => handleStepClick(index)}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`step-${step.id}-panel`}
                      tabIndex={isActive ? 0 : -1}
                    />
                    
                    {/* Step number circle */}
                    <circle
                      cx={200 + 140 * Math.cos(angle * Math.PI / 180)}
                      cy={200 + 140 * Math.sin(angle * Math.PI / 180)}
                      r="22"
                      fill={isActive ? "#F0B254" : "white"}
                      stroke="#0E2A47"
                      strokeWidth="3"
                      className="transition-all duration-300 cursor-pointer drop-shadow-md"
                      onClick={() => handleStepClick(index)}
                    />
                    <text
                      x={200 + 140 * Math.cos(angle * Math.PI / 180)}
                      y={200 + 140 * Math.sin(angle * Math.PI / 180)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-lg font-bold transition-all duration-300 cursor-pointer ${isActive ? 'fill-primary-navy' : 'fill-primary-navy'}`}
                      onClick={() => handleStepClick(index)}
                    >
                      {step.id}
                    </text>
                  </g>
                );
              })}

              {/* Center hub with gradient */}
              <circle
                cx="200"
                cy="200"
                r="85"
                fill="url(#centerGradient)"
                stroke="#0E2A47"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
            </svg>
          </div>

          {/* Central hub content */}
          <div
            ref={hubRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center max-w-xs px-4">
              <div
                key={activeStep}
                className="animate-fadeIn"
                role="tabpanel"
                id={`step-${steps[activeStep].id}-panel`}
                aria-labelledby={`step-${steps[activeStep].id}-tab`}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary-navy mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation hints */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xs text-neutral-500 mb-2">
              Drag to rotate • Click steps • Use arrow keys
            </p>
            <div className="flex items-center justify-center space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-primary-navy' : 'bg-neutral-gull hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarborWheel; 