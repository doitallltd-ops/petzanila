import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Dog, CreditCard, CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';

const steps = [
  { id: 'service', title: 'Select Service', icon: Dog },
  { id: 'details', title: 'Booking Details', icon: Calendar },
  { id: 'payment', title: 'Payment', icon: CreditCard },
  { id: 'confirm', title: 'Confirmation', icon: CheckCircle2 },
];

const services = [
  { id: 'boarding', name: 'Dog Boarding', price: 800, unit: 'night' },
  { id: 'daycare', name: 'Day Care', price: 400, unit: 'day' },
  { id: 'grooming', name: 'Grooming', price: 600, unit: 'session' },
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '',
    petName: '',
    petBreed: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleServiceSelect = (id: string) => {
    setFormData({ ...formData, service: id });
    nextStep();
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {steps.map((step, i) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500',
                  i <= currentStep ? 'bg-brand-600 text-white' : 'bg-white text-slate-400 border-2 border-slate-200'
                )}
              >
                <step.icon size={20} />
              </div>
              <span className={cn(
                'text-xs font-bold mt-2 hidden sm:block',
                i <= currentStep ? 'text-brand-600' : 'text-slate-400'
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-3xl mb-8 text-center">What service do you need?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleServiceSelect(s.id)}
                      className={cn(
                        'p-8 rounded-3xl border-2 transition-all text-center group',
                        formData.service === s.id ? 'border-brand-500 bg-brand-50' : 'border-slate-100 hover:border-brand-200'
                      )}
                    >
                      <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <Dog className="text-brand-600" size={32} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{s.name}</h4>
                      <p className="text-brand-600 font-bold">₹{s.price}</p>
                      <p className="text-xs text-slate-400">per {s.unit}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-3xl mb-8">Tell us about your pet</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Pet's Name</label>
                    <input
                      type="text"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Breed</label>
                    <input
                      type="text"
                      value={formData.petBreed}
                      onChange={(e) => setFormData({ ...formData, petBreed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Special Notes</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-12">
                  <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-700">
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-brand-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-700 shadow-lg shadow-brand-200">
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-3xl mb-8">Payment Details</h2>
                <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Service</span>
                    <span className="font-bold">{services.find(s => s.id === formData.service)?.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500">Pet</span>
                    <span className="font-bold">{formData.petName} ({formData.petBreed})</span>
                  </div>
                  <div className="border-t border-slate-200 my-4 pt-4 flex justify-between">
                    <span className="text-lg font-bold">Total Amount</span>
                    <span className="text-2xl font-bold text-brand-600">₹{services.find(s => s.id === formData.service)?.price}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border-2 border-brand-500 bg-brand-50 rounded-xl flex items-center gap-4 cursor-pointer">
                    <div className="w-6 h-6 rounded-full border-4 border-brand-600 bg-white" />
                    <div className="flex-1">
                      <p className="font-bold">Credit / Debit Card</p>
                      <p className="text-xs text-slate-500">Pay securely with your card</p>
                    </div>
                    <CreditCard className="text-brand-600" />
                  </div>
                  <div className="p-4 border-2 border-slate-100 rounded-xl flex items-center gap-4 cursor-pointer opacity-50 grayscale">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-white" />
                    <div className="flex-1">
                      <p className="font-bold">UPI Payment</p>
                      <p className="text-xs text-slate-500">Coming soon</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-12">
                  <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-700">
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-brand-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-700 shadow-lg shadow-brand-200">
                    Pay & Confirm
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-24 h-24 bg-nature-100 text-nature-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={64} />
                </div>
                <h2 className="text-4xl mb-4">Booking Confirmed!</h2>
                <p className="text-slate-600 mb-10 max-w-sm mx-auto">
                  Thank you for choosing PETZANIA. We've sent a confirmation email to your address. We can't wait to see {formData.petName}!
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Back to Home <ArrowRight size={20} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Helper for class names
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
