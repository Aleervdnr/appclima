import { BsSearch } from 'react-icons/bs';

export default function InputBox({data,onChange, onSubmit}) {
  return (
    <form 
        className='input-group max-w-[300px] mb-6 mt-2 mx-auto'
        onSubmit={onSubmit}>
        <input 
            type="text" 
            name="city" 
            onChange={onChange}
            value={data}
            className='form-control' />
        <button className='btn btn-primary'>
            <BsSearch/>
        </button>
    </form>
  )
}
