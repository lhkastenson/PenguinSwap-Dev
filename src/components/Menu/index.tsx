import React, { useRef } from 'react'
import { Code, Info, MessageCircle, PieChart } from 'react-feather'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { ExternalLink } from '../../theme'

const StyledMenuButton = styled.button`
  width: 6rem;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  color:${({ theme }) => theme.text1};
  background-color:${({ theme }) => theme.bg3};
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.25rem 0.25rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
    border: 1px solid gold;
  }
  > svg {
    margin-right: 8px;
  }
`

const CODE_LINK = 'https://github.com/penguinparty-eth'

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <span>💎Menu💎</span>
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
        <MenuItem id="link" href="https://penguinparty.eth.link/">
          🏰Home
        </MenuItem>
        <MenuItem id="link" href="https://saren.io/">
          💮Saren Protocol
        </MenuItem>
          <MenuItem id="link" href="https://hiturunk.medium.com">
            <Info size={14} />
            News
          </MenuItem>
          <MenuItem id="link" href={CODE_LINK}>
          <Code size={14} />
            Code
          </MenuItem>
          <MenuItem id="link" href="https://discord.gg/pkmBgQr">
          <MessageCircle size={14} />
            Discord
          </MenuItem>
          <MenuItem id="link" href="https://gnosis-safe.io/app/#/safes/0x686B4535FF6573cef3FF37419A4fc6Ac775Ec7ea/balances">
            💰 Treasury
          </MenuItem>
          <MenuItem id="link" href="https://snapshot.page/#/penguin-party">
            🐧 Voting
          </MenuItem>
          <MenuItem id="link" href="https://penguinalytics.eth.link/">
            <PieChart size={14} />
            Analytics
          </MenuItem>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
