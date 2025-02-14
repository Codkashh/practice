export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return(
        <div className="bg-red-600 rounded shadow-md p-4">
            <div className="text-grey-700">
                {title}
                ?
            </div> 
            <div className="flex justify-between">
                <div>
                    $ {amount}
                </div>
                    {orderCount ? 
                    <div className="flex">
                    <div className="text-blue-700">
                        {orderCount} order(s)    
                    </div>
                    <div/>
                        <svg className="fill-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                </div> : null}
            </div>
        </div>
    )
}