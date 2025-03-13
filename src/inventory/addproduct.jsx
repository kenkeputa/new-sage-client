"use client"

import { useState } from "react"
import { ArrowLeft, Upload } from "lucide-react"

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productSKU: "",
    productCategory: "",
    brandName: "",
    sellingPrice: "",
    stockQuantity: "",
    supplierName: "",
    productDescription: "",
  })

  const [productImages, setProductImages] = useState([null, null, null, null])
  const [imagePreviewUrls, setImagePreviewUrls] = useState(["", "", "", ""])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...productImages]
      const newImageUrls = [...imagePreviewUrls]

      newImages[index] = e.target.files[0]
      newImageUrls[index] = URL.createObjectURL(e.target.files[0])

      setProductImages(newImages)
      setImagePreviewUrls(newImageUrls)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    console.log("Product Images:", productImages)
    // Here you would typically send the data to your API
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

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="bg-[#F6F6F6] p-4 rounded-t-lg border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-700">Supplier Information</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Acme"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Product Category */}
            <div>
              <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
                Product Category <span className="text-red-500">*</span>
              </label>
              <select
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white"
                required
              >
                <option value="">Select </option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food</option>
                <option value="furniture">Furniture</option>
              </select>
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
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Selling Price */}
            <div>
              <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Selling Price <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="sellingPrice"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleInputChange}
                placeholder="Enter selling price"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Stock Quantity */}
            <div>
              <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="stockQuantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                placeholder="Enter quantity of product"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Supplier Name */}
            <div>
              <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700 mb-1">
                Supplier Name <span className="text-red-500">*</span>
              </label>
              <select
                id="supplierName"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleInputChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white"
                required
              >
                <option value="">Select supplier name</option>
                <option value="supplier1">Supplier 1</option>
                <option value="supplier2">Supplier 2</option>
                <option value="supplier3">Supplier 3</option>
              </select>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Product Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              placeholder="Enter product description"
              rows={4}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Product Image {index + 1} <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center h-40 relative">
                  {imagePreviewUrls[index] ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreviewUrls[index] || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newImages = [...productImages]
                          const newImageUrls = [...imagePreviewUrls]
                          newImages[index] = null
                          newImageUrls[index] = ""
                          setProductImages(newImages)
                          setImagePreviewUrls(newImageUrls)
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
                        required={!productImages[index]}
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
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

