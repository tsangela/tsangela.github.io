import styled from 'styled-components';
import { lighten } from 'polished';

const BaseButton = styled.button`
  cursor: pointer;

  padding: 8px 24px;
  padding: ${(props) => (props.size === 'small' ? '4px 12px' : '8px 24px')};
  border-radius: 100px;
  border: 1px solid ${(props) => props.color};

  font-size: ${(props) => props.size};
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 2px ${(props) => lighten(0.1, props.color)};

  transition: 0.2s ease;
`;

export const StyledFilledButton = styled(BaseButton)`
  background: ${(props) => props.color};
  color: white;

  &:hover {
    border-color: ${(props) => lighten(0.05, props.color)};
    background: ${(props) => lighten(0.05, props.color)};
  }
`;

export const StyledOutlineButton = styled(BaseButton)`
  background: transparent;
  color: ${(props) => props.color};

  &:hover {
    background: ${(props) => props.color};
    color: white;
  }
`;

export const StyledPopButton = styled(StyledFilledButton)`
  box-shadow: 0 12px 12px ${(props) => lighten(0.1, props.color)};
  font-size: large;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 12px ${(props) => lighten(0.1, props.color)};
  }
`;

export const ButtonIcon = styled.span`
  margin-right: 6px;
`;
