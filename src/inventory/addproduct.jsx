
import { useState, useEffect } from "react"
import { ArrowLeft, Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    productSKU: "",
    category: "",
    brandName: "",
    price: "",
    quantityInStock: "",
    dealerID: "",
    description: "",
    isTCPO: false,
  })

  const [productImages, setProductImages] = useState([null, null, null, null])
  const [imagePreviewUrls, setImagePreviewUrls] = useState(["", "", "", ""])
  const [cloudinaryUrls, setCloudinaryUrls] = useState(["", "", "", ""])
  const [suppliers, setSuppliers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadingImages, setUploadingImages] = useState(false)

  // Cloudinary configuration
  const CLOUDINARY_UPLOAD_PRESET = "upload" // Your actual upload preset from Cloudinary
  const CLOUDINARY_CLOUD_NAME = "dxjsljyas" // Your actual cloud name from Cloudinary
  const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`

  // Fetch suppliers on component mount
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/supplier/get")
        if (!response.ok) {
          throw new Error("Failed to fetch suppliers")
        }
        const data = await response.json()
        if (data.record && Array.isArray(data.record)) {
          setSuppliers(data.record)
        }
      } catch (error) {
        console.error("Error fetching suppliers:", error)
        setError("Failed to load suppliers. Please try again later.")
      }
    }
    fetchSuppliers()
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...productImages]
      const newImageUrls = [...imagePreviewUrls]

      newImages[index] = e.target.files[0]
      newImageUrls[index] = URL.createObjectURL(e.target.files[0])

      setProductImages(newImages)
      setImagePreviewUrls(newImageUrls)

      // Reset the Cloudinary URL for this index since the image has changed
      const newCloudinaryUrls = [...cloudinaryUrls]
      newCloudinaryUrls[index] = ""
      setCloudinaryUrls(newCloudinaryUrls)
    }
  }

  // Upload a single image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    if (!file) return null

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)

    try {
      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload image to Cloudinary")
      }

      const data = await response.json()
      return data.secure_url
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error)
      throw error
    }
  }

  // Upload all images to Cloudinary
  const uploadAllImagesToCloudinary = async () => {
    setUploadingImages(true)
    try {
      const uploadPromises = productImages.map((image, index) => {
        if (image && !cloudinaryUrls[index]) {
          return uploadImageToCloudinary(image)
        }
        return cloudinaryUrls[index] || null
      })

      const urls = await Promise.all(uploadPromises)
      setCloudinaryUrls(urls)
      return urls.filter(Boolean) // Remove null values
    } catch (error) {
      console.error("Error uploading images:", error)
      setError("Failed to upload images. Please try again.")
      throw error
    } finally {
      setUploadingImages(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      // First upload images to Cloudinary
      const imageUrls = await uploadAllImagesToCloudinary()

      if (!imageUrls || imageUrls.length === 0) {
        throw new Error("At least one image is required")
      }

      // Create data object to send to backend
      const productData = {
        name: formData.name,
        description: formData.description,
        quantityInStock: formData.quantityInStock,
        price: formData.price,
        category: formData.category,
        isTCPO: formData.isTCPO,
        dealerID: formData.dealerID,
        displayPhotos: imageUrls, // Send array of Cloudinary URLs
      }

      // Send the data to the API
      const response = await fetch("http://localhost:5000/api/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to add product")
      }

      const data = await response.json()
      console.log("Product added successfully:", data)

      // Reset form on success
      setFormData({
        name: "",
        productSKU: "",
        category: "",
        brandName: "",
        price: "",
        quantityInStock: "",
        dealerID: "",
        description: "",
        isTCPO: false,
      })
      setProductImages([null, null, null, null])
      setImagePreviewUrls(["", "", "", ""])
      setCloudinaryUrls(["", "", "", ""])
      setSuccess(true)

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error adding product:", error)
      setError(error.message || "Failed to add product. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    // Handle cancel action - typically navigate back or clear form
    console.log("Form cancelled")
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="flex items-center mb-6">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-2xl font-medium ml-2 text-gray-800">Add Product</h1>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>Product added successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="bg-gray-50 p-4 rounded-t-lg border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-700">Supplier Information</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Acme"
                className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Product SKU */}
            <div>
              <label htmlFor="productSKU" className="block text-sm font-medium text-gray-700 mb-1">
                Product SKU <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                id="productSKU"
                name="productSKU"
                value={formData.productSKU}
                onChange={handleInputChange}
                placeholder="www.example.com"
                className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Product Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Product Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white pr-10 text-gray-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="food">Food</option>
                  <option value="furniture">Furniture</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg
                    style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    className="size-5 text-[#8C8C8C]"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand Name */}
            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-1">
                Brand Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
                placeholder="Enter brand name"
                className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Selling Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Selling Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter selling price"
                className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Stock Quantity */}
            <div>
              <label htmlFor="quantityInStock" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="quantityInStock"
                name="quantityInStock"
                value={formData.quantityInStock}
                onChange={handleInputChange}
                placeholder="Enter quantity of product"
                className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Supplier Name */}
            <div>
              <label htmlFor="dealerID" className="block text-sm font-medium text-gray-700 mb-1">
                Supplier Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="dealerID"
                  name="dealerID"
                  value={formData.dealerID}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white pr-10 text-gray-500"
                  required
                >
                  <option value="">Select supplier name</option>
                  {suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg
                    style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    className="size-5 text-[#8C8C8C]"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* TCPO Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isTCPO"
                name="isTCPO"
                checked={formData.isTCPO}
                onChange={handleInputChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="isTCPO" className="ml-2 block text-sm text-gray-700">
                Is TCPO
              </label>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Product Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
              rows={4}
              className="w-full p-2.5 border-[#E4E4E4] border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Product Image {index + 1} {index === 0 && <span className="text-red-500">*</span>}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center h-40 relative">
                  {imagePreviewUrls[index] ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreviewUrls[index] || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                      {cloudinaryUrls[index] && (
                        <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                          Uploaded
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const newImages = [...productImages]
                          const newImageUrls = [...imagePreviewUrls]
                          const newCloudinaryUrls = [...cloudinaryUrls]
                          newImages[index] = null
                          newImageUrls[index] = ""
                          newCloudinaryUrls[index] = ""
                          setProductImages(newImages)
                          setImagePreviewUrls(newImageUrls)
                          setCloudinaryUrls(newCloudinaryUrls)
                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-center">
                        <span className="text-purple-600 font-medium">Click to Upload ID</span> or Drag and Drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPEG, PDF (max. 5mb)</p>
                      <input
                        type="file"
                        id={`productImage${index}`}
                        name={`productImage${index}`}
                        onChange={(e) => handleImageChange(index, e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".png,.jpg,.jpeg,.pdf"
                        required={index === 0 && !productImages[index]}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isSubmitting || uploadingImages}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#7217B8] text-white rounded-md hover:bg-[#6215a0] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
              disabled={isSubmitting || uploadingImages}
            >
              {(isSubmitting || uploadingImages) && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {uploadingImages ? "Uploading Images..." : isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

