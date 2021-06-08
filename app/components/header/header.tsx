import React from "react"
import { translate } from "../../i18n/"
import { Button } from "../button/button"
import { Icon } from "../icon/icon"
import { HeaderProps } from "./header.props"
import { HeaderContainer } from "./HeaderContainer"
import { Left } from "./Left"
import { Right } from "./Right"
import { Title, TitleMiddle } from "./Title"

export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <HeaderContainer>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <Left />
      )}
      <TitleMiddle>
        <Title style={titleStyle || {}}>{header}</Title>
      </TitleMiddle>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <Right />
      )}
    </HeaderContainer>
  )
}
