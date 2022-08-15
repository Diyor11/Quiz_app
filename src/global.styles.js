import styled from 'styled-components'
// sx={{fontSize: '16px', width: '100%', p: '8px', display: 'flex', justifyContent: 'left', borderRadius: '4px'}}>

export const VariantButton = styled.div`
    font-size: 16px;
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: left;
    border-radius: 4px;
    background-color: ${({isSelected, getChecked, correctValue}) => {
        if(getChecked && isSelected)
            return correctValue ? '#52eb52':'#fd4646'
        if(getChecked && correctValue)
            return '#52eb52'
        else if(isSelected)
            return '#b1b0b0'
        else return '#fff'
    }};
`
export const PaginationItem = styled.li`
    border: 2px solid #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${({isActive, answer: {isTrue, getChecked}}) => {
        if(isActive)
            return '#00f'
        if(getChecked)
            return isTrue ? '#52eb52':'#fd4646'
        
    }};
    color: ${({isActive, answer: {getChecked}}) => isActive || getChecked ? '#fff':'#000'};
`

export const ModalCom = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(33, 37, 41, 0.6);
    backdrop-filter: blur(2px);
    display: ${({show}) => show ? 'flex':'none'};
    align-items: center;
    justify-content: center;
    
`