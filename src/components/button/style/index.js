import styled from 'styled-components';
import { lighten } from 'polished';

export const BaseButton = styled.button`
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.color};
  transition: 0.2s ease;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  font-size: large;
  box-shadow: 0 12px 10px ${(props) => lighten(0.1, props.color)};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 10px ${(props) => lighten(0.1, props.color)};
  }
`;
