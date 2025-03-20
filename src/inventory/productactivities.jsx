import { useState } from 'react';
import PropTypes from 'prop-types';
let Activity = ({datatable})=>{
    let [option, setoption] = useState(false)
    let [option1, setoption1] = useState(false)
    let [option2, setoption2] = useState(false)
    let [option3, setoption3] = useState(false)
    let [menu, setmenu] = useState(null)
  
    console.log(datatable)
  
    const tableRows = datatable
    
    const filteroptions = [
      { label: "All" },
      { label: "Communications" },
      { label: "Customers" },
      { label: "Inventory" },
      { label: "Loan" },
      { label: "Orders" },
      { label: "Payment" },
    ];
  
    const [selectedOption, setSelectedOption] = useState(0);
  
  
    const sortOptions = [
      { label: "Most Recent" },
      { label: "Oldest" },
    ];
  
  
  const [selectedSortOption, setSelectedSortOption] = useState(0);
  
  
    return (
      <div className="w-[100%] h-fit bg-[#f6f6f6] rounded-xl mt-8 shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start inline-flex overflow-hidden  mt-6 relative">
    <div className="self-stretch h-[72px] px-6 py-[3px] bg-[#f6f6f6] border-b border-[#d3d3d3] justify-start items-center gap-4 inline-flex overflow-hidden">
      <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
      <div className=" border-[1px] border-[#C1C1C1] w-[423px] h-[40px] rounded-[7px] flex items-center justify-center">
                        <input type="text" placeholder="Search by Customer Name, Customer ID, Phone..." className="w-[90%] pl-4 border-0 outline-0" />
                        <svg width="24" className="mr-3" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0004 21.0004L16.6504 16.6504M11 7C13.2091 7 15 8.79086 15 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
      </div>


      
      {/* sort */}
      <div onClick={()=>{
        if(option1){
          setoption1(false)
        } else {
          setoption1(true)
        }
      }} className="justify-end items-center gap-2 flex cursor-pointer">
        <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
          
          <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Categories</div>
          <div className="w-5 h-5 relative bg-white/0">
            <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
            <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div onClick={()=>{
        if(option2){
          setoption2(false)
        } else {
          setoption2(true)
        }
      }} className="justify-end items-center gap-2 flex cursor-pointer">
        <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
          <div className="w-5 h-5 relative bg-white/0">
            <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
            <div data-svg-wrapper className="left-[2.50px] top-[2.50px] absolute">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1667 16.5L13.1667 6.5M13.1667 16.5L9.83333 13.1667M13.1667 16.5L16.5 13.1667M4.83333 1.5L4.83333 11.5M4.83333 1.5L1.5 4.83333M4.83333 1.5L8.16666 4.83333" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
          <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Sort By</div>
          <div className="w-5 h-5 relative bg-white/0">
            <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
            <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      {/* filter */}
    
    <div onClick={()=>{
        if(option3){
          setoption3(false)
        } else {
          setoption3(true)
        }
      }} className="justify-end items-center gap-2 flex cursor-pointer">
      <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
          <div data-svg-wrapper className="relative ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3334 2.5H1.66675L8.33342 10.3833V15.8333L11.6667 17.5V10.3833L18.3334 2.5Z" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Filter By</div>
          <div className="w-5 h-5 relative bg-white/0">
            <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
            <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
          
      </div>
  {/* X */}
  
  
      {/* nav */}
  <div
        className="h-[259px] flex-col justify-start items-start inline-flex absolute top-[6%] z-[999] bg-white right-[2%] mt-6 cursor-pointer"
        style={{ display: option3 ? "inline-flex" : "none" }}
      >
        {filteroptions.map((item, index) => {
          // Show the icon if no option is selected (initial state) OR if this is the selected option.
          const showIcon =
            selectedOption === null ? true : selectedOption === index
  
          return (
            <div
              key={index}
              className="self-stretch h-[37px] px-3 py-2 hover:bg-[#333333]/10 bg-white justify-start items-center gap-2 inline-flex"
              onClick={() => {
                // If the option is already selected, unselect it (optional behavior)
                // Otherwise, set the clicked option as selected.
                setSelectedOption(index);
              }}
            >
              <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {item.label}
                </div>
                {showIcon && (
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                        stroke="#565656"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
  <div
        className="h-[259px] flex-col justify-start items-start inline-flex absolute top-[6%] z-[999] bg-white right-[30%] mt-6 cursor-pointer"
        style={{ display: option1 ? "inline-flex" : "none" }}
      >
        {filteroptions.map((item, index) => {
          // Show the icon if no option is selected (initial state) OR if this is the selected option.
          const showIcon =
            selectedOption === null ? true : selectedOption === index
  
          return (
            <div
              key={index}
              className="self-stretch h-[37px] px-3 py-2 hover:bg-[#333333]/10 bg-white justify-start items-center gap-2 inline-flex"
              onClick={() => {
                // If the option is already selected, unselect it (optional behavior)
                // Otherwise, set the clicked option as selected.
                setSelectedOption(index);
              }}
            >
              <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {item.label}
                </div>
                {showIcon && (
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                        stroke="#565656"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
  

  <div
        style={{ display: option2 ? "inline-flex" : "none" }}
        className="w-[129px] h-[74px] flex-col bg-white justify-start items-start inline-flex absolute top-[6%] right-[17%] mt-6 cursor-pointer"
      >
        {sortOptions.map((item, index) => {
          // When no option is selected, show the check mark on all items.
          // Once an option is selected, show the icon only on that option.
          const showIcon = selectedSortOption === null ? true : selectedSortOption === index;
          return (
            <div
              key={index}
              onClick={() => {
                
                setSelectedSortOption(index);
              }}
              className="self-stretch hover:bg-[#333333]/10 h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex"
            >
              <div className="grow shrink basis-0 h-[21px] flex justify-between items-center">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {item.label}
                </div>
                {showIcon && (
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                        stroke="#565656"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
  
    </div>
  {/* Activity */}
  <div className="self-stretch justify-start items-start inline-flex bg-[#e4e4e4]/50">
        
        {/* Description Column */}
        <div className="w-[359px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              {/* <div className="w-5 h-5 relative">
                <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-[#e4e4e4]" />
              </div> */}
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight  flex gap-2 pl-1.5">
              
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>Product</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="size-[30px] relative">
                  <img src={row?.display_photos === null ? " " : row?.display_photos[0] } />
                </div>
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Category Column */}
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 ">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>Suppliers</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row.dealer_name}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>Category</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Status Column */}
        
        
        {/* Date Column */}
        <div className="w-[154px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>SKU</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row?.sku}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[154px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>Stock</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row.quantity_in_stock}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Column */}
        
        
        <div className="w-[154px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span>Status</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div
                  className={`px-2 rounded-md border text-sm font-medium leading-[21px] ${
                    row.quantity_in_stock < 10
                      ? "bg-[#ffdb43]/10 border-[#ffeda1] text-[#ae8c00]"
                      : row.payment_status === "Out of Stock"
                      ? "bg-[#fb3748]/10 border-[#fdafb6] text-[#dd0417]"
                      : row.payment_status === "In Progress"
                      ? "bg-[#b5e45e]/10 border-[#e1f4bf] text-[#5f8717]"
                      : row.quantity_in_stock > 9
                      ? "bg-[#1fc16b]/10 border-[#adf2cd] text-[#16884b]"
                      : ""
                  }`}
                >
                  {row.quantity_in_stock < 10 ? "Low Stock" : "In Stock" }
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
                Actions
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3  border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="px-1 flex justify-center  py-1 w-[4rem]  rounded-lg text-white text-sm font-medium leading-[21px] mr-[1rem] gap-2">
<svg width="22" className="cursor-pointer" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.85742 2H3.85742C2.75285 2 1.85742 2.89543 1.85742 4V18C1.85742 19.1046 2.75285 20 3.85742 20H17.8574C18.962 20 19.8574 19.1046 19.8574 18V12M16.7515 1.70446C16.9748 1.48112 17.24 1.30395 17.5318 1.18308C17.8236 1.06221 18.1364 1 18.4522 1C18.7681 1 19.0808 1.06221 19.3727 1.18308C19.6645 1.30395 19.9296 1.48112 20.153 1.70446C20.3763 1.9278 20.5535 2.19295 20.6743 2.48476C20.7952 2.77656 20.8574 3.08932 20.8574 3.40518C20.8574 3.72103 20.7952 4.03379 20.6743 4.3256C20.5535 4.61741 20.3763 4.88255 20.153 5.10589L12.2698 13.0001H8.85742V9.5877L16.7515 1.70446Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<svg className="cursor-pointer" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.85742 5H3.85742M3.85742 5H19.8574M3.85742 5L4.85742 19C4.85742 19.5304 5.06814 20.0391 5.44321 20.4142C5.81828 20.7893 6.32699 21 6.85742 21H14.8574C15.3879 21 15.8966 20.7893 16.2716 20.4142C16.6467 20.0391 16.8574 19.5304 16.8574 19L17.8574 5M6.85742 5V3C6.85742 2.46957 7.06814 1.96086 7.44321 1.58579C7.81828 1.21071 8.32699 1 8.85742 1H12.8574C13.3879 1 13.8966 1.21071 14.2716 1.58579C14.6467 1.96086 14.8574 2.46957 14.8574 3V5" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* prev */}
      <div className="h-[66px] w-full px-6 pt-3 pb-4  border-t  border-t-[rgba(246,246,246,1)] justify-between items-center inline-flex">
      <div className="px-3 py-1.5 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex">
          <div data-svg-wrapper className="relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8334 10H4.16671M4.16671 10L10 4.16667M4.16671 10L10 15.8333" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className="text-[#565656] text-base font-medium font-['Mulish'] leading-normal">Previous</div>
      </div>
      <div className="justify-start items-start gap-0.5 flex">
          <div className="w-10 h-10 bg-[#e4e4e4] rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#7217b8] text-sm font-medium font-['Mulish'] leading-[21px]">1</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">2</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">3</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">...</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">8</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">9</div>
              </div>
          </div>
          <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
              <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                  <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">10</div>
              </div>
          </div>
      </div>
      <div className="px-3 py-1.5 rounded-lg border border-[#7217b8] justify-center items-center gap-2 flex">
          <div className="text-[#7217b8] text-base font-medium font-['Mulish'] leading-normal">Next</div>
          <div data-svg-wrapper className="relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="#7217B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
      </div>
  </div>
  </div>
)
  }
  Activity.propTypes = {
    datatable: PropTypes.arrayOf(PropTypes.object),
};

  export default Activity;
