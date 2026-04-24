import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { Editor } from '@tinymce/tinymce-react';
import FormField from '../../../components/admin/FormField';
import { getArticle, createArticle, updateArticle, uploadArticleImage } from '../../../services/articleService';

const categories = ['Legal', 'Taxes', 'Marketing', 'Strategy', 'Finance', 'Business'];

const API_BASE = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

interface FormErrors {
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  title?: string;
  slug?: string;
  category?: string;
  excerpt?: string;
  imageFile?: string;
  imageAlt?: string;
  imageTitle?: string;
  content?: string;
  publishedDate?: string;
}

export default function ArticleForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [form, setForm] = useState({
    metaTitle: '', metaKeywords: '', metaDescription: '',
    title: '', slug: '', excerpt: '', content: '', category: 'Legal',
    imageUrl: '', imageAlt: '', imageTitle: '',
    published: false, publishedDate: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (id) {
      getArticle(id)
        .then((article) => {
          setForm({
            metaTitle: article.metaTitle || '',
            metaKeywords: article.metaKeywords || '',
            metaDescription: article.metaDescription || '',
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt || '',
            content: article.content,
            category: article.category,
            imageUrl: article.imageUrl || '',
            imageAlt: article.imageAlt || '',
            imageTitle: article.imageTitle || '',
            published: article.published,
            publishedDate: article.publishedDate ? article.publishedDate.split('T')[0] : '',
          });
          if (article.imageUrl) {
            setImagePreview(article.imageUrl.startsWith('http') ? article.imageUrl : `${API_BASE}${article.imageUrl}`);
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'title' && !isEdit) {
        updated.slug = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      return updated;
    });
    // Clear field error on change
    if (field in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setFieldErrors((prev) => ({ ...prev, imageFile: 'Please select an image file' }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFieldErrors((prev) => ({ ...prev, imageFile: 'Image must be under 10MB' }));
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFieldErrors((prev) => ({ ...prev, imageFile: undefined }));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setForm((prev) => ({ ...prev, imageUrl: '' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};
    if (!form.metaTitle.trim()) errors.metaTitle = 'Meta Title is required';
    if (!form.metaKeywords.trim()) errors.metaKeywords = 'Meta Keywords are required';
    if (!form.metaDescription.trim()) errors.metaDescription = 'Meta Description is required';
    if (!form.title.trim()) errors.title = 'Blog Title is required';
    if (!form.slug.trim()) errors.slug = 'Slug is required';
    if (!form.category.trim()) errors.category = 'Category is required';
    if (!form.excerpt.trim()) errors.excerpt = 'Short Description is required';
    if (!imageFile && !form.imageUrl) errors.imageFile = 'Blog image is required';
    if (!form.imageAlt.trim()) errors.imageAlt = 'Image Alt Tag is required';
    if (!form.imageTitle.trim()) errors.imageTitle = 'Image Title Tag is required';
    if (!form.content.trim()) errors.content = 'Content is required';
    if (!form.publishedDate) errors.publishedDate = 'Published Date is required';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    setError('');
    try {
      let imageUrl = form.imageUrl;

      // Upload new image if selected
      if (imageFile) {
        const result = await uploadArticleImage(imageFile);
        imageUrl = result.imageUrl;
      }

      const payload = { ...form, imageUrl };

      if (isEdit) {
        await updateArticle(id!, payload);
      } else {
        await createArticle(payload);
      }
      navigate('/admin/articles');
    } catch (err) {
      console.error('Failed to save article:', err);
      setError('Failed to save article. Check if slug is unique.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/articles')} className="p-2 rounded-lg hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Article' : 'New Article'}</h2>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        {/* SEO Fields */}
        <FormField
          label="Meta Title"
          value={form.metaTitle}
          onChange={(e) => handleChange('metaTitle', (e.target as HTMLInputElement).value)}
          error={fieldErrors.metaTitle}
          required
        />

        <FormField
          label="Meta Keywords"
          value={form.metaKeywords}
          onChange={(e) => handleChange('metaKeywords', (e.target as HTMLInputElement).value)}
          error={fieldErrors.metaKeywords}
          placeholder="comma-separated keywords"
          required
        />

        <FormField
          label="Meta Description"
          as="textarea"
          value={form.metaDescription}
          onChange={(e) => handleChange('metaDescription', (e.target as HTMLTextAreaElement).value)}
          error={fieldErrors.metaDescription}
          required
        />

        {/* Blog Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Blog Title"
            value={form.title}
            onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)}
            error={fieldErrors.title}
            required
          />
          <FormField
            label="Slug"
            value={form.slug}
            onChange={(e) => handleChange('slug', (e.target as HTMLInputElement).value)}
            error={fieldErrors.slug}
            required
          />
        </div>

        <FormField
          label="Category"
          as="select"
          value={form.category}
          onChange={(e) => handleChange('category', (e.target as HTMLSelectElement).value)}
          error={fieldErrors.category}
          required
        >
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </FormField>

        <FormField
          label="Short Description"
          as="textarea"
          value={form.excerpt}
          onChange={(e) => handleChange('excerpt', (e.target as HTMLTextAreaElement).value)}
          error={fieldErrors.excerpt}
          required
        />

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Image <span className="text-red-500">*</span>
          </label>
          {imagePreview ? (
            <div className="relative inline-block">
              <img src={imagePreview} alt="Preview" className="h-40 rounded-lg border border-gray-200 object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-cyan-400 hover:text-cyan-600 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Choose Image
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {fieldErrors.imageFile && <p className="text-red-500 text-xs mt-1">{fieldErrors.imageFile}</p>}
        </div>

        {/* Image SEO Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Image Alt Tag"
            value={form.imageAlt}
            onChange={(e) => handleChange('imageAlt', (e.target as HTMLInputElement).value)}
            error={fieldErrors.imageAlt}
            required
          />
          <FormField
            label="Image Title Tag"
            value={form.imageTitle}
            onChange={(e) => handleChange('imageTitle', (e.target as HTMLInputElement).value)}
            error={fieldErrors.imageTitle}
            required
          />
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content <span className="text-red-500">*</span></label>
          <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey="gpl"
            onInit={(_evt: unknown, editor: unknown) => (editorRef.current = editor)}
            initialValue={form.content}
            onEditorChange={(value: string) => handleChange('content', value)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'anchor', 'autolink', 'charmap', 'code', 'codesample',
                'directionality', 'emoticons', 'fullscreen', 'help', 'image', 'importcss',
                'insertdatetime', 'link', 'lists', 'media', 'nonbreaking', 'pagebreak',
                'preview', 'quickbars', 'searchreplace', 'table',
                'visualblocks', 'visualchars', 'wordcount',
              ],
              toolbar: `
                undo redo | blocks fontfamily fontsize | bold italic underline strikethrough |
                forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify |
                lineheight | bullist numlist outdent indent | subscript superscript |
                link image media table emoticons charmap codesample |
                pagebreak nonbreaking anchor insertdatetime |
                ltr rtl | visualblocks visualchars | searchreplace wordcount |
                fullscreen preview | code | help
              `,
              content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }',
            }}
          />
          {fieldErrors.content && <p className="text-red-500 text-xs mt-1">{fieldErrors.content}</p>}
        </div>

        {/* Published Date & Checkbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Published Date"
            type="date"
            value={form.publishedDate}
            onChange={(e) => handleChange('publishedDate', (e.target as HTMLInputElement).value)}
            error={fieldErrors.publishedDate}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={form.published}
            onChange={(e) => handleChange('published', e.target.checked)}
            className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">Published</label>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-700 disabled:opacity-50"
          >
            {saving ? 'Saving...' : isEdit ? 'Update Article' : 'Create Article'}
          </button>
          <button type="button" onClick={() => navigate('/admin/articles')} className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
