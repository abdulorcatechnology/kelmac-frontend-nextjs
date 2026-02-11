# PayorderPopup Component

A reusable popup modal component for submitting payorder with bank slip upload and transparent backdrop.

## Features

✅ **Transparent Backdrop** - Semi-transparent black overlay with blur effect  
✅ **Smooth Animations** - Fade-in and slide-up animations  
✅ **Image Upload** - Integrated with ImageUploader component  
✅ **Form Validation** - Validates PO number and file upload  
✅ **API Integration** - Uploads file and creates payorder  
✅ **Loading States** - Disabled state during submission  
✅ **Success Callback** - Customizable success handler  
✅ **Responsive** - Works on all screen sizes  
✅ **Accessible** - Click outside to close, ESC key support  

## Installation

The component is located at:
```
src/components/ui/PayorderPopup/PayorderPopup.tsx
```

## Usage

### Basic Example

```tsx
import { useState } from "react";
import PayorderPopup from "@/components/ui/PayorderPopup";

function MyComponent() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSuccess = (data) => {
    console.log("Payorder submitted:", data);
    // Redirect or show success message
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}>
        Submit Payorder
      </button>

      <PayorderPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        courseId="675f4aaf2b67a23d4c9f2941"
        studentId="675f4aaf2b67a23d4c9f2941"
        onSuccess={handleSuccess}
      />
    </>
  );
}
```

### With User Authentication

```tsx
import { useSelector } from "react-redux";
import PayorderPopup from "@/components/ui/PayorderPopup";

function PaymentForm() {
  const [showPopup, setShowPopup] = useState(false);
  const auth = useSelector((state: any) => state?.auth);
  const courseId = "675f4aaf2b67a23d4c9f2941";

  const handleSuccess = (data) => {
    toast.success("Payorder submitted successfully!");
    router.push("/registration/confirmation");
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}>
        Upload Bank Slip & PO Number
      </button>

      <PayorderPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        courseId={courseId}
        studentId={auth?.user?.id}
        financialContactId={auth?.user?.id}
        onSuccess={handleSuccess}
      />
    </>
  );
}
```

### Integration in PaymentForm

Already integrated in the PaymentForm component:

```tsx
<PayorderPopup
  isOpen={showPayorderPopup}
  onClose={() => setShowPayorderPopup(false)}
  courseId={courseId}
  studentId={auth?.user?.id || ""}
  financialContactId={auth?.user?.id}
  onSuccess={handlePayorderSuccess}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | `boolean` | ✅ Yes | Controls popup visibility |
| `onClose` | `() => void` | ✅ Yes | Callback when popup closes |
| `courseId` | `string` | ✅ Yes | Course ID for payorder |
| `studentId` | `string` | ✅ Yes | Student/User ID |
| `financialContactId` | `string` | No | Financial contact ID (defaults to studentId) |
| `onSuccess` | `(data: any) => void` | No | Callback on successful submission |

## API Integration

The component integrates with two APIs:

### 1. File Upload API

**Endpoint:** `POST http://localhost:5000/api/v1/files/upload`

**Request:**
```typescript
FormData {
  file: File
}
```

**Response:**
```json
{
  "url": "https://cdn.kelmac.com/uploads/bank-slips/PO-2025-00045.png",
  "fileUrl": "https://cdn.kelmac.com/uploads/bank-slips/PO-2025-00045.png"
}
```

### 2. Create Payorder API

**Endpoint:** `POST http://localhost:5000/api/v1/payorder/create`

**Request:**
```json
{
  "poNumber": "PO-2025-00045",
  "studentId": "675f4aaf2b67a23d4c9f2941",
  "courseId": "675f4aaf2b67a23d4c9f2941",
  "financialContactId": "6841ca06ebdfea1c5e6a0e73",
  "bankSlipUrl": "https://cdn.kelmac.com/uploads/bank-slips/PO-2025-00045.png",
  "submittedAt": "2025-02-18T10:30:00.000Z"
}
```

## Features in Detail

### Transparent Backdrop
- Semi-transparent black background (`bg-black/50`)
- Backdrop blur effect for modern look
- Click outside modal to close
- Fixed positioning for full-screen overlay

### Animations
- **Fade In**: Backdrop fades in smoothly
- **Slide Up**: Modal slides up from bottom
- Smooth transition effects on all interactions

### Form Elements
- **PO Number Input**: Text input with validation
- **Bank Slip Upload**: Integrated ImageUploader component
- **Info Box**: Helper text with instructions
- **Action Buttons**: Cancel and Submit with loading states

### Validation
- PO Number required (non-empty)
- Bank slip image required
- File type validation (images only)
- File size validation (max 5MB)

### Loading States
- Disabled inputs during submission
- Loading spinner on submit button
- Prevent closing during submission

### Success Handling
- Closes popup automatically on success
- Resets form fields
- Calls optional success callback
- Shows success toast notification

## Styling

The component uses Tailwind CSS with custom animations:

```css
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}
```

### Customization

To customize colors, update these classes:
- `bg-blue-600` - Submit button background
- `hover:bg-blue-700` - Submit button hover
- `bg-blue-50` - Info box background
- `border-blue-200` - Info box border

## Accessibility

- ✅ Click outside to close
- ✅ Close button with aria-label
- ✅ Disabled states during submission
- ✅ Keyboard navigation support
- ✅ Focus management

## Error Handling

The component handles errors gracefully:

```typescript
try {
  // Upload and submit
} catch (error: any) {
  const errorMessage = 
    error.response?.data?.message || 
    error.message || 
    'Failed to submit payorder';
  toast.error(errorMessage);
}
```

## Example: Custom Success Handler

```tsx
const handleSuccess = (data) => {
  // Log the response
  console.log('PO Created:', data);
  
  // Show custom notification
  toast.success(`Payorder ${data.poNumber} submitted!`);
  
  // Update local state
  setSubmittedPO(data);
  
  // Navigate to confirmation page
  router.push(`/payorder/confirmation/${data.id}`);
};
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Dependencies

- React 18+
- axios (for API calls)
- react-hot-toast (for notifications)
- ImageUploader component
- Tailwind CSS

## Notes

- Popup automatically prevents body scroll when open
- Form resets automatically on close
- File preview is maintained until removal
- All API calls are error-handled with user feedback

## License

Part of the Kelmac Frontend project.
