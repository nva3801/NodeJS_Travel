import React, { Fragment, useState } from "react";
import { IconEyeClose, IconEyeOpen } from "../icon";
import Input from "./Input";

const InputPasswordToggle = ({...props}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Nhập mật khẩu"
        className="pr-16"
        {...props}
        autoComplete="off"
      >
        {!togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(true)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(false)}></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;