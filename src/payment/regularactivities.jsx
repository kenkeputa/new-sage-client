import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

let RegularActivity = ({ datatable }) => {
    let [option, setoption] = useState(false);
    let [option1, setoption1] = useState(false);
    let [option2, setoption2] = useState(false);
    let [menu, setmenu] = useState(null);

    useEffect(() => {
        console.log('RegularActivity datatable:', datatable);
    }, [datatable]);

    const tableRows = datatable || [];

    const filteroptions = [
        { label: 'All' },
        { label: 'Communications' },
        { label: 'Customers' },
        { label: 'Inventory' },
        { label: 'Loan' },
        { label: 'Orders' },
        { label: 'Payment' },
    ];

    const [selectedOption, setSelectedOption] = useState(0);

    const sortOptions = [
        { label: 'Most Recent' },
        { label: 'Oldest' },
    ];

    const [selectedSortOption, setSelectedSortOption] = useState(0);

    return (
        <div className="w-[100%] h-fit bg-[#f6f6f6] rounded-xl mt-8 shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start inline-flex overflow-hidden">
            <div className="self-stretch h-[72px] px-6 py-[3px] bg-[#f6f6f6] border-b border-[#d3d3d3] justify-start items-center gap-4 inline-flex overflow-hidden">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="border-[1px] border-[#C1C1C1] w-[423px] h-[40px] rounded-[7px] flex items-center justify-center">
                        <input type="text" placeholder="Search by Customer Name, Customer ID, Phone..." className="w-[90%] pl-4 border-0 outline-0" />
                        <svg width="24" className="mr-3" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0004 21.0004L16.6504 16.6504M11 7C13.2091 7 15 8.79086 15 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3..." />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Render table rows */}
            <div className="self-stretch justify-start items-start inline-flex">
                {/* Description Column */}
                <div className="w-[120px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
                        <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight flex gap-2 pl-1.5">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19L1.5 12.5H10.5L6 19ZM6 1L1.5 7.5H10.5L6 1Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                                <span className='whitespace-nowrap'>Transaction ID</span>
                            </div>
                        </div>
                    </div>
                    {tableRows.map((row, idx) => (
                        <div key={idx} className="self-stretch h-[54px] p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
                            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
                                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                                    {row.id}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Add other columns similarly */}
            </div>
        </div>
    );
}

RegularActivity.propTypes = {
    datatable: PropTypes.arrayOf(PropTypes.object),
};

export default RegularActivity;
