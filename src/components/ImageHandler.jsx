import { PiUploadSimpleBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { BiErrorAlt } from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast'

const ImageHandler = ({ files, setfiles }) => {
  const File_tab = ({ data, iteration, dat, setdat }) => {
    
    const removeTab = (iter) => {
      return (
        setdat(dat.filter((_,i) => i !== iter))
      )
    }

    return (
        <div className='flex justify-between bg-gray-300 px-3 items-center border border-black my-2 py-1'><span>File {iteration}: {data.name}</span><RxCross2 className='cursor-pointer' onClick={() => removeTab(iteration-1)} /></div>    )
  }
  return (
    <div className='my-8'>
      <Toaster />
      <h2 className='font-semibold text-lg my-2'>{files.length === 0 ? "Upload images of your property" : "Images"}</h2>
      {files.length === 0 &&
        <div className='h-56 2xl:h-72 w-[80%] 2xl:w-[70%] flex justify-center items-center bg-gray-200 border border-black rounded-md' id='file_input' onClick={() => document.getElementById('fileInput').click()}>
          <div className='flex flex-col items-center'>
          <PiUploadSimpleBold className='text-red-500 text-5xl' />
          <h2 className='text-2xl my-2 font-semibold'>Upload your images</h2>
          </div>
        </div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="file" onChange={(e) => {
          if ((files.length + e.target.files.length) > 10) {
            toast(<span className='toast-notification'>
              <BiErrorAlt /> Max 10 Files Allowed</span>, {
              duration: 4000,
              position: 'top-right',
            })
          }
          else {
            setfiles([...files, ...e.target.files]);
          }
        }} accept='image/jpeg, image/png, image/jpg' multiple id="fileInput" style={{ display: "none" }} />
      </form>
      {(files.length > 0) &&
        <div className="w-[70%]">
          {files.map((value, iter) => (
            <File_tab key={iter} data={value} iteration={iter + 1} dat={files} setdat={setfiles} />
          ))}
          <div onClick={() => document.getElementById('fileInput').click()} className='flex cursor-pointer bg-gray-300 px-3 items-center justify-center border border-black my-2 py-1'>
            <AiOutlinePlus className='cursor-pointer z-20' />
          </div>
        </div>}
    </div>
  )
}

export default ImageHandler