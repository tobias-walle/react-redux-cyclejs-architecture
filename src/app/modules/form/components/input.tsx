import styled from 'styled-components';
import { SHADOW_LEVELS } from '../../core/constants/shadows';

// language=PostCSS
export const Input = styled.input`
  & {
    padding: .5rem;
    background: white;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    font-size: 1rem;
    width: 100%;
    box-shadow: ${SHADOW_LEVELS[0]};
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  &:focus {
    box-shadow: ${SHADOW_LEVELS[1]};
    outline: none;
    border-bottom: 1px solid #a5a5a5;
  }
`;
