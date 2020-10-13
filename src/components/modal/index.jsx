import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { Tag, RoundedTag, zoomFadeIn, fadeIn } from '../styled';
import { formatDate, renderLinkButtons } from '../../resources/utils';
import theme from '../../resources/theme.json';
import { selectItem } from '../../store/actions';

function Modal() {
  const { selectedItem } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  if (!selectedItem) {
    return null;
  }

  const {
    date,
    technologies,
    title,
    subtitle,
    description,
    contributions,
    image,
    links,
  } = selectedItem;

  const hideModal = () => dispatch(selectItem(null));

  return (
    <Wrapper>
      <Overlay onClick={hideModal} />
      <PopupContainer>
        <CloseButton onClick={hideModal} />
        <TitleWrapper>
          <h1>{title}</h1>
          <TagsWrapper>
            <Tag color={theme.primary}>{subtitle}</Tag>
            <Tag>{formatDate(date)}</Tag>
          </TagsWrapper>
        </TitleWrapper>
        <p>{description}</p>
        <TechWrapper>
          {technologies.sort().map((tech) => (
            <TechTag key={tech} size="small">
              {tech}
            </TechTag>
          ))}
        </TechWrapper>
        <SplitWrapper>
          <img src={image} alt={`${title} preview`} />
          <ContentWrapper>
            <ul>
              {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
            <ButtonsWrapper>
              {renderLinkButtons(links, 'medium', theme.thistle)}
            </ButtonsWrapper>
          </ContentWrapper>
        </SplitWrapper>
      </PopupContainer>
    </Wrapper>
  );
}

const FixedFullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(FixedFullScreen)`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(FixedFullScreen)`
  background: rgba(0, 0, 0, 0.5);
  animation: 0.2s ${fadeIn};
`;

const PopupContainer = styled.div`
  position: fixed;
  width: 70%;
  min-width: 350px;

  background: white;
  padding: 20px 40px 40px;
  border-radius: 4px;
  border-top: 44px solid ${theme.thistle};

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  animation: 0.25s ${zoomFadeIn};

  h1 {
    margin: 0;
  }
`;

const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: -26px;
  right: 12px;
  color: white;

  transition: 0.1s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;

  margin-bottom: 8px;

  h1 {
    margin-right: 8px;
  }
`;

const TagsWrapper = styled.div`
  margin: 8px 0;

  ${Tag}:not(:last-child) {
    text-transform: uppercase;
    margin-right: 4px;
  }
`;

const TechTag = styled(RoundedTag)`
  cursor: default;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  margin: 2px 0;
`;

const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${TechTag}:not(:last-child) {
    margin-right: 4px;
  }
`;

const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 16px;

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }

  ul {
    margin: 0;

    li {
      list-style: circle;
      margin: 8px 0;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  a:not(:last-child) {
    margin-right: 4px;
  }

  button {
    margin-bottom: 4px;
  }
`;

export default Modal;
