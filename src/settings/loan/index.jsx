

import { ArrowLeft, Edit2, Trash2, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"

const loanOptions = [
  {
    id: 1,
    name: "Option 1",
    tenure: "3 Installments for (3) months",
    interestRate: "% 6",
    repaymentTerms: "Equal Monthly Payments",
  },
  {
    id: 2,
    name: "Option 2",
    tenure: "6 Installments for (6) months",
    interestRate: "% 6",
    repaymentTerms: "Equal Monthly Payments",
  },
]

export default function LoanOptionsPage() {
    let navigate = useNavigate()
  return (
    <div className="w-[50%] mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button className="p-2 ">
          <svg onClick={()=>{
                                navigate('/settings')
                            }} className='mr-7 cursor-pointer' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66667 13H18.3333M7.66667 13L13 18.3333M7.66667 13L13 7.66667M6.33333 25H19.6667C22.6122 25 25 22.6122 25 19.6667V6.33333C25 3.38781 22.6122 1 19.6667 1H6.33333C3.38781 1 1 3.38781 1 6.33333V19.6667C1 22.6122 3.38781 25 6.33333 25Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Loan Options</h1>
        </div>
        <button onClick={()=> navigate('/settings/loan/add')} className="flex items-center gap-2 bg-[#7217b8] text-white px-4 py-2 rounded-lg hover:bg-[#5f13a0] transition-colors cursor-pointer">
          <Plus className="w-5 h-5" />
          Add New Loan Option
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#F6F6F6] px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Loan Approval</h2>
        </div>

        <div className="ml-4 divide-y divide-gray-200 ">
          {loanOptions.map((option) => (
            <div key={option.id} className="divide-y divide-gray-100">
              {/* Option Header */}
              <div className="bg-[#F6F6F6] px-6 py-3 flex items-center justify-between mt-4 pl-8">
                <h3 className="font-medium text-gray-700">{option.name}</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                    
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 2.99935H3.66667C2.19391 2.99935 1 4.19326 1 5.66602V24.3327C1 25.8054 2.19391 26.9993 3.66667 26.9993H22.3333C23.8061 26.9993 25 25.8054 25 24.3327V16.3327M20.8588 2.6053C21.1566 2.30751 21.5101 2.07129 21.8992 1.91013C22.2883 1.74896 22.7053 1.66602 23.1264 1.66602C23.5475 1.66602 23.9646 1.74896 24.3536 1.91013C24.7427 2.07129 25.0963 2.30751 25.394 2.6053C25.6918 2.90308 25.9281 3.25661 26.0892 3.64569C26.2504 4.03477 26.3333 4.45178 26.3333 4.87292C26.3333 5.29405 26.2504 5.71107 26.0892 6.10015C25.9281 6.48923 25.6918 6.84275 25.394 7.14054L14.8832 17.6662H10.3333V13.1163L20.8588 2.6053Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                    
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3307 5.99935H16.6641C16.6641 5.29211 16.3831 4.61383 15.883 4.11373C15.3829 3.61363 14.7046 3.33268 13.9974 3.33268C13.2902 3.33268 12.6119 3.61363 12.1118 4.11373C11.6117 4.61383 11.3307 5.29211 11.3307 5.99935ZM8.66406 5.99935C8.66406 4.58486 9.22597 3.22831 10.2262 2.22811C11.2264 1.22792 12.5829 0.666016 13.9974 0.666016C15.4119 0.666016 16.7684 1.22792 17.7686 2.22811C18.7688 3.22831 19.3307 4.58486 19.3307 5.99935H25.9974C26.351 5.99935 26.6902 6.13983 26.9402 6.38987C27.1903 6.63992 27.3307 6.97906 27.3307 7.33268C27.3307 7.6863 27.1903 8.02544 26.9402 8.27549C26.6902 8.52554 26.351 8.66602 25.9974 8.66602H24.8214L23.6401 22.4527C23.5265 23.784 22.9174 25.0241 21.9332 25.9278C20.949 26.8315 19.6615 27.3328 18.3254 27.3327H9.6694C8.33327 27.3328 7.04576 26.8315 6.06159 25.9278C5.07743 25.0241 4.4683 23.784 4.35473 22.4527L3.1734 8.66602H1.9974C1.64377 8.66602 1.30464 8.52554 1.05459 8.27549C0.804538 8.02544 0.664063 7.6863 0.664062 7.33268C0.664063 6.97906 0.804538 6.63992 1.05459 6.38987C1.30464 6.13983 1.64377 5.99935 1.9974 5.99935H8.66406ZM17.9974 13.9993C17.9974 13.6457 17.8569 13.3066 17.6069 13.0565C17.3568 12.8065 17.0177 12.666 16.6641 12.666C16.3104 12.666 15.9713 12.8065 15.7213 13.0565C15.4712 13.3066 15.3307 13.6457 15.3307 13.9993V19.3327C15.3307 19.6863 15.4712 20.0254 15.7213 20.2755C15.9713 20.5255 16.3104 20.666 16.6641 20.666C17.0177 20.666 17.3568 20.5255 17.6069 20.2755C17.8569 20.0254 17.9974 19.6863 17.9974 19.3327V13.9993ZM11.3307 12.666C11.6844 12.666 12.0235 12.8065 12.2735 13.0565C12.5236 13.3066 12.6641 13.6457 12.6641 13.9993V19.3327C12.6641 19.6863 12.5236 20.0254 12.2735 20.2755C12.0235 20.5255 11.6844 20.666 11.3307 20.666C10.9771 20.666 10.638 20.5255 10.3879 20.2755C10.1379 20.0254 9.9974 19.6863 9.9974 19.3327V13.9993C9.9974 13.6457 10.1379 13.3066 10.3879 13.0565C10.638 12.8065 10.9771 12.666 11.3307 12.666ZM7.01073 22.226C7.06753 22.8919 7.37229 23.5122 7.86465 23.964C8.35702 24.4159 9.00111 24.6664 9.6694 24.666H18.3254C18.9932 24.6658 19.6367 24.4149 20.1285 23.9631C20.6203 23.5113 20.9246 22.8914 20.9814 22.226L22.1441 8.66602H5.85073L7.01073 22.226Z" fill="#565656"/>
</svg>

                  </button>
                </div>
              </div>

              {/* Option Details */}
              <div className="px-6 pl-8 py-4 grid grid-cols-2 gap-y-4 pr-10">
                <div>
                  <span className="text-sm text-gray-500">Tenure</span>
                </div>
                <div className="text-sm text-gray-700 text-right">{option.tenure}</div>

                <div>
                  <span className="text-sm text-gray-500">Interest Rates</span>
                </div>
                <div className="text-sm text-gray-700 text-right">{option.interestRate}</div>

                <div>
                  <span className="text-sm text-gray-500">Repayment Terms</span>
                </div>
                <div className="text-sm text-gray-700 text-right">{option.repaymentTerms}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

