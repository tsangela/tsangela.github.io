import React from 'react';
import styled from 'styled-components';

function Divider() {
  return (
    <DividerWrapper>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg"
        alt="divider decorator"
      />
    </DividerWrapper>
  );
}

export default Divider;

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    min-width: 100px;
    width: 10%;
    height: auto;
  }
`;
