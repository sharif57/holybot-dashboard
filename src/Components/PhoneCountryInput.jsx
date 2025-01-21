import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Input, Select } from "antd";
import { FlagIcon } from 'react-world-flags';

const PhoneCountryInput = ({ disabled }) => {
  const [phoneNumber, setPhoneNumber] = useState("+1 4575454545");
  const [countryCode, setCountryCode] = useState("US");
  // console.log(phoneNumber);
  const handleCountryChange = (value) => {
    setCountryCode(value);
  };
  return (
    <PhoneInput
      disabled={disabled}
      className="custom-phone "
      placeholder="Enter phone number"
      international
      countryCallingCodeEditable={false}
      // style={{
      //   marginTop: "1px",
      // }}
      defaultCountry="RU"
      value={phoneNumber?.toString()}
      onChange={setPhoneNumber}
    />
    // <Input.Group compact style={{ display: 'flex', alignItems: 'center' }}>
    //   {/* Flag and Country Code */}
    //   <Select
    //     disabled={disabled}
    //     defaultValue={countryCode}
    //     onChange={handleCountryChange}
    //     style={{ width: '120px', marginRight: '8px' }}
    //   >
    //     <Select.Option value="US">
    //       <FlagIcon code="US" style={{ width: '20px', height: '14px', marginRight: '8px' }} />
    //       +1
    //     </Select.Option>
    //     <Select.Option value="RU">
    //       <FlagIcon code="RU" style={{ width: '20px', height: '14px', marginRight: '8px' }} />
    //       +7
    //     </Select.Option>
    //     {/* Add more countries and flags here */}
    //   </Select>

    //   {/* Phone Number Input */}
    //   <Input
    //     disabled={disabled}
    //     placeholder="Enter phone number"
    //     value={phoneNumber}
    //     onChange={(e) => setPhoneNumber(e.target.value)}
    //     style={{ width: 'calc(100% - 130px)' }}
    //   />
    // </Input.Group>
  );
};

export default PhoneCountryInput;
