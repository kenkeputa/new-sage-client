

import { useState } from "react"
import PropTypes from 'prop-types';

const Activity = ({datatable}) => {
  const [option, setoption] = useState(false)
  const [option1, setoption1] = useState(false)
  const [option2, setoption2] = useState(false)
  const [menu, setmenu] = useState(null)
useEffect(() => {
        console.log('RegularActivity datatable:', datatable);
    }, [datatable]);
  // Update the tableRows array to match the new data
  const tableRows = datatable
  ?.filter(record => record.status === 'approved')
  ?.map((e) => e) || [];

  const filteroptions = [
    { label: "All" },
    { label: "Communications" },
    { label: "Customers" },
    { label: "Inventory" },
    { label: "Loan" },
    { label: "Orders" },
    { label: "Payment" },
  ]

  const [selectedOption, setSelectedOption] = useState(0)

  const sortOptions = [{ label: "Most Recent" }, { label: "Oldest" }]

  const [selectedSortOption, setSelectedSortOption] = useState(0)

  return (
    <div className="w-[100%] h-fit bg-[#f6f6f6] rounded-xl mt-8 shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start inline-flex overflow-hidden  mt-6 relative">
      <div className="self-stretch h-[72px] px-6 py-[3px] bg-[#f6f6f6] border-b border-[#d3d3d3] justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
          <div className=" border-[1px] border-[#C1C1C1] w-[423px] h-[40px] rounded-[7px] flex items-center justify-center">
            <input
              type="text"
              placeholder="Search by Customer Name, Customer ID, Phone..."
              className="w-[90%] pl-4 border-0 outline-0"
            />
            <svg
              width="24"
              className="mr-3"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0004 21.0004L16.6504 16.6504M11 7C13.2091 7 15 8.79086 15 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#9D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* sort */}

        {/* X */}

        {/* nav */}
        <div
          className="h-[259px] flex-col justify-start items-start inline-flex absolute top-[9%] z-[999] bg-white right-[10%] mt-6 cursor-pointer"
          style={{ display: option2 ? "inline-flex" : "none" }}
        >
          {filteroptions.map((item, index) => {
            // Show the icon if no option is selected (initial state) OR if this is the selected option.
            const showIcon = selectedOption === null ? true : selectedOption === index

            return (
              <div
                key={index}
                className="self-stretch h-[37px] px-3 py-2 hover:bg-[#333333]/10 bg-white justify-start items-center gap-2 inline-flex"
                onClick={() => {
                  // If the option is already selected, unselect it (optional behavior)
                  // Otherwise, set the clicked option as selected.
                  setSelectedOption(index)
                }}
              >
                <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                  <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                    {item.label}
                  </div>
                  {showIcon && (
                    <div data-svg-wrapper className="relative">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            )
          })}
        </div>

        <div
          style={{ display: option1 ? "inline-flex" : "none" }}
          className="w-[129px] h-[74px] flex-col bg-white justify-start items-start inline-flex absolute top-[9%] right-[24%] mt-6 cursor-pointer"
        >
          {sortOptions.map((item, index) => {
            // When no option is selected, show the check mark on all items.
            // Once an option is selected, show the icon only on that option.
            const showIcon = selectedSortOption === null ? true : selectedSortOption === index
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedSortOption(index)
                }}
                className="self-stretch hover:bg-[#333333]/10 h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex"
              >
                <div className="grow shrink basis-0 h-[21px] flex justify-between items-center">
                  <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                    {item.label}
                  </div>
                  {showIcon && (
                    <div data-svg-wrapper className="relative">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            )
          })}
        </div>
      </div>
      {/* Activity */}
      <div className="self-stretch justify-start items-start inline-flex">
        {/* Customer ID Column */}
        <div className="w-[200px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 pl-1.5">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap">Customer ID</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                  {row.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Name Column */}
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 pl-1.5">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap">Customer Name</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.first_name + " " + row.last_name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Date Column */}
        <div className="w-[200px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 pl-1.5">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap">Application Date</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {new Date(row?.created_at).toISOString().split('T')[0].split('-').reverse().join('/')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Column */}
        <div className="w-[154px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 pl-1.5">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="whitespace-nowrap">Status</span>
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div
                  className={`px-2 rounded-md border text-sm font-medium leading-[21px] ${
                    row.status === "Pending"
                      ? "bg-[#ffdb43]/10 border-[#ffeda1] text-[#ae8c00]"
                      : row.status === "approved"
                        ? "bg-[#1fc16b]/10 border-[#adf2cd] text-[#16884b]"
                        : ""
                  }`}
                >
                  {row.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Column */}
        <div className="w-[200px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
                Action
              </div>
            </div>
          </div>
          {tableRows?.map((row, idx) => (
            <div
              key={idx}
              className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
            >
              <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                <div className="px-1 flex justify-center py-1 rounded-lg text-sm font-medium leading-[21px] mr-[1rem] gap-2">
                  <button
                    className={`text-black bg-white py-[4px] px-[8px] rounded-[8px] ${
                      row.status === "Verified" ? "w-[49px]" : "w-auto"
                    }`}
                  >
                    view
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* prev */}
      <div className="h-[66px] w-full px-6 pt-3 pb-4 bg-[#f6f6f6] border-t  border-t-[rgba(246,246,246,1)] justify-between items-center inline-flex">
        <div className="px-3 py-1.5 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex">
          <div data-svg-wrapper className="relative">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.8334 10H4.16671M4.16671 10L10 4.16667M4.16671 10L10 15.8333"
                stroke="#565656"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
              <path
                d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                stroke="#7217B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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

