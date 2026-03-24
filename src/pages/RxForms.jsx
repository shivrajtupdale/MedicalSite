import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { id: 'transfer', icon: 'fa-exchange-alt', label: 'Transfer Prescription' },
  { id: 'refill', icon: 'fa-sync-alt', label: 'Refill Request' },
  { id: 'new-patient', icon: 'fa-user-plus', label: 'New Patient' },
]

function SubmitButton({ submitted, label, successLabel }) {
  return (
    <button
      type="submit"
      className={`btn btn-lg ${submitted ? 'bg-green-600 border-green-600 text-white' : 'btn-primary'}`}
      disabled={submitted}
    >
      {submitted ? `✓ ${successLabel}` : label}
    </button>
  )
}

function FormBlock({ title, desc, children }) {
  return (
    <div className="bg-[#f5f7fa] rounded-xl p-6 mb-5">
      <h4 className="font-heading font-bold text-[#111] text-sm mb-1">{title}</h4>
      {desc && <p className="text-[#666] text-xs mb-4">{desc}</p>}
      {children}
    </div>
  )
}

function FormRow({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
}

function Field({ label, children }) {
  return (
    <div>
      <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function MedEntry({ onRemove, showRemove, placeholders }) {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <Field label={placeholders[0].label}>
          <input type="text" placeholder={placeholders[0].ph} required={placeholders[0].required} />
        </Field>
        <div className="flex gap-2 items-end">
          <Field label={placeholders[1].label}>
            <input type="text" placeholder={placeholders[1].ph} required={placeholders[1].required} />
          </Field>
          {showRemove && (
            <button type="button" className="remove-rx mb-0.5" onClick={onRemove} title="Remove">
              <i className="fas fa-times text-xs"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function TransferForm() {
  const [submitted, setSubmitted] = useState(false)
  const [meds, setMeds] = useState([0])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset(); setMeds([0]) }, 4000)
  }

  return (
    <form className="rx-form" onSubmit={handleSubmit}>
      <FormBlock title="Patient Information">
        <FormRow>
          <Field label="First Name *"><input type="text" placeholder="John" required /></Field>
          <Field label="Last Name *"><input type="text" placeholder="Doe" required /></Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Date of Birth *"><input type="date" required /></Field>
          <Field label="Phone Number *"><input type="tel" placeholder="(555) 000-0000" required /></Field>
        </FormRow>
        <div className="mt-4">
          <Field label="Email Address"><input type="email" placeholder="john@example.com" /></Field>
        </div>
        <div className="mt-4">
          <Field label="Home Address"><input type="text" placeholder="123 Main St, New York, NY 10001" /></Field>
        </div>
      </FormBlock>

      <FormBlock title="Current Pharmacy (Where your Rx is now)">
        <FormRow>
          <Field label="Pharmacy Name *"><input type="text" placeholder="e.g. CVS, Walgreens" required /></Field>
          <Field label="Pharmacy Phone *"><input type="tel" placeholder="(555) 000-0000" required /></Field>
        </FormRow>
        <div className="mt-4">
          <Field label="Pharmacy Address"><input type="text" placeholder="Pharmacy street address" /></Field>
        </div>
      </FormBlock>

      <FormBlock title="Prescription(s) to Transfer" desc="List each medication below. You can also bring your bottles in store and we'll handle it.">
        {meds.map((id) => (
          <MedEntry
            key={id}
            showRemove={meds.length > 1}
            onRemove={() => setMeds(m => m.filter(x => x !== id))}
            placeholders={[
              { label: 'Medication Name *', ph: 'e.g. Lisinopril 10mg', required: true },
              { label: 'Rx Number (if known)', ph: 'e.g. 1234567', required: false },
            ]}
          />
        ))}
        <button
          type="button"
          className="btn-outline mt-3 text-xs !px-4 !py-2"
          onClick={() => setMeds(m => [...m, Date.now()])}
        >
          <i className="fas fa-plus mr-1"></i> Add Another Medication
        </button>
      </FormBlock>

      <FormBlock title="Insurance Information">
        <FormRow>
          <Field label="Insurance Provider"><input type="text" placeholder="e.g. Blue Cross Blue Shield" /></Field>
          <Field label="Member ID"><input type="text" placeholder="Member ID" /></Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Group Number"><input type="text" placeholder="Group #" /></Field>
          <Field label="RxBIN"><input type="text" placeholder="BIN #" /></Field>
        </FormRow>
      </FormBlock>

      <FormBlock title="Delivery Preference">
        <div className="flex flex-col gap-3">
          <label className="radio-label"><input type="radio" name="delivery" value="pickup" defaultChecked /><span>Pickup in store</span></label>
          <label className="radio-label"><input type="radio" name="delivery" value="delivery" /><span>Home delivery (free for Plus/Premium members)</span></label>
        </div>
      </FormBlock>

      <div className="mb-5">
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span className="text-xs text-[#666]">I authorize HealthPoint Pharmacy to contact my current pharmacy to transfer the listed prescriptions.</span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <SubmitButton submitted={submitted} label="Submit Transfer Request" successLabel="Submitted Successfully!" />
        <p className="text-xs text-[#666]"><i className="fas fa-lock mr-1"></i> Your information is HIPAA-protected and never shared.</p>
      </div>
    </form>
  )
}

function RefillForm() {
  const [submitted, setSubmitted] = useState(false)
  const [meds, setMeds] = useState([0])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset(); setMeds([0]) }, 4000)
  }

  return (
    <form className="rx-form" onSubmit={handleSubmit}>
      <FormBlock title="Patient Information">
        <FormRow>
          <Field label="First Name *"><input type="text" placeholder="John" required /></Field>
          <Field label="Last Name *"><input type="text" placeholder="Doe" required /></Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Date of Birth *"><input type="date" required /></Field>
          <Field label="Phone Number *"><input type="tel" placeholder="(555) 000-0000" required /></Field>
        </FormRow>
      </FormBlock>

      <FormBlock title="Medication(s) to Refill">
        {meds.map((id) => (
          <MedEntry
            key={id}
            showRemove={meds.length > 1}
            onRemove={() => setMeds(m => m.filter(x => x !== id))}
            placeholders={[
              { label: 'Medication Name *', ph: 'e.g. Metformin 500mg', required: true },
              { label: 'Rx Number *', ph: 'Found on your bottle label', required: true },
            ]}
          />
        ))}
        <button
          type="button"
          className="btn-outline mt-3 text-xs !px-4 !py-2"
          onClick={() => setMeds(m => [...m, Date.now()])}
        >
          <i className="fas fa-plus mr-1"></i> Add Another Medication
        </button>
      </FormBlock>

      <FormBlock title="Pickup / Delivery">
        <div className="flex flex-col gap-3 mb-4">
          <label className="radio-label"><input type="radio" name="refill-delivery" value="pickup" defaultChecked /><span>Pickup in store</span></label>
          <label className="radio-label"><input type="radio" name="refill-delivery" value="delivery" /><span>Home delivery</span></label>
        </div>
        <Field label="Preferred Pickup / Delivery Date"><input type="date" /></Field>
      </FormBlock>

      <div className="mb-5">
        <Field label="Additional Notes">
          <textarea rows="3" placeholder="Any special instructions or questions for the pharmacist..."></textarea>
        </Field>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <SubmitButton submitted={submitted} label="Submit Refill Request" successLabel="Submitted Successfully!" />
        <p className="text-xs text-[#666]"><i className="fas fa-lock mr-1"></i> Secure and HIPAA-compliant.</p>
      </div>
    </form>
  )
}

function NewPatientForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 4000)
  }

  return (
    <form className="rx-form" onSubmit={handleSubmit}>
      <FormBlock title="Personal Information">
        <FormRow>
          <Field label="First Name *"><input type="text" placeholder="John" required /></Field>
          <Field label="Last Name *"><input type="text" placeholder="Doe" required /></Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Date of Birth *"><input type="date" required /></Field>
          <Field label="Gender">
            <select defaultValue="">
              <option value="" disabled>Select</option>
              <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
            </select>
          </Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Phone *"><input type="tel" placeholder="(555) 000-0000" required /></Field>
          <Field label="Email"><input type="email" placeholder="john@example.com" /></Field>
        </FormRow>
        <div className="mt-4">
          <Field label="Home Address *"><input type="text" placeholder="Street address, city, state, ZIP" required /></Field>
        </div>
      </FormBlock>

      <FormBlock title="Insurance Information">
        <FormRow>
          <Field label="Insurance Provider"><input type="text" placeholder="e.g. Aetna" /></Field>
          <Field label="Member ID"><input type="text" placeholder="Member ID" /></Field>
        </FormRow>
        <div className="mt-4"></div>
        <FormRow>
          <Field label="Group Number"><input type="text" placeholder="Group #" /></Field>
          <Field label="RxBIN"><input type="text" placeholder="BIN #" /></Field>
        </FormRow>
      </FormBlock>

      <FormBlock title="Health Information">
        <Field label="Known Drug Allergies">
          <input type="text" placeholder="e.g. Penicillin, Sulfa drugs, or None" />
        </Field>
        <div className="mt-4">
          <Field label="Current Medications (if any)">
            <textarea rows="3" placeholder="List any medications you currently take..."></textarea>
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Medical Conditions (optional)">
            <textarea rows="3" placeholder="e.g. Diabetes, Hypertension, Thyroid disorder..."></textarea>
          </Field>
        </div>
      </FormBlock>

      <FormBlock title="Emergency Contact">
        <FormRow>
          <Field label="Contact Name"><input type="text" placeholder="Full name" /></Field>
          <Field label="Relationship"><input type="text" placeholder="e.g. Spouse, Parent" /></Field>
        </FormRow>
        <div className="mt-4">
          <Field label="Contact Phone"><input type="tel" placeholder="(555) 000-0000" /></Field>
        </div>
      </FormBlock>

      <FormBlock title="Preferences">
        <label className="font-heading font-semibold text-xs text-[#333] block mb-2">How would you like to receive notifications?</label>
        <div className="flex flex-col gap-2 mb-4">
          <label className="checkbox-label"><input type="checkbox" defaultChecked /><span>Text message</span></label>
          <label className="checkbox-label"><input type="checkbox" /><span>Email</span></label>
          <label className="checkbox-label"><input type="checkbox" /><span>Phone call</span></label>
        </div>
        <Field label="Interested in membership?">
          <select defaultValue="">
            <option value="" disabled>Select</option>
            <option>Yes, tell me about plans</option>
            <option>No thanks</option>
            <option>Maybe later</option>
          </select>
        </Field>
      </FormBlock>

      <div className="mb-5">
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span className="text-xs text-[#666]">I confirm that the information provided is accurate and I consent to HealthPoint Pharmacy storing my health information for the purpose of providing pharmacy services.</span>
        </label>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <SubmitButton submitted={submitted} label="Complete Registration" successLabel="Submitted Successfully!" />
        <p className="text-xs text-[#666]"><i className="fas fa-lock mr-1"></i> All health data is stored securely and HIPAA-compliant.</p>
      </div>
    </form>
  )
}

const tabHeaders = {
  transfer: { icon: 'fa-exchange-alt', title: 'Transfer Your Prescription', desc: 'Fill out the form below and we\'ll contact your current pharmacy to complete the transfer. Most transfers are done within a few hours.' },
  refill: { icon: 'fa-sync-alt', title: 'Request a Refill', desc: 'Submit your refill request online and we\'ll notify you when it\'s ready. Same-day refills available for most prescriptions.' },
  'new-patient': { icon: 'fa-user-plus', title: 'New Patient Registration', desc: 'Welcome! Fill out this form before your first visit so we can serve you faster. All information is kept strictly confidential.' },
}

export default function RxForms() {
  const location = useLocation()
  const hash = location.hash.replace('#', '')
  const validIds = TABS.map(t => t.id)
  const [activeTab, setActiveTab] = useState(validIds.includes(hash) ? hash : 'transfer')
  const tabsRef = useRef(null)

  function switchTab(id) {
    setActiveTab(id)
    setTimeout(() => {
      if (tabsRef.current) {
        const top = tabsRef.current.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 50)
  }

  const header = tabHeaders[activeTab]

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="text-white/70 text-sm mb-2">
            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
            {' / Rx Forms'}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-3">Prescription Forms</h1>
          <p className="text-white/80 text-lg max-w-xl">
            Transfer, refill, or register as a new patient — all online, all quick.
          </p>
        </div>
      </section>

      {/* TAB NAV */}
      <div ref={tabsRef} className="bg-white border-b border-gray-100 sticky top-[76px] z-40 shadow-sm">
        <div className="max-w-container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {TABS.map(({ id, icon, label }) => (
              <button
                key={id}
                onClick={() => switchTab(id)}
                className={`flex items-center gap-2 px-6 py-4 font-heading font-semibold text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer bg-transparent ${
                  activeTab === id
                    ? 'text-primary border-primary'
                    : 'text-[#666] border-transparent hover:text-primary'
                }`}
              >
                <i className={`fas ${icon}`}></i> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
              <i className={`fas ${header.icon} text-primary text-xl`}></i>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#111] mb-1">{header.title}</h2>
              <p className="text-[#666]">{header.desc}</p>
            </div>
          </div>

          {/* Active form */}
          {activeTab === 'transfer' && <TransferForm />}
          {activeTab === 'refill' && <RefillForm />}
          {activeTab === 'new-patient' && <NewPatientForm />}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <div className="bg-[#f5f7fa] border-t border-gray-100 py-6 px-4">
        <div className="max-w-container mx-auto flex flex-wrap justify-center gap-8 text-sm text-[#333]">
          <span><i className="fas fa-phone text-primary mr-2"></i>Prefer to call? <a href="tel:5165051550" className="text-primary hover:underline font-semibold">(516) 505-1550</a></span>
          <span><i className="fas fa-fax text-primary mr-2"></i>Providers: fax to <strong>(516) 505-1551</strong></span>
          <span><i className="fas fa-map-marker-alt text-primary mr-2"></i>Walk in: 123 Wellness Ave, NY 10001</span>
        </div>
      </div>
    </>
  )
}
