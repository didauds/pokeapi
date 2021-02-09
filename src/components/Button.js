import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 15px;
  appearance: none;
  background: ${props => props.bgColor};
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid ${props => props.bgColor};
  min-width: 150px;
`;

Button.defaultProps = {
  bgColor: '#2fa1d6'
}

Button.propTypes= {
  bgColor: PropTypes.string,
}

export default Button;