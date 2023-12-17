
export function CheckboxList({ options, value, setvalue }) {
  const handleCheckboxChange = (option) => {
    if (value.includes(option)) {
      setvalue(value.filter((item) => item !== option));
    } else {
      setvalue([...value, option]);
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      {options.map((option) => (
        <div className='w-1/2 my-2'>
          <label key={option}>
            <input
              type="checkbox"
              className='m-2'
              checked={value.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className='text-lg'>{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;





