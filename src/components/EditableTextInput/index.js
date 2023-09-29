import {Component} from 'react'

import {
  BgContainer,
  EditTextContainer,
  Heading,
  InputElement,
  ButtonEl,
  InputButtoncCart,
  Description,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    isButtonClicked: false,
    EditableText: '',
  }

  onChangeEditableText = event => {
    this.setState({EditableText: event.target.value})
  }

  onClickSaveBtn = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditableText, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <EditTextContainer>
          <Heading>Editable Text Input</Heading>
          <InputButtoncCart>
            {isButtonClicked ? (
              <Description>{EditableText}</Description>
            ) : (
              <InputElement
                type="text"
                onChange={this.onChangeEditableText}
                value={EditableText}
              />
            )}

            <ButtonEl type="button" onClick={this.onClickSaveBtn}>
              {EditSaveButton}
            </ButtonEl>
          </InputButtoncCart>
        </EditTextContainer>
      </BgContainer>
    )
  }
}
export default EditableTextInput
