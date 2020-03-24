import styled from "styled-components"

export const Tag = styled.span`
  background-color: rgba(0, 0, 0, 0.06);
  display: inline-block;
  border-radius: 25px;
  padding: 2px 14px;
  font-size: 11px;
  font-weight: bold;
  &.correlative {
    background: var(--pink-rgba);
    color: var(--pink);
  }
  &.completed {
    background: var(--green-rgba);
    color: var(--green);
  }
  &.pending {
    background-color: var(--purple-rgba);
    color: var(--purple);
  }
`
