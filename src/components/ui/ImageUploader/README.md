# ImageUploader Component

A professional, reusable image uploader component with drag-and-drop support, preview, and validation.

## Features

✅ **Drag & Drop Support** - Upload files by dragging and dropping  
✅ **Click to Upload** - Traditional file picker  
✅ **Image Preview** - Real-time preview of uploaded images  
✅ **File Validation** - Type and size validation  
✅ **File Info Display** - Shows filename and size  
✅ **Remove/Change Image** - Easy file management  
✅ **Responsive Design** - Works on all screen sizes  
✅ **Loading States** - Visual feedback during drag operations  
✅ **Customizable** - Props for labels, help text, size limits, etc.

## Installation

The component is located at:
```
src/components/ui/ImageUploader/ImageUploader.tsx
```

## Usage

### Basic Example

```tsx
import ImageUploader from "@/components/ui/ImageUploader";

function MyComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <ImageUploader
      onFileSelect={handleFileSelect}
      onFileRemove={handleFileRemove}
      preview={preview}
    />
  );
}
```

### With Custom Props

```tsx
<ImageUploader
  onFileSelect={handleFileSelect}
  onFileRemove={handleFileRemove}
  preview={preview}
  label="Upload Profile Picture"
  helperText="PNG, JPG, GIF"
  maxSize={10}
  accept="image/png,image/jpeg,image/gif"
  disabled={false}
  className="my-custom-class"
/>
```

### In a Form

```tsx
<form onSubmit={handleSubmit}>
  <div>
    <label className="block mb-2 font-medium">
      Product Image*
    </label>
    <ImageUploader
      onFileSelect={handleFileSelect}
      onFileRemove={handleFileRemove}
      preview={preview}
      label="Upload Product Image"
      helperText="PNG, JPG (Best: 1200x800px)"
      maxSize={5}
    />
  </div>
  
  <button type="submit">Submit</button>
</form>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onFileSelect` | `(file: File) => void` | **Required** | Callback when file is selected |
| `onFileRemove` | `() => void` | `undefined` | Callback when file is removed |
| `accept` | `string` | `"image/*"` | Accepted file types |
| `maxSize` | `number` | `5` | Maximum file size in MB |
| `preview` | `string \| null` | `null` | Image preview URL |
| `disabled` | `boolean` | `false` | Disable the uploader |
| `label` | `string` | `"Upload Image"` | Upload button label |
| `helperText` | `string` | `"PNG, JPG, JPEG"` | Helper text shown below upload area |
| `className` | `string` | `""` | Additional CSS classes |

## Validation

The component automatically validates:

1. **File Type**: Ensures only image files are accepted
2. **File Size**: Checks against the `maxSize` prop (in MB)

Validation errors are displayed using `react-hot-toast`.

## Features in Detail

### Drag & Drop
- Visual feedback when dragging files over the upload area
- Smooth animations and color changes
- Prevention of default browser behavior

### Image Preview
- Full-width responsive preview
- Object-contain to maintain aspect ratio
- Remove button in top-right corner
- Change button in bottom-right corner

### File Information
- Displays filename (truncated if too long)
- Shows file size in appropriate units (B, KB, MB)
- Icon for visual identification

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels

## Styling

The component uses Tailwind CSS classes and can be customized via the `className` prop or by modifying the component directly.

### Color Customization

To use your custom brand colors, update these classes:
- `border-secondary` - Border color when dragging
- `bg-secondary/5` - Background when dragging
- `text-secondary` - Icon color when dragging

## Example: Upload to Server

```tsx
const handleFileSelect = async (file: File) => {
  setFile(file);
  
  // Create preview
  const reader = new FileReader();
  reader.onloadend = () => {
    setPreview(reader.result as string);
  };
  reader.readAsDataURL(file);
  
  // Optional: Upload immediately
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    const response = await axios.post('/api/upload', formData);
    console.log('Uploaded:', response.data.url);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

## Integration with PaymentForm

The component is already integrated in `PaymentForm.tsx` for uploading bank slips:

```tsx
<ImageUploader
  onFileSelect={handleFileSelect}
  onFileRemove={handleFileRemove}
  preview={filePreview}
  label="Upload Bank Slip"
  helperText="PNG, JPG, JPEG"
  maxSize={5}
/>
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Dependencies

- React 18+
- react-hot-toast (for error messages)
- Tailwind CSS

## License

Part of the Kelmac Frontend project.
