import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  //커스텀 hooks
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  // const style = useMemo(() => ({ marginTop: 10 }), []);
  // styled-components or useMemo 사용해야지 리랜더링할때 다시 그려지지 않는다.

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-id">비밀번호</label>
          <br />
          <Input
            name="user-id"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

LoginForm.prototype = {
  setIsLoggedIn: PropTypes.func.isReqired,
};

export default LoginForm;
