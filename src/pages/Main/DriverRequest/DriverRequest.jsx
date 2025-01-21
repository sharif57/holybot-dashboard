import Swal from "sweetalert2";
import { driverItems } from '../../../constants/driver.constants'

const DriverRequest = () => {
  const handleDeleteConfirmation = () => {
    Swal.fire({
      text: "Are you sure you want to delete?",
      showCancelButton: true,
      confirmButtonText: "     Sure    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("user-update");
        // navigate("/auth");
      }
    });
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {driverItems.map((item, index) => (
        <div key={index} className="bg-white py-2 rounded-md shadow-md border border-gray-200 border-2">
          <div className="flex items-center justify-center flex-col">
            <img src={item.image} alt="driver" className='w-16 h-16 object-contain' />
            <h3 className='text-black'>{item.name}</h3>
            <p className='text-black/90 text-sm'>{item.designation}</p>
          </div>
          <div className="driver-request__info">
            <h1 className='text-sm md:text-xl text-black pl-4 mb-3'>Documents</h1>
            <div className="flex items-center justify-center text-xs gap-8">
              <div className='flex flex-col items-center justify-center gap-2'>
                <img src={item.doc1.image} alt="pdf" className='w-16 h-16 object-contain' />
                <p>{item.doc1.name}</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                <img src={item.doc2.image} alt="pdf" className='w-16 h-16 object-contain' />
                <p>{item.doc2.name}</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                <img src={item.doc3.image} alt="pdf" className='w-16 h-16 object-contain' />
                <p>{item.doc3.name}</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2'>
                <img src={item.doc4.image} alt="pdf" className='w-16 h-16 object-contain' />
                <p>{item.doc4.name}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="p-4  text-center flex items-center justify-center">
              <button
                className="w-fit bg-black text-white px-10 py-2 flex items-center justify-center gap-3 text-sm outline-none rounded-lg"
              >
                <span className="text-white font-light">Approved</span>
              </button>
            </div>
            <div className="p-4  text-center flex items-center justify-center">
              <button
                className="w-fit bg-transparent text-black border border-black px-10 py-[7px] flex items-center justify-center gap-3 text-sm outline-none rounded-lg"
              >
                <span className="text-black font-light" onClick={handleDeleteConfirmation}>Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DriverRequest
