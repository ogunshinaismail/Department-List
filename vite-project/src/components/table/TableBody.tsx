import { CatalogData } from '../../types'
import { useCatalog } from '../../context/catalogContext';

const TableBody = ({data, index}: { data: CatalogData, index: number}) => {
    const { handleCheckboxChange, selectedItems} = useCatalog()
    const itemType = 'Item Type' as keyof CatalogData;
    const CostPrice = 'Cost Price' as keyof CatalogData;
    const ImageSmall = 'Image Small' as keyof CatalogData;

  return (
    <div className=''> 
        <div className="grid grid-cols-12 gap-2 items-center border-b h-[56px] text-[#595959]">
            <div className="col-span-1 flex items-center gap-3">
                <input 
                    type="checkbox"
                    className='bg-transparent'
                    checked={selectedItems.has(data?.SKU)}
                    onChange={(event) => handleCheckboxChange(event, data?.SKU)}
                />
                <p className='text-xs font-semibold'>{index}</p>
            </div>

            <div className="col-span-1">
                <img src={data[ImageSmall]} alt="catalog_img" className='w-12 h-12' />
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>{data?.SKU}</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold capitalize'>{data[itemType]}</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold lowercase'>{data?.Title}</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold lowercase'>{data?.Description}</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold lowercase'>{data?.Brand}</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>{data[CostPrice]}</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>{data?.Quantity}</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>{data?.size}</p>
            </div>
        </div>

        
    </div>
  )
}

export default TableBody