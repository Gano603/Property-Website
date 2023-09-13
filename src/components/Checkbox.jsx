import '../styles/CheckboxList.scss'; // Import the SCSS file for styling

export function CheckboxList({ options , value , setvalue}) {
  const handleCheckboxChange = (option) => {
    if (value.includes(option)) {
      setvalue(value.filter((item) => item !== option));
    } else {
      setvalue([...value, option]);
    }
  };

  return (
    <div className="checkbox-list">
      {options.map((option) => (
        <label key={option} className="checkbox-label">
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxList;





