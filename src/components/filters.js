import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: flex;
  margin: 0;
  .tag-item{
    cursor:pointer;
    margin: 0;
    margin-right: 8px;
    &:last-child{
      margin-right: 0;
    }
    span{
      background-color: var(--white-smoke);
      color: var(--grey);
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      border-radius: 4px;
      padding: 4px 8px;
      transition: background-color 0.3s ease, color 0.3s ease;
      &.selected, &:hover{
        background-color: var(--purple);
        color: white;
      }
    }
  }
`

const Filters = ({filterResultsFn, currentFilter}) => {

  const filterResultsHandler = filter => {
    return () => {
      filterResultsFn(filter)
    }
  }

  return (
    <Wrapper>
      <li onClick={filterResultsHandler("indicadores")} className="tag-item">
        <span className={currentFilter === "indicadores" ? "selected" : ""}>
          Indicadores
        </span>
      </li>
      <li onClick={filterResultsHandler("patogenos")} className="tag-item">
        <span className={currentFilter === "patogenos" ? "selected" : ""}>
          Patógenos
        </span>
      </li>
      <li onClick={filterResultsHandler("micotoxinas")} className="tag-item">
        <span className={currentFilter === "micotoxinas" ? "selected" : ""}>
          Micotoxinas
        </span>
      </li>
    </Wrapper>
  )
}

export default Filters