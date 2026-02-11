# Corporate Enquiry Forms - Implementation Guide

## ✅ Completed

1. **Enquiries API** (`src/store/api/enquiriesApi.ts`)
   - Created RTK Query mutation for POST `/enquiries`
   - Defined `EnquiryPayload` interface with all fields
   - Exported `useCreateEnquiryMutation` hook

2. **Redux Store** (`src/store/store.ts`)
   - Added `enquiriesApi` to store configuration
   - Registered reducer and middleware

3. **Corporate Modal** (`src/components/CorporateModal/CorporateModal.tsx`)
   - Centralized form state management
   - Pass `formData` and `updateFormData` to all child forms
   - Handles service type selection

4. **Auditing Form 1** (`src/app/modal/auditing/form1.tsx`)
   - Added validation for required fields
   - Connected to formData state
   - Email format validation
   - Error display

## 🔧 Remaining Tasks

### 1. Update Auditing Form 2 (`src/app/modal/auditing/form2.tsx`)

Add these props:
```tsx
interface Props {
  formData: Partial<EnquiryPayload>;
  updateFormData: (data: Partial<EnquiryPayload>) => void;
  onBack: () => void;
  onNext: () => void;
}
```

Handle auditing-specific fields:
- `scheme`
- `certificationsHeld`
- `delivery`
- `numberOfLocations`
- `hoursOfOperation`
- `certifiedScope`
- `auditingDelivery`
- `industry`

### 2. Update Consulting Forms

**Form 1** (`src/app/modal/consulting/form1.tsx`)
- Same as Auditing Form 1 (copy the validation pattern)
- Change title to "Corporate Consulting"

**Form 2** (`src/app/modal/consulting/form2.tsx`)
- Handle consulting-specific fields:
  - `organizationType`
  - `language`

### 3. Update Training Forms

**Form 1** (`src/app/modal/training/form1.tsx`)
- Same as Auditing Form 1
- Change title to "Corporate Training"

**Form 2** (`src/app/modal/training/form2.tsx`)
- Handle training-specific fields:
  - `trainingCategory`
  - `trainingType`
  - `trainingDelivery`
  - `numberOfLearners` (number)
  - `preferredLearningDate` (date)

### 4. Update Schedule Meeting (`src/app/modal/auditing/ScheduleMeeting.tsx`)

Add mutation and submit handler:
```tsx
import { useCreateEnquiryMutation } from '@/store/api/enquiriesApi';
import { toast } from 'react-hot-toast';

interface Props {
  formData: Partial<EnquiryPayload>;
  onClose: () => void;
}

const ScheduleMeeting: React.FC<Props> = ({ formData, onClose }) => {
  const [createEnquiry, { isLoading }] = useCreateEnquiryMutation();

  const handleSubmit = async () => {
    try {
      // Validate all required fields are present
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Please complete all required fields');
        return;
      }

      await createEnquiry(formData as EnquiryPayload).unwrap();
      toast.success('Enquiry submitted successfully!');
      onClose();
    } catch (error: any) {
      console.error('Failed to submit enquiry:', error);
      toast.error(error?.data?.message || 'Failed to submit enquiry');
    }
  };

  return (
    // ... existing JSX
    <button 
      onClick={handleSubmit}
      disabled={isLoading}
      className="..."
    >
      {isLoading ? 'Submitting...' : 'Submit Enquiry'}
    </button>
  );
};
```

## 📋 Form Field Mapping

### All Forms (Form 1)
- `subject` → Subject field
- `name` → Name field
- `email` → Email field
- `phone` → Phone field (with country code)
- `company` → Company field
- `designation` → Designation field (optional)

### Auditing (Form 2)
- Dropdown fields map to respective auditing properties
- Each select should call: `updateFormData({ [field]: value })`

### Consulting (Form 2)
- `organizationType` → Organization Type dropdown
- `language` → Language dropdown

### Training (Form 2)
- `trainingCategory` → Category dropdown
- `trainingType` → Type dropdown
- `trainingDelivery` → Delivery Method dropdown
- `numberOfLearners` → Number input (parse to integer)
- `preferredLearningDate` → Date input

## 🎯 Key Pattern for All Forms

```tsx
const handleSelectChange = (field: string, value: string) => {
  updateFormData({ [field]: value });
};

// In select elements:
<select
  value={formData.fieldName || ''}
  onChange={(e) => handleSelectChange('fieldName', e.target.value)}
  // ... other props
>
  <option value="">Select from the list</option>
  {options.map(opt => (
    <option key={opt} value={opt}>{opt}</option>
  ))}
</select>
```

## ✨ Validation Rules

### Required Fields
- subject
- name
- email (with format validation)
- phone
- company

### Optional Fields
- designation
- All service-specific fields

### Email Validation
```tsx
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  errors.email = "Invalid email format";
}
```

## 🚀 Testing

1. Select a service (Auditing/Consulting/Training)
2. Fill Form 1 with contact details
3. Proceed to Form 2
4. Select service-specific options
5. Submit from Schedule Meeting
6. Check API call in Network tab
7. Verify toast notification

## 📝 API Endpoint

```
POST http://localhost:5000/api/v1/enquiries
Content-Type: application/json

{
  "subject": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "designation": "string",
  "enquiryType": "auditing" | "consulting" | "training",
  // ... service-specific fields
}
```

## 🔍 Debugging

Check Redux DevTools:
- Verify formData updates in CorporateModal component
- Check mutation status in RTK Query tab
- View API request/response

Console logs:
```tsx
console.log('Current form data:', formData);
console.log('Submitting enquiry:', formData);
```
