import TableBody from './TableBody'
import { useCatalog } from '../../context/catalogContext'

const Table = () => {
    const { catalog, handleSelectAllCatalog, isAllSelected } = useCatalog()
    // console.log(catalog)

  return (
    <div className='my-5'> 
        <div className="grid grid-cols-12 items-center bg-[#F0F4FE] h-10 text-[#595959] px-6">
            <div className="col-span-1 flex items-center gap-2">
                <input 
                    type="checkbox" 
                    className='bg-transparent'
                    checked={isAllSelected}
                    onChange={handleSelectAllCatalog}
                />
                <p className='text-xs font-semibold'>S/N</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Image</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>SKU</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Name</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold'>Title</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold'>Description</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Brand</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Cost Price</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Quantity</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Size</p>
            </div>
        </div>

        <div className="bg-white rounded-lg my-3 px-6">
            {Array.isArray(catalog) && 
                catalog.map((item, index: number) => (
                    <TableBody data={item} index={index + 1} key={item?.SKU} />
                ))
            }   
        </div>
    </div>
  )
}

export default Table