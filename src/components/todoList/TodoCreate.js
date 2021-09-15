import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';

const CircleButton = styled.button`
    background-color: #38d9a9;
    &:hover {
        background-color: #63e6be;
    }
    &:active {
        background-color: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    transition: .125s all ease-in;
    ${props => props.open && css`
        background-color: #ff6b6b;
        &:hover {
            background-color: #ff8787;
        }
        &:active {
            background-color: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;
const InsertForm = styled.form`
    background-color: #f8f9fa;
    padding: 32px 32px 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    return (
    <>
        {open && (
            <InsertFormPositioner>
                <InsertForm>
                    <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                </InsertForm>
            </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
    </>
    );
}

export default TodoCreate;