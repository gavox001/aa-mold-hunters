"use client";

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Calculator, Home, Droplets, Thermometer, ArrowRight, RefreshCcw, AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const questions = [
  {
    id: 'property_type',
    question: 'What type of property?',
    icon: Home,
    options: [
      { label: 'Single Family Home', value: 'single_family', factor: 1 },
      { label: 'Condo / Apartment', value: 'condo', factor: 0.8 },
      { label: 'Commercial', value: 'commercial', factor: 1.5 },
      { label: 'Multi-Family', value: 'multi', factor: 1.3 },
    ],
  },
  {
    id: 'damage_type',
    question: 'What type of damage?',
    icon: Droplets,
    options: [
      { label: 'Mold Only', value: 'mold', factor: 2000 },
      { label: 'Water Damage', value: 'water', factor: 3000 },
      { label: 'Mold + Water', value: 'both', factor: 4500 },
      { label: 'Storm / Roof', value: 'storm', factor: 3500 },
    ],
  },
  {
    id: 'area_size',
    question: 'Estimated affected area?',
    icon: Thermometer,
    options: [
      { label: 'Small (1 room)', value: 'small', factor: 1 },
      { label: 'Medium (2-3 rooms)', value: 'medium', factor: 1.8 },
      { label: 'Large (4+ rooms)', value: 'large', factor: 3 },
      { label: 'Whole House', value: 'whole', factor: 5 },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is this?',
    icon: AlertTriangle,
    options: [
      { label: 'Emergency (24h)', value: 'emergency', factor: 1.3 },
      { label: 'Urgent (1-3 days)', value: 'urgent', factor: 1.1 },
      { label: 'Standard (1 week)', value: 'standard', factor: 1 },
      { label: 'Planning ahead', value: 'planning', factor: 0.9 },
    ],
  },
]

export function AIEstimator() {
  const containerRef = useScrollAnimation()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateEstimate = () => {
    const propertyType = questions[0]!.options.find(o => o.value === answers.property_type)
    const damageType = questions[1]!.options.find(o => o.value === answers.damage_type)
    const areaSize = questions[2]!.options.find(o => o.value === answers.area_size)
    const urgency = questions[3]!.options.find(o => o.value === answers.urgency)

    const base = (damageType?.factor ?? 2000)
    const multiplier = (propertyType?.factor ?? 1) * (areaSize?.factor ?? 1) * (urgency?.factor ?? 1)

    const low = Math.round(base * multiplier * 0.8)
    const high = Math.round(base * multiplier * 1.2)

    return { low, high }
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  const currentQuestion = questions[currentStep]!
  const progress = ((currentStep + (showResult ? 1 : 0)) / questions.length) * 100

  return (
    <section
      id="estimator"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-secondary" />
      <div className="absolute inset-0 bg-primary/5 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12" data-animate="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cost Calculator
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Cost <span className="text-primary">Estimator</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Get an instant estimate for your mold remediation or water damage restoration project.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="p-6 md:p-10 rounded-2xl bg-card border border-border" data-animate="scale">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{showResult ? 'Complete' : `Step ${currentStep + 1} of ${questions.length}`}</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                  style={{ width: `${showResult ? 100 : progress}%` }}
                />
              </div>
            </div>

            {!showResult ? (
              <div className="space-y-6">
                {/* Question Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    {currentQuestion && <currentQuestion.icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Options Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentQuestion.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-left group"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-foreground font-medium">{option.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Results */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Estimated Cost Range
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    ${calculateEstimate().low.toLocaleString()} - ${calculateEstimate().high.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    This is an estimate. Final cost depends on inspection results.
                  </p>
                </div>

                {/* Selection Summary */}
                <div className="bg-secondary rounded-xl p-6 space-y-3">
                  <h4 className="text-foreground font-semibold">Your selections:</h4>
                  {questions.map((q, i) => {
                    const answer = q.options.find(o => o.value === answers[q.id])
                    return (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{q.question}</span>
                        <span className="text-foreground font-medium ml-auto">{answer?.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                      Get Exact Quote
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-foreground/10 py-6"
                    onClick={reset}
                  >
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center" data-animate="fade-up">
            <p className="text-muted-foreground text-sm">
              <AlertTriangle className="w-4 h-4 inline mr-1" />
              This estimator provides rough figures only. A professional inspection is required for accurate pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}